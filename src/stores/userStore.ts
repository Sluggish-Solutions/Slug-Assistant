import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
export const curr_user_id = writable('')

export const prev_messages: Writable<Array<string>> = localStorageStore('previous_messages', ['', 'wahoooooo', 'penis!!!!!!!', 'i love mommmyyy!!!!'])
export const setUserId = (id: string) => {
	curr_user_id.set(id)

}

// might want to store the most recently sent messages here?
//
//

