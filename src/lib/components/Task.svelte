<script lang="ts">
	import { tasks, toggle_completed_today } from '$stores/taskStore'
	import { fade, fly } from 'svelte/transition'
	import { onMount } from 'svelte'
	import next_mommy from '$lib/components/SlugMommy.svelte'

	export let task: any

	let visible = false
	let completed_today = false

	tasks.subscribe((value) => { 
		for (let item of value) {
			if (item.id === task.id) {
				completed_today = item.completed_today
			}
		}
	})

	onMount(() => {
		visible = true
	})
</script>

<label
	class="flex justify-center items-center w-full rounded-lg {task.completed_today
		? 'line-through'
		: ''} decoration-[3px] decoration-orange-300 text-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-300 bg-black py-5"
>
	{#if visible}
		<h1 in:fly={{ x: -300, duration: 2000 }} out:fade>
			{task.task_name}
		</h1>
	{/if}

	<input
		type="checkbox"
		bind:checked={completed_today}
		on:click={() => toggle_completed_today(task.id)}
		class="hidden"
	/>
	<span class="checkmark"></span>
</label>
