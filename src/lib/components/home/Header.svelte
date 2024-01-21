<script>
	import Logo from './sidebar/Logo.svelte'
	import Hamburger from './sidebar/Hamburger.svelte'
	
	export let sidebar = false
</script>

<header class="flex justify-between p-2 items-center border-b-2">
	<nav class="flex gap-3">
		<Hamburger bind:open={sidebar}/>
		<Logo/>	
	</nav>
	
	<nav class="hidden uppercase text-bold text-2xl sm:block p-5">
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>

</header>

<style>
	a {
		@apply hover:text-orange-300 hover:underline decoration-4 p-2 hover:font-extrabold;
	}
</style>
