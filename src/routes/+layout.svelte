<script>
	import Header from '../lib/components/home/Header.svelte'
	import Sidebar from '../lib/components/home/Sidebar.svelte'
	import '../app.postcss';

	let open = false
	import { onMount } from 'svelte'

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

<Sidebar bind:open/>
<Header bind:sidebar={open}/>
<slot />
