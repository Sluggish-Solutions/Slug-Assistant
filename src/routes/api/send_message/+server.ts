
import { json, type RequestHandler } from '@sveltejs/kit';
import OpenAI from 'openai';
import { OPEN_AI_KEY } from '$env/static/private';
import type { Config } from '@sveltejs/adapter-vercel';
import { getTokens } from '$lib/tokenizer';
import { OpenAIStream, StreamingTextResponse } from 'ai';


export const config: Config = {
    runtime: 'edge'
};
const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
});

export const POST: RequestHandler = async ({ locals, request }) => {
    try {
        const requestData = await request.json();
        let { user_id, new_message, prev_messages } = requestData;

        console.log(user_id);
        console.log(prev_messages);
        console.log(new_message);

        //temporary assignment
    

        // Ask OpenAI for a streaming chat completion
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',

            // messages: prev_messages.map((msg) => ({ content: msg, role:'assistant' })),
            // how do i do this part?
            messages: [
                //context provided here
                {role: 'system', content: prev_messages },
            { role: 'function', name: "mother", content: "you are a motherly figure helping the user figure out how to become a successfull young adult. Really emphasize motherly love, and keep the messages to only a few sentences maximum" },
            { role: 'assistant', content: new_message }],

        });

        let mommy_message = response.choices[0].message

        console.log("response", response)
        
        //now we need to send this data to supabase to store when the client comes back








        return json({ success: true, ai_response: mommy_message});

    } catch (err) {
        console.error(err);
        return json({ error: 'There was an error processing your request' }, { status: 500 });
    }
};
