<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton'
	import { delete_task, toggle_task, type Task } from '$stores/taskStore'

	export let taskObj: Task
	export let id: number

	$: console.log(taskObj)
</script>

<tr>
	<th>{taskObj.task_name}</th>
	<th>
		<SlideToggle name="slide" bind:checked={taskObj.enabled} on:change={() => toggle_task(id)} />
	</th>
	<th>{taskObj.last_updated}</th>
	<th>{taskObj.success}</th>
	<th>{taskObj.occurences}</th>

	<th>
		<button on:click|preventDefault={() => delete_task(id)}>
			<i
				class="fa fa-trash fill-red-600"
				style="color:red"
				aria-hidden="true"
			></i>
		</button></th
	>
</tr>
