<script>
	import Header from '../lib/components/home/Header.svelte'
	import Sidebar from '../lib/components/home/Sidebar.svelte'
	import '../app.postcss';

	let open = false
</script>

<Sidebar bind:open/>
<Header bind:sidebar={open}/>
<slot />
