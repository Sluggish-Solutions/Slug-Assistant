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
		<section
			class="flex items-center justify-center bg-black h-fit py-5 px-8 rounded-lg m-5 mx-3 gap-5"
		>
			<h1>Tasks</h1>
			<!-- <button on:click={createNewTask}>
				<PlusCircle />
			</button> -->
		</section>
		<div class="flex flex-col gap-5">
			{#each todos as todo}
				<Task task={todo.text} done={todo.done} repeatTime={1} />
			{/each}
		</div>
	</div>
{/if}
