<script lang="ts">
    import { Sliders } from 'lucide-svelte';
    export let task:string;
    export let done:boolean;
    export let repeatTime:number;
</script>

<div class="flex justify-between bg-black h-fit mr-3 ml-3">

    <div class="flex py-2 ">
    <button class="px-3">|||</button>
    <h1 class="">{task}</h1>
    </div>
    <input class="mt-3 mr-3 form-checkbox h-5 w-5 text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent " type="checkbox" value={done}>


</div>