<script>
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { onMount } from 'svelte'
	import Task from './Task.svelte'

	let condition = false

	onMount(() => {
		// Set the condition to true when the component is mounted
		condition = true
	})

	let todos = [
		{ text: 'Workout', done: false },
		{ text: 'Shower', done: false },
		{ text: 'Homework', done: false },
		{ text: 'Laundry', done: false },
	]
</script>

{#if condition}
	<div
		in:fly={{ x: 0, duration: 3000, easing: quintOut }}
		out:fly={{ x: -100, duration: 3000, easing: quintOut }}
	>
		<div class="flex justify-center items-center bg-slate-900 p-5 w-full">
      <h1>Tasks</h1>
			<!-- <div
				class="flex items-center justify-center bg-black h-fit mr-3 ml-3 py-4 rounded-lg w-full mb-5 mt-5"
			>
				Tasks
			</div> -->
      
		</div>
		<div class="flex flex-col gap-5">
			{#each todos as todo}
				<Task task={todo.text} done={todo.done} repeatTime={1} />
			{/each}
		</div>
	</div>
{/if}
