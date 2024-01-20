<script>
	import SlugMommy from "$lib/components/SlugMommy.svelte";
	import Timer from "$lib/components/Timer.svelte";
    import TaskList from "$lib/components/TaskList.svelte";
</script>


<div class="flex">
	<div class="w-1/3 max-h-screen">
	<SlugMommy/>
	</div>
	<div class="w-1/3 max-h-screen">
		<Timer/>
	</div>
	<div class="w-1/3 max-h-screen">
		<TaskList/>
	</div>

</div>
