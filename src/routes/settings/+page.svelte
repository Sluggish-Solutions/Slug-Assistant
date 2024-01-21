<script lang="ts">
	import TaskTableRow from '$lib/components/TaskTableRow.svelte'
	import type { Task } from '$stores/taskStore'
	import { tasks } from '$stores/taskStore'
	import { onMount } from 'svelte'

	onMount(() => {
		const savedTasks = localStorage.getItem('tasks')
		if (savedTasks) {
			tasks.set(JSON.parse(savedTasks))
		}
	})
</script>

<main class="w-full h-full flex flex-col justify-center items-center">
	<table class="m-auto">
		<!-- first row -->
		<tr>
			<th>Task Name</th>
			<th>Enabled</th>
			<th>Last Update</th>
			<th>Success</th>
			<th>Occurences</th>
		</tr>

		<!-- rest of the rows -->
		{#each $tasks as task}
			<TaskTableRow taskObj={task} />
		{/each}
	</table>
</main>

<style>
	th {
		@apply p-9;
	}
</style>
