import type { Provider } from "@supabase/supabase-js";

import { fail, redirect } from '@sveltejs/kit'

import type { Actions } from "@sveltejs/kit";
import { warn } from "console";

const OAUTH_PROVIDERS = ["google"];

export const actions: Actions = {
	signup: async ({ request, locals }) => {
		const formdata = await request.formData()
		const email = formdata.get('email')
		const password = formdata.get('password')

		if (email && password) {
			const { data, error } = await locals.supabase.auth.signInWithPassword({
				email: email.toString(),
				password: password.toString()
			})
			
			if(data.user && data.user.aud === 'authenticated') {
				return {user: data.user}
			}
		} else {
			return fail(301, {
				error: "no password / email provided"
			});
		}


	},

	login_Oauth: async ({locals, url}) => {
		const provider = url.searchParams.get("provider") as Provider;
	
		if(!provider) {
			return fail(400, {error: "something went wrong?"})
		}

		if(!OAUTH_PROVIDERS.includes(provider)){
			return fail(400, {error: "Provider not supported."})
		}

		const {data, error} = await locals.supabase.auth.signInWithOAuth({provider: provider})

		if (error) {
			return fail(400, {
				error: "something went wrong"
			})
			
		}
		throw redirect(303, data.url);
	
	}
}


