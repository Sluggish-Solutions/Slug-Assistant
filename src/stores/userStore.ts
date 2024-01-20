import {writable} from 'svelte/store'

export const curr_user_id = writable('')

export const setUserId = (id: string)=> {
	curr_user_id.set(id)

}


