<script>
	import Header from '../lib/components/home/Header.svelte'
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
	
	<div ><Header/></div>
	

	<slot />
</div>


<!-- prevent user from accessing any pages unless they logged in -->