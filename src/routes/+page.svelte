<script lang="ts">
	import SlugMommy from '$lib/components/SlugMommy.svelte'
	import Timer from '$lib/components/Radial.svelte'
	import TaskList from '$lib/components/TaskList.svelte'
	import { onMount } from 'svelte'

	const reqNotif = async () => {
		const reg = await navigator.serviceWorker.getRegistration()
		Notification.requestPermission().then((permission) => {
			if (permission !== 'granted') {
				alert('you need to allow push notifications')
			} else {
				const timestamp = new Date().getTime() + 5 * 1000 // now plus 5000ms
				reg?.showNotification('Demo Push Notification', {
					body: `${window.location.href}`,
					//   showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
					data: {
						url: window.location.href,
					},
					badge: './favicon.png',
					icon: './image.webp',
					actions: [
						{
							action: 'explore',
							title: 'explore',
						},
					],
				})
			}
		})
	}

	const reqNot = async () => {
		Notification.requestPermission().then((perm) => {
			if (perm !== 'granted') {
				alert('you need to allow push notifications')
			} else {
				const num = Math.floor(Math.random() * 1000)
				const notif = new Notification('Example Notif', {
					body: `This is a notification #${num}`,
					data: {
						hello: 'world',
					},
					icon: 'favicon.png',
				})

				notif.addEventListener('error', (e) => {
					alert(e)
				})
			}
		})
	}

	function scheduleChoresReminder(
		delayInMilliseconds: number,
		choreName: string
	) {
		setTimeout(() => {
			if ('Notification' in window) {
				Notification.requestPermission().then((permission) => {
					if (permission === 'granted') {
						const notificationOptions = {
							body: `Don't forget to do your ${choreName}!`,
							icon: 'image.webp',
						}
						new Notification('Chores Reminder', notificationOptions)
					}
				})
			}
		}, delayInMilliseconds)
	}

	let notification: Notification
	let interval: NodeJS.Timeout
	let num = 0

	onMount(() => {
		document.addEventListener('visibilitychange', () => {
			if (document.visibilityState == 'hidden') {
				const leaveDate = new Date()

				notification = new Notification('Hey John Wick', {
					body: `Stay focused! You've got this!`,
					requireInteraction: true,
					tag: 'focus',
				})
			} else {
				clearInterval(interval)
				notification.close()
			}
		})

		window.addEventListener('blur', function () {
			num += 1
			console.log(num)
		})

		// Detect when the window gains focus
		window.addEventListener('focus', function () {
			console.log('sus', num)
		})
	})
</script>

<div class="flex">
	<div class="w-1/3 max-h-screen">
		<SlugMommy />

		<div class="flex flex-col gap-3">
			<button class='btn variant-filled-tertiary' on:click={reqNotif}>Turn On Your Notif</button>

			<button class='btn variant-filled-secondary' on:click={() => scheduleChoresReminder(300, 'homework')}
				>Do Your Homework</button
			>
		</div>
	</div>
	<div class="w-1/3 max-h-screen">
		<Timer />
	</div>
	<div class="w-1/3 max-h-screen">
		<TaskList />
	</div>
</div>
