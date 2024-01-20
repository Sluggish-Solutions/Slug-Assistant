<script lang="ts">
    import { Sliders } from 'lucide-svelte';
    export let task:string;
    export let done:boolean;
    export let repeatTime:number;
</script>


<div class="flex justify-between bg-black h-fit mr-3 ml-3">
   
    <input type="checkbox" id="checkbox">
    <label for="checkbox">Label Text</label>




</div>




<style>
    label {
      text-decoration: none;
      display: block;
    }


    input[type="checkbox"]:checked + label {
      text-decoration: line-through;
    }
</style>