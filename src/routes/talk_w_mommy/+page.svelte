<script lang="ts">
	export let data;
	import UserMessage from "$lib/components/chat/UserMessage.svelte";
	import MommyMessage from "$lib/components/chat/MommyMessage.svelte";
	let currentMessage = "";
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

// once a user sends a message, we need to send / route it through server! 
// just have an endpoint lmao
</script>

<div bind:this={elemChat} class="overflow-y-auto">
	<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">
		{#each data.messageFeed as bubble, i}
			{#if bubble.host === true}
				<!-- Host Message Bubble -->
				<UserMessage {bubble} />
			{:else}
				<!-- Guest Message Bubble -->
				<MommyMessage {bubble} />
			{/if}
		{/each}
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
	<button class="variant-filled-primary" on:click={()=>{console.log(currentMessage)}}>Send</button>
</div>
