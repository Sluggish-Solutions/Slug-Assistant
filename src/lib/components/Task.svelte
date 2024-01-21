<script lang="ts">
  import { Sliders } from "lucide-svelte";
  // Added a reactive statement for the checkbox
  let checkboxChecked = false;
  export let task: string;
  export let done: boolean;
  export let repeatTime: number;
</script>

<div class="flex items-center justify-center bg-black h-fit mx-3 py-1 rounded-lg">
  <div class="flex">
    <span class="px-5" class:completed={checkboxChecked}>{task}:</span>

    <!-- Use a span instead of a label for better styling -->
    <input class="mt-1" type="checkbox" bind:checked={checkboxChecked} />
   
  </div>
</div>

<style>
  /* Add styles for the completed class */
  span.completed {
    text-decoration: line-through;
  }
</style>
