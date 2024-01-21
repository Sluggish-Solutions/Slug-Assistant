
<script lang='ts'>
	export let bubble: any;
	import { Avatar } from "@skeletonlabs/skeleton";
</script>

<div class="grid grid-cols-[auto_1fr] gap-2">
	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.message}</p>
	</div>
</div>
					
 