<script lang="ts">
	import TaskTableRow from '$lib/components/TaskTableRow.svelte'
	let taskObj_sample = {
		id: '1234',
		name: 'John',
		active: true,
		last_update: '2021-10-10',
		user_id: '12',
		scheduled_time: '12:00',
		days_to_repeat: 1, // repeat every n day(s)
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
			<th>Active</th>
			<th>Last Update</th>
			<th>Scheduled Time</th>
			<th>Repeat Every <span class="italic">n</span> Days</th>
		</tr>

		<TaskTableRow bind:taskObj={taskObj_sample} />
	</table>


		<button class="btn variant-filled-primary w-1/4 my-5" on:click={saveSettings}
			>Save Settings</button>
	

</main>

<style>
	th {
		@apply p-9;
	}
</style>
