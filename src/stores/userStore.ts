import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'
import { get } from 'svelte/store'
export const curr_user_id = writable('')
export const convo_id = writable('')
export const first_time = writable(true);
const prev_messages: Writable<Array<string>> = localStorageStore(
	'previous_messages',
	['', 'wahoooooo', 'penis!!!!!!!', 'i love mommmyyy!!!!']
)
export const setUserId = (id: string) => {
	curr_user_id.set(id)
}
export const setConvoId =(id: string) => {
	convo_id.set(id)
}

export const add_message_to_store = (mommy: boolean, new_message: string) => {
	let old_array = get(prev_messages)
	if (old_array.length >= 3) {
		old_array.shift()
	}
	//need some way to preserve context
	if (mommy) {
		new_message = '. Next message sent by ChatGPT -> ' + new_message
	} else {
		new_message = '. Next message sent by User --> ' + new_message
	}
	old_array.push(new_message)
	prev_messages.set(old_array)
}

export const get_prev_messages = () => {
	//should return a stringarray_object
	// do this when you want to reset if it isnt working
	// prev_messages.set([""])
	let big_string: string = ''
	let messages = get(prev_messages)
	messages.forEach((message) => {
		big_string += message
	})
	return big_string
}

// might want to store the most recently sent messages here?
//
//
