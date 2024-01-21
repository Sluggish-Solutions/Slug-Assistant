<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { onMount } from 'svelte'
	import Task from './Task.svelte'
	import { Settings } from 'lucide-svelte'

	let condition = false

	onMount(() => {
		condition = true
	})

	let todos = [
		{ text: 'Water Intake', done: false },
		{ text: 'Food Intake', done: false },
		{ text: 'Exercise', done: false },
		{ text: 'Meditation', done: false },
		{ text: 'Reflection', done: false },
		{ text: 'Socailizing', done: false },
		{ text: 'Study/Homework', done: false },
		{ text: 'Lectures', done: false },
		{ text: 'Leetcode', done: false },
		{ text: 'Socailizing', done: false },
		{ text: 'Laundry', done: false },
		{ text: 'Cleaning', done: false },
		{ text: 'Trash Disposal', done: false },
	]
</script>

{#if condition}
	<h1
		class="flex items-center justify-center bg-black py-5 px-8 rounded-lg m-5 mx-2 gap-3 text-2xl"
	>
		Tasks

		<a href="/settings">
			<Settings />
		</a>
	</h1>

	<div
		in:fly={{ x: 100, duration: 3000, easing: quintOut }}
		out:fly={{ x: -100, duration: 3000, easing: quintOut }}
	>
		<div
			class="flex flex-col gap-5 p-5 mx-3 max-h-[60vh] overflow-y-auto rounded-xl border-4"
		>
			{#each todos as todo}
				<Task name={todo.text} completed={todo.done} />
			{/each}
		</div>
	</div>
{/if}

<!-- task_name, user_id, active, days_to_repeat, completions -->

<!-- settings per task, per user -->
