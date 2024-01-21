<script lang="ts">
	import { SlideToggle } from "@skeletonlabs/skeleton";
	import { delete_task, edit_task, type Task } from "$stores/taskStore";
	export let taskObj: Task;
	export let idx: number;

	let compRef;

	let shown = true;
	let edit = false;

	const delete_myself = () => {
		delete_task(idx);
		shown = false;
	};

	let task_name = taskObj.task_name;
	let enabled = taskObj.enabled;
	let success = taskObj.success;
	let occurences = taskObj.occurences;
	let last_updated = taskObj.last_updated
	// i can bind the new values to variables,

	const saveState = () => {
		let date = new Date();
		// how is saving state going to work?
		const new_state: Task = {
			task_name: task_name,
			enabled: enabled,
			last_updated: date.getDate().toString(),
			success: success,
			occurences: occurences,
		};

		edit_task(idx, new_state);
		edit=false

	};

	// update on destroy?? or update instantly?
</script>

<!-- <label
	class="flex justify-center items-center w-full rounded-lg decoration-[3px] decoration-orange-300 text-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-300 bg-black py-5"
>
	<input
		type="text"
		placeholder="put the name here"
		class="text-black"
	/>
</label> -->
{#if shown && !edit}
	<tr>
		<th>{task_name}</th>
		<th>
			<SlideToggle name="slide" disabled bind:checked={enabled} />
		</th>
		<th>{last_updated}</th>
		<th>{success}</th>
		<th>{occurences}</th>

		<th>
			<button
				on:click|preventDefault={() => {
					edit = true;
				}}
			>
				<i class="fas fa-edit" aria-hidden="true"></i>
			</button></th
		>

		<th>
			<button on:click|preventDefault={delete_myself}>
				<i
					class="fa fa-trash fill-red-600"
					style="color:red"
					aria-hidden="true"
				></i>
			</button></th
		>
	</tr>
{:else if edit}
	<tr>
		<th>
			<input
				type="text"
				class="text-black rounded-lg"
				placeholder={task_name}
				bind:value={task_name}
			/>
		</th>
		<th>
			<SlideToggle name="slide" bind:checked={enabled} />
		</th>
		<th>{taskObj.last_updated}</th>
		<th>{taskObj.success}</th>
		<th>{taskObj.occurences}</th>

		<th>
			<button on:click|preventDefault={saveState}>
				<i
					class="fa fa-check scale-150"
					style="color:greenyellow"
					aria-hidden="true"
				></i>
			</button></th
		>

		<th>
			<button on:click|preventDefault={delete_myself}>
				<i
					class="fa fa-trash fill-red-600"
					style="color:red"
					aria-hidden="true"
				></i>
			</button></th
		>
	</tr>
{:else}{/if}

<style>
	/* input {
		background-color: #b5d1ff;
		border: 0.5px solid #f4a460;
		height: 1.6rem;
		color: black;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		width: 8.62rem;
		font-family: 'Roboto', serif;
	} */
</style>
