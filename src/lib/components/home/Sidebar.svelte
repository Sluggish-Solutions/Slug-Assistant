<script>
	export let open = false
</script>

<aside
	class="absolute w-full h-full py-24 px-6 backdrop-blur-xl uppercase text-bold text-2xl sm:block p-5"
	class:open={open}
>
	<a class="block" href="chat">Chat</a>
	<a class="block" href="contact">Contact</a>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}

	a {
		@apply hover:text-orange-300 hover:underline decoration-4 p-4 hover:font-extrabold;
	}
</style>
