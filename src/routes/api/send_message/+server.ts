
import { json, type RequestHandler } from '@sveltejs/kit';
import OpenAI from 'openai';
import { OPEN_AI_KEY } from '$env/static/private';
import type { Config } from '@sveltejs/adapter-vercel';
import { fail } from '@sveltejs/kit';


export const config: Config = {
    runtime: 'edge'
};
const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
});

export const POST: RequestHandler = async ({ locals, request }) => {
    try {
        const requestData = await request.json();
        let { user_id, new_message, prev_messages, convo_id} = requestData;

        console.log(user_id);
        console.log(prev_messages);
        console.log(new_message);
        console.log(convo_id)

        //temporary assignment
        let user_message_send = await locals.supabase
            .from('messages')
            .insert({author: user_id, body:new_message, conversation_id: convo_id})
    

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
    console.log("user thing", user_message_send)
        if (user_message_send.error){
        }
        console.log("what we are sending", user_message_send)
        let mommy_message_send = await locals.supabase
        .from('messages')
        .insert({author: null, body:mommy_message.content, conversation_id: convo_id})

        return json({ success: true, ai_response: mommy_message});

    } catch (err) {
        console.error(err);
        return json({ error: 'There was an error processing your request' }, { status: 500 });
    }
};
