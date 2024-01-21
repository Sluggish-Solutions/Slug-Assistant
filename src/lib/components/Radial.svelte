<script>
	import { ProgressRadial } from '@skeletonlabs/skeleton'
	import { ProgressBar } from '@skeletonlabs/skeleton'
	let progress = 50
</script>

<div class="flex flex-col mt-5 h-full">
	<div class="flex mt-10 w-full justify-center">
		<div class="mr-10">
			<h1 class="mt-12">Health:</h1>
		</div>
		<div class="z-[-10]">
			<ProgressRadial meter="stroke-green-400" value={progress}
				>{progress}%</ProgressRadial
			>
		</div>
	</div>

	<div class="flex mt-10 w-full justify-center ">
		<div class="mr-10 flex rounded-lg">
			<h1 class="mt-12 text-1xl">Mindfullness:</h1>
		</div>
		<div class="z-[-10]">
			<ProgressRadial meter="stroke-blue-400" value={progress}
				>{progress}%</ProgressRadial
			>
		</div>
	</div>

	<div class="flex mt-10 w-full justify-center">
		<div class="mr-10">
			<h1 class="mt-12">Schooling:</h1>
		</div>
		<div class="z-[-10]">
			<ProgressRadial meter="stroke-red-400" value={progress}
				>{progress}%</ProgressRadial
			>
		</div>
	</div>

	<div class="flex mt-10 w-full justify-center">
		<div class="mr-10">
			<h1 class="mt-12">Chores:</h1>
		</div>
		<div class="z-[-10]">
			<ProgressRadial meter="stroke-purple-400" value={progress}
				>{progress}%</ProgressRadial
			>
		</div>
	</div>
</div>
