<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton'
	import { delete_task, toggle_task, type Task } from '$stores/taskStore'

	export let taskObj: Task

	$: console.log("hello", taskObj)
</script>

<tr>
	<th>{taskObj.task_name}</th>
	<th>
		<SlideToggle name="slide" checked={taskObj.enabled} on:change={() => toggle_task(taskObj.id)} />
	</th>
	<th>{taskObj.last_updated}</th>
	<th>{taskObj.success}</th>
	<th>{taskObj.occurences}</th>
</tr>
