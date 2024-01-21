<script lang="ts">
	export let data;
	import UserMessage from "$lib/components/chat/UserMessage.svelte";
	import MommyMessage from "$lib/components/chat/MommyMessage.svelte";
	import {get} from 'svelte/store'
	import { onDestroy } from "svelte";
	let currentMessage = "";

//	console.log(data);
let elemChat: HTMLElement;

function scrollChatBottom(behavior?: ScrollBehavior): void {
	elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
}
/* example of adding message to array and doing that
function addMessage(): void {
	const newMessage = {
		id: messageFeed.length,
		host: true,
		avatar: 48,
		name: 'Jane',
		timestamp: new date(),
		message: currentMessage,
		color: 'variant-soft-primary'
	};
	// Append the new message to the message feed
	messageFeed = [...messageFeed, newMessage];
	// Clear the textarea message
	currentMessage = '';
	// Smoothly scroll to the bottom of the feed 
	setTimeout(() => { scrollChatBottom('smooth'); }, 0);
} */

//let all_messages = Array.from(data.newMessageFeed)


// once a user sends a message, we need to send / route it through server! 
// just have an endpoint lmao
import {useChat} from 'ai/svelte'
    import { convo_id } from "$stores/userStore.js";
	let all_messages = data.newMessageFeed;
	console.log(all_messages)

	//* ENABLED REALTIME FILTER HOLY MOLY ITS SO FINEEEEE

	let new_messages_channel = data.supabase
		.channel('messages_channel')
		.on(
			'postgres_changes',
			{
				event: 'INSERT',
				schema: 'public',
				table: 'messages',
				filter: 'conversation_id=eq.' + get(convo_id)
			},
			async (payload) => {
				let new_message = await data.supabase
					.from('messages')
					.select('*, author(*)')
					.eq('id', payload.new.id);

				// @ts-ignore
				all_messages = [...all_messages, ...new_message.data]; // Update all_messages array

console.log(all_messages)
				console.log('called?');
			}
		)
		.subscribe((status) => {
			console.log(status);
		});

	onDestroy(() => {
		data.supabase.removeChannel(new_messages_channel);
	});

</script>

<div bind:this={elemChat} class="overflow-y-auto">
	<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">
		{#if all_messages}
		{#each all_messages as bubble, i}
			{#if bubble.author }
				<!-- Host Message Bubble -->
				<UserMessage {bubble} />
			{:else}
				<!-- Guest Message Bubble -->
				<MommyMessage {bubble} />
			{/if}
		{/each}
		{/if}
	</section>
</div>
<div
	class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token"
>
	<button class="input-group-shim">+</button>
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
	/>
	<button class="variant-filled-primary" on:click={async()=>{data.sendMessage(currentMessage)}}>Send</button>
</div>
