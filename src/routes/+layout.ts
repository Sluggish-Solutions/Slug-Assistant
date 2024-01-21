import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import type { Database } from '../../types/supabase.types'
import { first_time, setUserId } from '../stores/userStore'
import { get } from 'svelte/store'
import { redirect } from '@sveltejs/kit'
import { tasks, add_task } from '$stores/taskStore'
//id local storage for user id?
// @ts-expect-error depends has any time, we dont care abt it though
export const load = async ({ fetch, data, depends }) => {
	depends('supabase.auth')

	const supabase = createSupabaseLoadClient<Database>({
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		supabaseUrl: PUBLIC_SUPABASE_URL,
		event: { fetch },
		serverSession: data.session,
	})
	const {
		data: { session },
	} = await supabase.auth.getSession()

	//setting local storage user ide

	if (session) {
		setUserId(session.user.id)
	}

	console.log(get(first_time))
	// if (get(first_time)){
	// 	return redirect(303, '/welcome')
	// }

	return { supabase, session }
}
