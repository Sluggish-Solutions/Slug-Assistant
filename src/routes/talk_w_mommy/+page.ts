import { prev_messages } from "../../stores/userStore";
import type { PageLoad } from "./$types";
import {get} from 'svelte/store'
// }
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
	return { session, messageFeed }
}


