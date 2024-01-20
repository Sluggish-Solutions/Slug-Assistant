<script lang="ts">
    import Task from "./Task.svelte";
    let todos= [
        {text: 'Workout', done: false},
        {text: 'Shower', done: false},
        {text: 'Homework', done: false},
        {text: 'Laundry', done: false}

    ]
    


  
</script>
<div class="flex flex-col bg-slate-500 w-1/3 h-screen">
    <div class="flex justify-center">
        <h1 class="py-5 text-2xl">Tasks</h1>
    </div>


    <div class=" flex flex-col gap-5">
        {#each todos as todo}
            <Task task={todo.text} done={todo.done} repeatTime={1} />
        {/each}
    </div>
</div>

<style>
 
</style>