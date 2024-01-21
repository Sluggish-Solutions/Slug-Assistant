<script lang="ts">
	import TaskTableRow from '$lib/components/TaskTableRow.svelte'

	let taskObj_sample = {
		task_name: 'Brush Teeth',
		enabled: true,
		last_update: '2021-10-10',
		success: 3,
		occurences: 10,
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
		</tr>

		<!-- row with sample data -->
		<TaskTableRow bind:taskObj={taskObj_sample} />
	</table>

	<button class="btn variant-filled-primary w-1/4 my-5" on:click={saveSettings}
		>Save Settings</button
	>
</main>

<style>
	th {
		@apply p-9;
	}
</style>
