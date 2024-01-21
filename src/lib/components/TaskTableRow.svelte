<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton'
	import { toggle_task, type Task } from '$stores/taskStore'

	export let taskObj: Task
</script>

<tr>
	<th>{taskObj.task_name}</th>
	<th>
		<SlideToggle name="slide" checked={taskObj.enabled} on:change={() => toggle_task(taskObj.id)} />
	</th>
	<th>{taskObj.completed_today}</th>
	<th>{taskObj.success}</th>
</tr>
