
<script lang='ts'>
	export let data;
	console.log(data);
</script>

<body class="flex w-screen h-screen" style="background-color: #fedeb7;">
	<div class="flex flex-col w-2/5 bg-slate-100 rounded-lg mx-20 my-20 h-3/4 opacity-75 px-10" >
		<img src="/main.webp" alt="Logo" class="max-h-15 max-w-12 mt-10">
		<h1 class="text-4xl text-black mb-7 mt-10">Sign Up</h1>
		<h1 class="text-2x1 mt-3 text-black">Create a username</h1>
		<input type="text" placeholder="Please enter a username">
		<h1 class="text-2x1 mt-10 text-black">Create a password</h1>
		<input type="text" placeholder="Please enter a password">
		<button class="full-w bg-orange-500 rounded-full py-2 mt-10">Sign In</button>
		<div class="flex justify-center mt-10 mb-3">
		<h2 class="text-2x1 text-black">or continue with</h2>
		</div>
		<button class="full-w bg-orange-500 rounded-full py-2">Google</button>

		
	</div>
	<div class="flex w-3/5 bg-black mx-10 my-20 h-3/4 justify-center">
		<img src="/main.webp" alt="Logo">
	</div>
</body>


<!-- <main class="flex jusitfy-center items-center h-screen ">
	<div>
		<form method="POST">
			<button class="variant-filled btn-lg" formaction="?/login_Oauth&provider=google"> Continue with Google</button>
		</form>
	</div>

</main> -->
