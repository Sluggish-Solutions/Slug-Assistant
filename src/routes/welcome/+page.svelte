<!--
// v0 by Vercel.
// https://v0.dev/t/7zuRuQmoFNU
-->
<script>
    import { onMount } from "svelte";
import {first_time, setUserId } from "../../stores/userStore";
import { get } from "svelte/store";
	onMount(()=>{

		first_time.set(false)
	})

</script>
<div class="flex flex-col min-h-screen">
	
	<main class="flex-1">
		<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h1
							class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
						>
							Track Your Habits, Change Your Life
						</h1>
						<p
							class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
						>
							Habit Tracker helps you to follow your progress and
							keep an eye on your habits. Track, analyze, and
							improve your habits.
						</p>
					</div>
					<div class="space-x-4">
						<a
							class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							href="/"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</section>
		<section
			class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
		>
			<div class="container px-4 md:px-6">
				<div
					class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]"
				>
					<img
						src="/placeholder.svg"
						width="550"
						height="310"
						alt="Features"
						class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
					/>
					<div class="flex flex-col justify-center space-y-4">
						<div class="space-y-2">
							<div
								class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
							>
								Features
							</div>
							<h2
								class="text-3xl font-bold tracking-tighter sm:text-5xl"
							>
								Powerful Tools for Habit Tracking
							</h2>
							<p
								class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
							>
								From tracking your habits to providing detailed
								analytics, Habit Tracker has everything you need
								to keep track of your progress and reach your
								goals.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-12 md:py-24 lg:py-32">
			<div
				class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10"
			>
				<div class="space-y-3">
					<h2
						class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
					>
						What Our Users Say
					</h2>
					<p
						class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
					>
						Don't just take our word for it. See what our users have
						to say about Habit Tracker.
					</p>
				</div>
				<div
					class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&amp;>img]:mx-auto"
				>
					<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
						<p class="italic">
							"Habit Tracker has helped me stay on track with my
							habits. It's easy to use and provides great
							insights."
						</p>
						<p class="mt-4 font-bold">- Jane Doe</p>
					</div>
					<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
						<p class="italic">
							"I love the analytics feature! It's great to see my
							progress over time."
						</p>
						<p class="mt-4 font-bold">- John Smith</p>
					</div>
					<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
						<p class="italic">
							"The best habit tracker I've used. Highly
							recommend!"
						</p>
						<p class="mt-4 font-bold">- Sarah Lee</p>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer
		class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
	>
		<p class="text-xs text-gray-500 dark:text-gray-400">
			© 2024 Habit Tracker. All rights reserved.
		</p>
		<nav class="sm:ml-auto flex gap-4 sm:gap-6">
			<a class="text-xs hover:underline underline-offset-4" href="/">
				Privacy Policy
			</a><a class="text-xs hover:underline underline-offset-4" href="/">
				Terms of Service
			</a><a class="text-xs hover:underline underline-offset-4" href="/">
				Contact Us
			</a>
		</nav>
	</footer>
</div>

