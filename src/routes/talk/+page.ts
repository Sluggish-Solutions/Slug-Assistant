import { curr_user_id, prev_messages } from "../../stores/userStore";
import type { PageLoad } from "./$types";
import {get} from 'svelte/store'
// }
const sendMessage = async(convo_id:string, curr_message: string) => {
	//get array of local storage messages
	const messages_arr = get(prev_messages)
	console.log(messages_arr)
	//request my endpoint
	//
	let user_id = get(curr_user_id)

	const res = await fetch('/api/send_message ', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
			"new_message": curr_message,
			"message_history": messages_arr,
		})
	})
	const response = await res.json()
	
	console.log(response);
// ideally it would be nice if there was some sort of toast if some error happend?
	//
}
	//save and return back whatever we get back
export const load: PageLoad = async ({ parent }) => {
const { session } = await parent();
	// needs to load data from supabase for the messages
	// 
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


