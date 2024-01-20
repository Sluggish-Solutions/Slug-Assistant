<script>
	import SlugMommy from "$lib/components/SlugMommy.svelte";
	import Timer from "$lib/components/Timer.svelte";
	import Todo from "$lib/components/Todo.svelte";
</script>


<div class="flex justify-between">
	<div>
		<SlugMommy/>
	</div>
	<div class="flex-col w-[50%]">
		<Todo/>	
		<Timer/>
	</div>
</div>
