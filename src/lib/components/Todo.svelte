<script lang="ts">
    let todos= [
        {text: 'Workout', done: false},
        {text: 'Shower', done: false},
        {text: 'Homework', done: false}

    ]
</script>

<div class="justify-center">
    <h1>Task</h1>
</div>


<div class="y-50%">
    {#each todos as todo}
        <div class="flex justify-between">
            <h1 class="px-2 py-4">{todo.text}</h1>
            <input class="px-2 py-6" value={todo.done} type="checkbox">
        </div>
    {/each}
</div>

