
<script lang='ts'>
	export let bubble: any;
	import { Avatar } from "@skeletonlabs/skeleton";

/*
let bubble: {
    author: string & {}[];
    body: string | null;
    conversation_id: number;
    created_at: string;
    id: string;
}*/
console.log("bubble@", bubble)
</script>
<div class="grid grid-cols-[1fr_auto] gap-2">

	
	<div class="card p-4 rounded-tr-none space-y-2"> 
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.author.full_name}</p>
			<!-- <small class="opacity-50">{bubble.timestamp}</small> -->
		</header>
		<p>{bubble.body}</p>
	</div>
	<Avatar src={bubble.author.avatar_url} width="w-12" />
</div>
<!-- <div class="grid grid-cols-[1fr_auto] gap-2"> -->
<!---->
<!-- 	 -->
<!-- 	<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}"> -->
<!-- 		<header class="flex justify-between items-center"> -->
<!-- 			<p class="font-bold">{bubble.name}</p> -->
<!-- 			<small class="opacity-50">{bubble.timestamp}</small> -->
<!-- 		</header> -->
<!-- 		<p>{bubble.message}</p> -->
<!-- 	</div> -->
<!-- 	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" /> -->
<!-- </div> -->
					
 
