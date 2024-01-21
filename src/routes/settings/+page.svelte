<script lang="ts">
	import TaskTableRow from '$lib/components/TaskTableRow.svelte'
import type {Task} from '$stores/taskStore';	
import { getTasks, add_task, edit_task, delete_task} from '$stores/taskStore'
import { onMount } from 'svelte';
	console.log(getTasks());

	let taskObj_sample:Task = {

		task_name: 'Brush Teeth',
		enabled: true,
		last_updated: '2021-10-10',
		success: 5,
		occurences: 10,
	}

	let tasks_arr = getTasks()
	
const update_task = () =>{
	add_task(taskObj_sample);
	//delete_task(2)
}


	const saveSettings = () => {
		console.log('saveSettings')
		// save to local storage and supabase, extract functions for
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
			<th>Edit</th>
			<th>Delete</th>
		</tr>
		
		{#each tasks_arr as task, i}
			 <!-- content here -->
			 <TaskTableRow taskObj={task} idx={i}/>
		{/each}
		<!-- row with sample data -->
	</table>

	<button class="btn variant-filled-primary w-1/4 my-5" on:click={saveSettings}
		>Save Settings</button
	>
	<button class="btn variant-filled-primary w-1/4 my-5" on:click={update_task}
		>Save Settings</button
	>

</main>

<style>
	th {
		@apply p-9;
	}
</style>

