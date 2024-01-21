import { add_message_to_store, convo_id, curr_user_id, get_prev_messages, setConvoId,  } from "../../stores/userStore";
import type { PageLoad } from "./$types";
import {get} from 'svelte/store'
import { fail } from "@sveltejs/kit";
// }
const sendMessage = async( curr_message: string) => {
	//get array of local storage messages
	const prev_messages = get_prev_messages()
	//request my endpoint

	let user_id = get(curr_user_id)
	let curr_convo_id = get(convo_id)

	const res = await fetch('/api/send_message ', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
			"new_message": curr_message,
			"prev_messages": prev_messages,
			"convo_id": curr_convo_id
		})
	})
	const response = await res.json()

	add_message_to_store(false, curr_message)
	add_message_to_store(true, response.ai_response.content)
	return response.ai_response.content
// ideally it would be nice if there was some sort of toast if some error happend?
	//
}
	//save and return back whatever we get back
export const load: PageLoad = async ({ parent }) => {
const { supabase, session } = await parent();
	// needs to load data from supabase for the messages
	// need to filter time stamp / library / something like that 
	// need to load messages from the previous thing
let curr_convo_id = get(convo_id)

	if(curr_convo_id === ''){
		console.log("creating conversation")
		// make request to supabase to create a thingy
		const convo_creation = await supabase
			.from("conversation")
		.insert({user: session?.user.id}).select().single()
		
		if (convo_creation.data) {
			setConvoId(convo_creation.data.id.toString())
			
		}

		if (convo_creation.error) {
			return fail(404, {
				error: "unauthorized"
			})
		}

		setConvoId(convo_creation.data.id.toString())
	}

curr_convo_id = get(convo_id)
	console.log('curr_convo_id', curr_convo_id)
	const preMessagesQuery = await supabase.from('messages')
		.select(`*, author(*)`)
		.eq("author", session!.user.id )
		.eq(`conversation_id`, parseInt(curr_convo_id))
	console.log('query', preMessagesQuery)
	let newMessageFeed = preMessagesQuery.data

	console.log("messages from db", newMessageFeed)
	

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
	return { session, messageFeed , sendMessage, newMessageFeed}
}


