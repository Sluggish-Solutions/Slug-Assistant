<script lang="ts">
	import { Sliders } from 'lucide-svelte'
	export let task: string
	export let done: boolean
	export let repeatTime: number
</script>

<div
	class="flex items-center justify-center bg-black h-fit mr-3 ml-3 py-4 rounded-lg"
>
	<h1 class="px-3">Started:</h1>
	<input class="px-5" type="checkbox" id="checkbox" />
  
	<h1 class="px-3">Finished:</h1>
	<input class="px-5" type="checkbox" id="checkbox" />
  
	<label class="px-5" for="checkbox">{task}</label>
</div>

<style>
	label {
		text-decoration: none;
		display: block;
	}

	input[type='checkbox']:checked + label {
		text-decoration: line-through;
	}
</style>
