<script lang="ts">
	import { handle } from './../hooks.server.ts';
	import { tasks } from '$stores/taskStore'
	import Header from '../lib/components/home/Header.svelte'
	import '../app.postcss'
	// import '@fortawesome/fontawesome-free/css/all.min.css'
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
	
	// tasks.set(JSON.parse(localStorage.getItem('tasks')))

	onMount(async () => {
		// const savedTasks = localStorage.getItem('tasks')
		// if (savedTasks) {
		// 	tasks.set(JSON.parse(savedTasks))
		// }

		detectSWUpdate()
	})
</script>

<div class="m-auto sm:p-5">
	<div><Header /></div>

	<slot  />
</div>

<!-- prevent user from accessing any pages unless they logged in -->
