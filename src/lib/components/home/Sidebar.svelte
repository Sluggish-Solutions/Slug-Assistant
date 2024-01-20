<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">About</a>
		<a class="block" href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>
<!-- <!-- -->
<!-- // v0 by Vercel. -->
<!-- // https://v0.dev/t/YzX4xVfIhNo -->
<!-- --> 
<!-- <aside -->
<!--   class="flex flex-col w-64 h-screen p-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800" -->
<!-- > -->
<!--   <div class="flex items-center mb-8"> -->
<!--     <svg -->
<!--       xmlns="http://www.w3.org/2000/svg" -->
<!--       width="24" -->
<!--       height="24" -->
<!--       viewBox="0 0 24 24" -->
<!--       fill="none" -->
<!--       stroke="currentColor" -->
<!--       stroke-width="2" -->
<!--       stroke-linecap="round" -->
<!--       stroke-linejoin="round" -->
<!--       class="h-6 w-6"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg -->
<!--     > -->
<!--     <h2 class="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50"> -->
<!--       Cozy App -->
<!--     </h2> -->
<!--   </div> -->
<!--   <div data-state="closed" class="space-y-2"> -->
<!--     <button -->
<!--       type="button" -->
<!--       aria-controls="radix-:r3:" -->
<!--       aria-expanded="false" -->
<!--       data-state="closed" -->
<!--       class="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" -->
<!--       ><svg -->
<!--         xmlns="http://www.w3.org/2000/svg" -->
<!--         width="24" -->
<!--         height="24" -->
<!--         viewBox="0 0 24 24" -->
<!--         fill="none" -->
<!--         stroke="currentColor" -->
<!--         stroke-width="2" -->
<!--         stroke-linecap="round" -->
<!--         stroke-linejoin="round" -->
<!--         class="h-5 w-5" -->
<!--         ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" -->
<!--         ></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg -->
<!--       > -->
<!--       Home -->
<!--     </button> -->
<!--     <div data-state="closed" id="radix-:r3:" hidden="" style=""></div> -->
<!--     <button -->
<!--       type="button" -->
<!--       aria-controls="radix-:r3:" -->
<!--       aria-expanded="false" -->
<!--       data-state="closed" -->
<!--       class="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" -->
<!--       ><svg -->
<!--         xmlns="http://www.w3.org/2000/svg" -->
<!--         width="24" -->
<!--         height="24" -->
<!--         viewBox="0 0 24 24" -->
<!--         fill="none" -->
<!--         stroke="currentColor" -->
<!--         stroke-width="2" -->
<!--         stroke-linecap="round" -->
<!--         stroke-linejoin="round" -->
<!--         class="h-5 w-5" -->
<!--         ><path -->
<!--           d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" -->
<!--         ></path><circle cx="12" cy="12" r="3"></circle></svg -->
<!--       > -->
<!--       Settings -->
<!--     </button> -->
<!--     <div data-state="closed" id="radix-:r3:" hidden="" style=""></div> -->
<!--   </div> -->
<!-- </aside> -->
