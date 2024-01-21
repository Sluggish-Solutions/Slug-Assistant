<script lang="ts">
	import { fade, fly } from 'svelte/transition'
	import { onMount } from 'svelte'

	export let task: string
	export let done: boolean

	let visible = false

	onMount(() => {
		visible = true
	})
</script>

<!-- <div class='flex justify-center'> -->

<label
	class="flex justify-center items-center w-full rounded-lg {done
		? 'line-through'
		: ''} decoration-[3px] decoration-orange-300 text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-300 bg-black py-5"
>
	{#if visible}
		<h1 in:fly={{ x: -300, duration: 2000 }} out:fade>
			{task}
		</h1>
	{/if}

	<input
		type="checkbox"
		bind:checked={done}
		on:click={() => (done = !done)}
		class="hidden"
	/>
	<span class="checkmark"></span>
</label>
<!-- </div> -->
