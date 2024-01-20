<script lang="ts">
	import '../app.postcss';
	import Header from "$lib/components/home/Header.svelte";
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

	// onMount(() => {
	// 	detectSWUpdate()
	// })
</script>

<Header />

<slot />
