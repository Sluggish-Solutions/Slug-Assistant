<script>
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    import  Task  from './Task.svelte'
  
    let condition = false;
  
    onMount(() => {
      // Set the condition to true when the component is mounted
      condition = true;
    });

    let todos= [
        {text: 'Workout', done: false},
        {text: 'Shower', done: false},
        {text: 'Homework', done: false},
        {text: 'Laundry', done: false}

    ]

  </script>
  
  {#if condition}
  <div
  in:fly={{x: 0, duration: 3000, easing: quintOut}}
  out:fly={{x: -100, duration: 3000, easing: quintOut}}>
  <div class="flex justify-center">
    <h1 class="py-5 text-2xl">Tasks</h1>
  </div>
  <div class="flex flex-col gap-5">
    {#each todos as todo}
      <Task task={todo.text} done={todo.done} repeatTime={1} />
    {/each}
  </div>
</div>
  {/if}
