<script>
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { onMount } from 'svelte'
	import Task from './Task.svelte'
	import { PlusCircle } from 'lucide-svelte'

	let condition = false

	onMount(() => {
		// Set the condition to true when the component is mounted
		condition = true
	})

	let todos = [
		{ text: 'Brush Teeth', done: false },
		{ text: 'Shower', done: false },
		{ text: 'Homework', done: false },
		{ text: 'Laundry', done: false },
		{ text: 'Food', done: false },
		{ text: 'Water', done: false },
	]
</script>

{#if condition}
	<div
		in:fly={{ x: 100, duration: 3000, easing: quintOut }}
		out:fly={{ x: -100, duration: 3000, easing: quintOut }}
	>
		<section
			class="flex items-center justify-center bg-black h-fit py-5 px-8 rounded-lg m-5 mx-3 gap-3"
		>
			<h1 class="text-3xl">Tasks</h1>
		</section>
		<div class="flex flex-col gap-5 p-5 mx-3 rounded-xl border-4">
			{#each todos as todo}
				<Task task={todo.text} done={todo.done} />
			{/each}
		</div>
	</div>
{/if}
