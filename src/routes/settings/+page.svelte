<script lang="ts">
    import TaskTableRow from "$lib/components/TaskTableRow.svelte";
    let taskObj_sample = {
        id: '1234',
        name: 'John',
        active: true,
        last_update: '2021-10-10',
        user_id: '12',
        days_to_repeat: 1, // repeat every n day(s)
        success: 3,
        occurences: 10,
    }

    const saveSettings = () => {
        console.log('saveSettings')
        // save to local storage and supabase, extract functions for
    }
</script>

<hr />

<table>
    <TaskTableRow bind:taskObj={taskObj_sample} />
    
</table>

<button class="btn variant-filled-primary" on:click={saveSettings}>Save Settings</button>
