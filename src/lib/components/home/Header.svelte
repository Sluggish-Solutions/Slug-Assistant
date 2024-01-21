<script lang="ts">
    import Type from "../Type.svelte";
	import Dropdown from "./Dropdown.svelte"
	import { MessagesSquareIcon } from 'lucide-svelte';
	import { SettingsIcon } from 'lucide-svelte';
	import { NotebookIcon } from 'lucide-svelte';
	import { User } from 'lucide-svelte';
</script>

<div class="flex justify-between items-center gap-3 p-3 px-5 bg-black rounded-lg border-2 border-white ">
	<div class="flex items-center gap-3">
		<img class="max-h-10" src="/yellow.png" alt="Icon" />
		<a class="text-2xl hover:text-purple-900" href="/"><Type text="Slug Mommy"/></a>
	</div>
	<div class="hidden sm:flex justify-center">
		<a href="/talk" class="text-2xl px-3 hover:text-purple-900"><Type text="Chat"/></a>
		<a href='/welcome' class="text-2xl px-3 hover:text-purple-900"><Type text="About"/></a>
		<a href="/settings" class="text-2xl px-3 hover:text-purple-900"><Type text="Settings"/></a>
		<a href="/signup" class="text-2xl px-3 hover:text-purple-900"><Type text="Sign In"/></a>
		<!-- <a href="/signout" class="text-2xl px-3 hover:text-purple-900"><Type text="Sign Out"/></a> -->
	</div>
	<div class="flex sm:hidden justify-center">
		<a href="/talk" class="text-2xl px-3 hover:text-purple-900"><MessagesSquareIcon/></a>
		<a href='/welcome' class="text-2xl px-3 hover:text-purple-900"><NotebookIcon/></a>
		<a href="/settings" class="text-2xl px-3 hover:text-purple-900"><SettingsIcon/></a>
		<a href="/signup" class="text-2xl px-3 hover:text-purple-900"><User/></a>

	</div>
	
</div>
