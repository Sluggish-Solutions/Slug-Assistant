
import { prev_messages } from "../../stores/userStore";
import type { PageLoad } from "./$types";
import {get} from 'svelte/store'
// }
export const sendMessage = async() => {
	//get array of local storage messages
	const messages_arr = get(prev_messages)
	console.log(messages_arr)
	//request my endpoint
	//
	//save and return back whatever we get back
}
