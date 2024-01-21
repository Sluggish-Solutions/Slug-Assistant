<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { onMount } from 'svelte'
	import Task from './Task.svelte'
	import { Settings } from 'lucide-svelte'
	import Type from './Type.svelte'
	import { tasks } from '$stores/taskStore'

	let condition = false
	let enabledTasks = $tasks.filter((task) => task.enabled)

	onMount(() => {
		condition = true
	})
</script>

{#if condition}
	<div
		in:fly={{ x: -100, duration: 3000, easing: quintOut }}
		out:fly={{ x: 100, duration: 3000, easing: quintOut }}
	>
		<h1
			class="flex items-center justify-center bg-black py-5 px-8 rounded-lg m-5 mx-2 gap-3 text-2xl border-2 border-white"
		>
			<Type text="Tasks" />
		</h1>
		<div
			class="flex flex-col gap-5 p-5 mx-3 max-h-[60vh] overflow-y-auto rounded-xl border-4 border-purple-700"
		>
			{#each enabledTasks as task}
				<Task task={task} />
			{/each}
		</div>
	</div>
{/if}

<!-- task_name, user_id, active, days_to_repeat, completions -->

<!-- settings per task, per user -->
