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
		{ name: 'Water Intake', completed: false },
		{ name: 'Food Intake', completed: false },
		{ name: 'Exercise', completed: false },
		{ name: 'Meditation', completed: false },
		{ name: 'Reflection', completed: false },
		{ name: 'Socailizing', completed: false },
		{ name: 'Study/Homework', completed: false },
		{ name: 'Lectures', completed: false },
		{ name: 'Leetcode', completed: false },
		{ name: 'Socailizing', completed: false },
		{ name: 'Laundry', completed: false },
		{ name: 'Cleaning', completed: false },
		{ name: 'Trash Disposal', completed: false },
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
				<Task name={todo.name} completed={todo.completed} />
			{/each}
		</div>
	</div>
{/if}

<!-- task_name, user_id, active, days_to_repeat, completions -->

<!-- settings per task, per user -->
