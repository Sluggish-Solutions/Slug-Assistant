<script lang="ts">
	import SlugMommy from '$lib/components/SlugMommy.svelte'
	import Radial from '$lib/components/Radial.svelte'
	import TaskList from '$lib/components/TaskList.svelte'
	import Typewriter from '$lib/components/Typewriter.svelte'
	import { setUserId } from '../stores/userStore'
	import { onMount } from 'svelte'

	const quotes = [
		"You're unstoppable.",
		'Shine bright like a star.',
		'Embrace the journey.',
		'Your potential is limitless.',
		"Keep going, you're making progress.",
		'Believe in your dreams.',
		"You've got this!",
		'Today is your day.',
		'Radiate positivity.',
		'Strive for greatness.',
		'Every step counts.',
		'Your effort is paying off.',
		'Make today amazing.',
		'Stay focused, stay strong.',
		"You're a force of nature.",
		'Dream big, work hard.',
		'Rise above the challenges.',
		'Your strength is incredible.',
		'Keep pushing forward.',
		'Inspire others with your passion.',
		'Believe in the power within you.',
		'Conquer your fears.',
		'Transform challenges into opportunities.',
		'Your resilience is admirable.',
		'Keep the faith, miracles happen.',
		'Embrace the possibilities.',
		'Radiate positive vibes.',
		'Your journey is unique and beautiful.',
		"You're on the path to success.",
		'Embrace the magic within you.',
		'Your determination is inspiring.',
		'Seize the day with confidence.',
		'Your courage knows no bounds.',
		'Every effort brings you closer.',
		'Your potential is extraordinary.',
		'Shine like the star you are.',
		'Keep dreaming, keep achieving.',
		'Today is a gift, cherish it.',
		'Trust the process.',
		'Your perseverance is unmatched.',
		'Believe in the beauty of your dreams.',
		'Strive for progress, not perfection.',
		"You're stronger than you think.",
		'Embrace challenges as opportunities.',
		'Your journey is unfolding perfectly.',
		'Keep your head high, keep your heart higher.',
		'The world needs your unique light.',
		"You're making a positive impact.",
		'Your passion fuels your success.',
		'Keep moving forward with purpose.',
		'Your kindness is your strength.',
		'Embrace the joy of the present moment.',
		'Rise above the storm, find the sunshine.',
		'Your determination is your superpower.',
		'Inspire others by being yourself.',
		'Celebrate your victories, big or small.',
		'You are enough, just as you are.',
		'Your resilience is your greatest strength.',
		'Embrace the beauty of each day.',
		'Believe in your ability to overcome.',
		'Your journey is sculpting a masterpiece.',
		'Keep chasing your dreams fearlessly.',
		'Radiate positivity and kindness.',
		'Your potential is boundless.',
		'Embrace the power of positivity.',
		"You're on the brink of something amazing.",
		'Keep your head high, keep your spirits higher.',
		'Trust in your inner strength.',
		'Shine on, you magnificent soul.',
		'Your journey is a testament to your strength.',
		'Embrace the adventure of self-discovery.',
		"You're a beacon of inspiration.",
		'Your possibilities are endless.',
		'Keep pushing boundaries.',
		'Believe in the magic of new beginnings.',
		'Your resilience is rewriting your story.',
		'Embrace the challenges, they shape you.',
		"You're making a positive difference.",
		'Radiate love and positivity.',
		'Your journey is an inspiration to others.',
		'Keep blooming, beautiful soul.',
		'Believe in the power of your dreams.',
		'Embrace the abundance of the universe.',
		"You're a catalyst for positive change.",
		'Keep evolving, keep growing.',
		'Your strength is your foundation.',
		'Shine bright, live boldly.',
		'Trust in the process of becoming.',
		"You're creating your own sunshine.",
		'Embrace the power within you.',
		'Your authenticity is your superpower.',
		'Keep believing in the extraordinary.',
		'Rise above, radiate love.',
		'Your journey is sculpting your legacy.',
		'Embrace the beauty of resilience.',
		"You're a source of inspiration to many.",
		"Keep soaring, sky's the limit.",
		'Believe in the beauty of your dreams.',
		'Your potential knows no boundaries.',
		'Embrace the journey, embrace the joy.',
	]

	let quote = quotes[Math.floor(Math.random() * quotes.length)]

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

<div class="flex flex-col md:flex-row gap-5">
	<div class="lg: w-full max-h-screen">
		<TaskList />
	</div>

	<div class="lg: w-full max-h-screen">
		<SlugMommy />

		<div class="flex flex-col gap-3">
			<button class="btn variant-filled-tertiary" on:click={reqNotif}
				>Turn On Your Notif</button
			>

			<button
				class="btn variant-filled-secondary"
				on:click={() => scheduleChoresReminder(300, 'homework')}
				>Do Your Homework</button
			>
		</div>

		<Typewriter text={quote} />
	</div>

	<div class="lg: w-full max-h-screen">
		<!-- <Radial /> -->
	</div>
</div>
