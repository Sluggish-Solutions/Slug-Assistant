<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton'
	import { ProgressBar } from '@skeletonlabs/skeleton'
	export let progress:Number;
	export let color:string;
</script>

<div class="flex flex-col items-center w-full">
		<div class="">
			<h1 class="text-2xl my-4">Chores:</h1>
		</div>
		<div class="z-[-10]">
			<ProgressRadial meter={color} value={progress}
				>{progress}%</ProgressRadial>
		</div>
	</div>

