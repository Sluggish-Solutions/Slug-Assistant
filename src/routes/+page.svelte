<script lang="ts">
	import SlugMommy from '$lib/components/SlugMommy.svelte'
	import Radial from '$lib/components/Radial.svelte'
	import TaskList from '$lib/components/TaskList.svelte'
	import Typewriter from '$lib/components/Typewriter.svelte'
	import { setUserId } from '../stores/userStore'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { tasks } from '$stores/taskStore'
	import Type from '$lib/components/Type.svelte'

	let condition = false

	let quote: string = 'You are amazing!'

	const quotes = [
		"You're my sunshine, always bright.",
		'Believe in yourself, my love.',
		'Dream big, you can do it.',
		"You're my joy, every day.",
		"Cherish life's moments, my dear.",
		'Your heart shines, my child.',
		'Kindness matters, spread love daily.',
		"You're strong, face challenges bravely.",
		'Rainbows follow storms, remember that.',
		"I'm here for you, always.",
		'Enjoy childhood, time flies quickly.',
		"You're amazing, just as you are.",
		'Magic within you, make it happen.',
		"Love yourself, you're worth it.",
		'Your smile brightens lives, share it.',
		"Life's journey unfolds, embrace it.",
		'You are loved unconditionally, forever.',
		'Every day is a new opportunity.',
		"Embrace your uniqueness, it's beautiful.",
		'My heart is yours, forever.',
		"Stay positive, it's a superpower.",
		"Family is forever, we're always here.",
		"You're never alone, I'm with you.",
		'Be kind to others, it matters.',
		'Your dreams matter, chase them fearlessly.',
		'Stay curious, the world is fascinating.',
		"You're my inspiration, every day.",
		'Learning is fun, keep exploring.',
		"Mistakes teach us, don't fear them.",
		"You're a star, shine brightly.",
		'I believe in you, my dear.',
		'Your potential is limitless, aim high.',
		'Hard work pays off, keep going.',
		'Trust yourself, you know the way.',
		'You make me proud, every moment.',
		'Follow your heart, it knows best.',
		'Life is an adventure, enjoy it.',
		"You're a blessing, pure and simple.",
		"Hugs heal everything, here's one.",
		"Stay curious, it's a gift.",
		'Embrace change, it brings growth.',
		"You're capable of greatness, remember that.",
		"You're loved beyond measure, always.",
		'Be grateful, it multiplies happiness.',
		'You are unique, celebrate it.',
		'Every day is a new beginning.',
		"I'm your biggest fan, my love.",
		'You light up my life, daily.',
		'Be kind to yourself, always.',
		'Your heart is pure gold, remember.',
		"Share your talents, they're extraordinary.",
		'Dreams come true, believe in them.',
		'Life is beautiful, treasure it.',
		"You're my treasure, my dear.",
		"Keep going, you've got this.",
		'You are cherished, never forget.',
		'Love conquers all, spread it.',
		"You're my heart's delight, forever.",
		'You are enough, just as you are.',
		"Be brave, you're stronger than fear.",
		"I'm here to listen, always.",
		"You're resilient, keep bouncing back.",
		'Believe in your abilities, always.',
		"Trust your instincts, they're wise.",
		'You are loved deeply, forever.',
		"Stay curious, the world's amazing.",
		'You make me smile, every day.',
		'Be gentle with yourself, my love.',
		'Dream big, reach for the stars.',
		"You're my heart's greatest joy.",
		"You're a blessing in my life.",
		'Kindness matters, practice it daily.',
		"You're my precious one, always.",
		"Follow your passion, it's your compass.",
		'Life is an adventure, embrace it.',
		'You are my sunshine, my love.',
		"You're braver than you know.",
		'Every day is a new chance.',
		'You light up my world, always.',
		'You are loved deeply, my dear.',
		"Stay positive, it's contagious.",
		'You are unique, embrace it.',
		'Dreams fuel your soul, pursue them.',
		'You make life beautiful, every day.',
		"Believe in yourself, you're incredible.",
		"Love knows no bounds, it's limitless.",
		"You're my heart's desire, always.",
		"You're stronger than you realize.",
		'Kindness is your superpower, use it.',
		'You bring joy to my heart.',
		'Life is a gift, cherish it.',
		"You're a miracle, my love.",
		'Every day is a fresh start.',
		'You have a heart of gold.',
		"Dream big, the sky's the limit.",
		"You're my inspiration, always.",
		"Stay positive, it's your strength.",
		"You're my everything, forever.",
		'You are loved beyond words.',
		'You are amazing, my dear.',
		'Kindness matters, pass it on.',
		'Dreams come true, keep believing.',
		"You're the light in my life.",
		"You're resilient, keep going.",
		"You're my sunshine on cloudy days.",
		"You're my greatest joy, always.",
		"You're braver than you know.",
		'Your heart is pure, my love.',
		'You make my heart sing.',
		"You're my heart's delight, forever.",
		"You're a treasure, pure and simple.",
		'Kindness changes lives, practice it.',
		"You're my reason to smile.",
		"Dream big, you've got this.",
		"You're stronger than you think.",
		'You are loved deeply, always.',
		"You're a ray of sunshine.",
		"You're my heart's desire, forever.",
		"You're my greatest blessing, my love.",
		"You're my forever and always.",
		'You light up my world.',
		'Dreams are possible, believe.',
		"You're my heart's happiness.",
		"You're my strength, always.",
		"You're loved beyond measure.",
		"You're the twinkle in my eye.",
		"You're capable of greatness.",
		"You're my heart's contentment.",
		"You're my greatest gift, forever.",
		"You're my precious one, always.",
		'Kindness is your gift, use it.',
		"You're my heart's joy, always.",
		'Dreams are your path.',
		"You're my forever love.",
		"You're loved unconditionally, my dear.",
		"You're my heart's peace, forever.",
		"You're my heart's song, always.",
		"You're my sunshine every day.",
		"Dream big, you'll soar high.",
		"You're my heart's delight, always.",
		"You're my guiding star, forever.",
		"You're my heart's delight, my love.",
		"You're loved deeply, forever.",
		'Dreams are your destiny, believe.',
		"You're my heart's pure love.",
		"You're stronger than you know, always.",
		"You're my heart's treasure, forever.",
		"You're capable of anything.",
		"You're my heart's true joy.",
		"You're loved unconditionally, always.",
	]

	setInterval(() => {
		quote = quotes[Math.floor(Math.random() * quotes.length)]
	}, 20000)

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

	let notification: Notification
	let interval: NodeJS.Timeout
	let num = 0
	let enabledTasks

	onMount(() => {
		const savedTasks = localStorage.getItem('tasks')
		if (savedTasks) {
			tasks.set(JSON.parse(savedTasks))
		}


		condition = true

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

		<Typewriter text={quote} />

		<div class="flex flex-col gap-3">
			<button class="btn variant-filled-tertiary" on:click={reqNotif}
				>Turn On Your Notification</button
			>
		</div>
	</div>
	{#if condition}
		<div
			in:fly={{ x: 100, duration: 3000, easing: quintOut }}
			out:fly={{ x: -100, duration: 3000, easing: quintOut }}
			class="lg: w-full max-h-screen"
		>
			<h1
				class="flex items-center justify-center bg-black py-5 px-8 rounded-lg m-5 mx-2 gap-3 text-2xl border-2 border-white"
			>
				<Type text="Stats" />
			</h1>
			<div
				class="flex flex-col border-4 border-purple-700 rounded-lg px-10 py-12"
			>
				<div class="flex justify-center my-2.5">
					<Radial progress={50} color="stroke-green-600" title="Health" />
					<Radial
						progress={75}
						color="stroke-blue-600"
						title="Mindfullness"
					/>
				</div>
				<div class="flex justify-center my-2.5">
					<Radial progress={25} color="stroke-red-600" title="Adademics" />
					<Radial progress={50} color="stroke-purple-600" title="Chores" />
				</div>
			</div>
		</div>
	{/if}
</div>
