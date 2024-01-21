<script lang="ts">
	import TaskTableRow from '$lib/components/TaskTableRow.svelte'
	import type { Task } from '$stores/taskStore'
	import { tasks } from '$stores/taskStore'
	import { onMount } from 'svelte'
	console.log($tasks)

	let taskObj_sample: Task = {
		id: new Date().getTime(),
		task_name: 'Brush Teeth',
		enabled: true,
		last_updated: '2021-10-10',
		success: 5,
		occurences: 10,
	}
</script>

<main class="w-full h-full flex flex-col justify-center items-center">
	<table class="m-auto">
		<tr>
			<th>Task Name</th>
			<th>Enabled</th>
			<th>Last Update</th>
			<th>Success</th>
			<th>Occurences</th>
			<th>Delete</th>
		</tr>

		{#each $tasks as task, i}
			<TaskTableRow taskObj={task} id={i} />
		{/each}
	</table>

	<!-- <button class="btn variant-filled-primary w-1/4 my-5" on:click={update_task}
		>Save Settings</button
	> -->
</main>

<style>
	th {
		@apply p-9;
	}
</style>
