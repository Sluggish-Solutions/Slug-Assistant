<script lang="ts">
	// export let key: string
	let imgURL = [
		'sprites/exercise.png',
		'sprites/water.png',
		'sprites/food.png',
	]

	let i = 0
	let display1 = ''
	let URL = ''
	export function display(show: boolean, index: number) {
		URL = imgURL[index]
		display1 = show.toString()
	}
</script>

<!-- <div>
  <img src={URL} alt="notworking" class="display:{display1}" />
</div> -->
<div class="flex w-full justify-center py-10">
	<img src="sprites/food.png" alt="notworking" />
</div>
