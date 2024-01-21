<script lang="ts">
	export let taskObj: {
		id: string
		name: string
		active: boolean
		last_update: string
		user_id: string // already know
		days_to_repeat: number
		success: number
		occurences: number
	}
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

<tr>
	<th>{taskObj.name}</th>
	<th>{taskObj.active}</th>
	<th>{taskObj.last_update}</th>
	<th>{taskObj.days_to_repeat}</th>
</tr>

<style>
	input {
		background-color: #b5d1ff;
		border: 0.5px solid #f4a460;
		height: 1.6rem;
		color: black;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		width: 8.62rem;
		font-family: 'Roboto', serif;
	}
</style>
