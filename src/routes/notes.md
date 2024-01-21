<script lang="ts">
	import TaskTableRow from '$lib/components/SettingsTableRow.svelte'
	let taskObj_sample = {
		id: '1234',
		name: 'Brush Teeth',
		active: true,
		last_update: '2021-10-10',
		user_id: '12',
		scheduled_start: '2023-10-10',
		days_to_repeat: 1, // repeat every n day(s)
		success: 3,
		occurences: 10,
	}
	
	let taskObj_sample2 = {
		id: '1432',
		name: 'Wash Dishes',
		active: false,
		last_update: '2021-10-10',
		user_id: '12',
		scheduled_start: '2023-10-10',
		days_to_repeat: 3, // repeat every n day(s)
		success: 3,
		occurences: 10,
	}

	const saveSettings = () => {
		console.log('saveSettings')
		// save to local storage and supabase, extract functions for
	}
</script>

<main class="w-full">
	<table class="m-auto">
		<tr>
			<th>Task Name</th>
			<th>Enabled</th>
			<th>Today Completed</th>
			<th>Repeat Every <span class="italic">n</span> Days</th>
		</tr>

		<TaskTableRow bind:taskObj={taskObj_sample} />
		<TaskTableRow bind:taskObj={taskObj_sample2} />
	</table>

	<button class="btn variant-filled-primary" on:click={saveSettings}
		>Save Settings</button
	>
</main>

<style>
	th {
		@apply p-9;
	}
</style>
