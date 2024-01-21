<script>
	import Header from '../lib/components/home/Header.svelte'
	import Sidebar from '../lib/components/home/Sidebar.svelte'
	import '../app.postcss'
	import { onMount } from 'svelte'

	$: open = false

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing
			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('New update available. Reload?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' })
						window.location.reload()
					}
				}
			})
		})
		if (registration && registration.waiting) {
			registration.waiting.postMessage({ type: 'SKIP_WAITING' })
			registration.update()
		}
	}

	onMount(() => {
		detectSWUpdate()
	})
</script>

<div class="m-auto sm:p-5">
	<Sidebar bind:open={open} />
	<Header bind:sidebar={open} />

	<slot />
</div>


<!-- prevent user from accessing any pages unless they logged in -->