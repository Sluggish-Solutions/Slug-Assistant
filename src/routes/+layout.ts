import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import type { Database } from "../../types/supabase.types";
//id local storage for user id?
export const load = async ({fetch, data, depends}) => {
	depends('supabase.auth')

	const supabase = createSupabaseLoadClient<Database>({
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		supabaseUrl: PUBLIC_SUPABASE_URL,
		event: {fetch}, 
		serverSession: data.session

	})
	const {
		data: {session}
		} = await supabase.auth.getSession();

	//set local user id?
}

