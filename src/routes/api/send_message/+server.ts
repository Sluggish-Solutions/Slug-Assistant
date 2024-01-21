
import { json, type RequestHandler } from '@sveltejs/kit';
import OpenAI from 'openai';
import { OPEN_AI_KEY } from '$env/static/private';
import type { Config } from '@sveltejs/adapter-vercel';
import { getTokens } from '$lib/tokenizer';
import {OpenAIStream, StreamingTextResponse} from 'ai';


export const config: Config = {
	runtime: 'edge'
};
const openai = new OpenAI({
    apiKey: OPEN_AI_KEY || '',
});


export const POST: RequestHandler = async ({ locals, request }) => {
    try {
        const requestData = await request.json();
        const { conversation_id, messages } = requestData;
        console.log(requestData);

        // Calculate the total token count for the conversation
        let tokenCount = 0;
        const previousMessages = await supabase.from("messages")
                                               .select("body")
                                               .eq("conversation_id", conversation_id);
        if (previousMessages.data) {
            previousMessages.data.forEach(msg => {
                tokenCount += getTokens(msg.body);
            });
        }

        // Process new messages and check token count
        for (const message of messages) {
            tokenCount += getTokens(message.content);
            if (tokenCount >= 4000) {
                throw new Error('Token limit exceeded');
            }

            // Store new user messages in Supabase
            if (message.role === 'user') {
                await supabase.from("messages").insert({ 
                    created_at: new Date(), 
                    body: message.content, 
                    conversation_id: conversation_id 
                });
            }
        }

        // Ask OpenAI for a streaming chat completion
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages.map(msg => ({ content: msg.content, role: msg.role })),
            stream: true,
        });

        // Stream the response and store in Supabase simultaneously
        let aiResponse = '';
        for await (const message of response) {
            const messageContent = message.data; // Assuming 'data' contains the response text
            tokenCount += getTokens(messageContent);
            if (tokenCount >= 4000) {
                throw new Error('Token limit exceeded');
            }
            aiResponse += messageContent;

            // Store AI response in Supabase
            await supabase.from("messages").insert({ 
                created_at: new Date(), 
                body: messageContent, 
                conversation_id: conversation_id 
            });
        }

        // Return the final AI response to the client
        return json({ success: true, ai_response: aiResponse });
        
    } catch (err) {
        console.error(err);
        return json({ error: 'There was an error processing your request' }, { status: 500 });
    }
};
