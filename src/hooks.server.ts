import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from '$env/static/public'
import { createSupabaseServerClient} from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'


export const handle: Handle = asunc ({event, resolve}) => {
	event.locals.supabase = createSupabaseServerClient
}
