import { add_message_to_store, curr_user_id, get_prev_messages,  } from "../../stores/userStore";
import type { PageLoad } from "./$types";
import {get} from 'svelte/store'
// }
const sendMessage = async( curr_message: string) => {
	//get array of local storage messages
	const prev_messages = get_prev_messages()
	//request my endpoint

	console.log(curr_message)
	console.log(prev_messages)
	let user_id = get(curr_user_id)
	

	const res = await fetch('/api/send_message ', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
			"new_message": curr_message,
			"prev_messages": prev_messages,
		})
	})
	const response = await res.json()

	console.log("what the client gets back", response);
	add_message_to_store(false, curr_message)
	add_message_to_store(true, response.ai_response.content)
	return response.ai_response.content
// ideally it would be nice if there was some sort of toast if some error happend?
	//
}
	//save and return back whatever we get back
export const load: PageLoad = async ({ parent }) => {
const { session } = await parent();
	// needs to load data from supabase for the messages
	// need to filter time stamp / library / something like that 
	// need to load messages from the previous thing
let messageFeed = [
	{
		id: 0,
		host: true,
		avatar: 48,
		name: 'Jane',
		timestamp: 'Yesterday @ 2:30pm',
		message: 'Some message text.',
		color: 'variant-soft-primary'
	},
	{
		id: 1,
		host: false,
		avatar: 14,
		name: 'Michael',
		timestamp: 'Yesterday @ 2:45pm',
		message: 'Some message text.',
		color: 'variant-soft-primary'
	}
];
	return { session, messageFeed , sendMessage}
}


