<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { onMount } from 'svelte'
	import Task from './Task.svelte'
	import { Settings } from 'lucide-svelte'
    import Type from './Type.svelte';

	let condition = false
 
	onMount(() => {
		condition = true
	})

	// id: Date.now(),
	// 	task_name: 'Brush Teeth',
	// 	enabled: false,
	// 	last_updated: `${Date.now()}`,
	// 	success: 0,
	// 	occurences: 0,

	let todos = [
		{ id:1 ,task_name: 'Water Intake', last_updated: "", success:0, occurences:0},
		{ id:1 ,task_name: 'Food Intake', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Exercise', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Meditation', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Reflection', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Socailizing', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Study/Homework', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Lectures',last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Leetcode', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Socailizing', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Laundry', last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Cleaning',last_updated: "", success:0,occurences:0},
		{ id:1 ,task_name: 'Trash Disposal', last_updated: "", success:0,occurences:0}
	]
</script>

{#if condition}


	<div
		in:fly={{ x: -100, duration: 3000, easing: quintOut }}
		out:fly={{ x: 100, duration: 3000, easing: quintOut }}
	>
	<h1
	class="flex items-center justify-center bg-black py-5 px-8 rounded-lg m-5 mx-2 gap-3 text-2xl border-2 border-white"
>
	<Type text="Tasks"/>

</h1>
		<div
			class="flex flex-col gap-5 p-5 mx-3 max-h-[60vh] overflow-y-auto rounded-xl border-4 border-purple-700"
		>
			{#each todos as todo}
				<Task name={todo.name} completed={todo.completed} />
			{/each}
		</div>
	</div>
{/if}

<!-- task_name, user_id, active, days_to_repeat, completions -->

<!-- settings per task, per user -->
