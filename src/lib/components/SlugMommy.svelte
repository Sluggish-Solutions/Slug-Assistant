<script>
    let imgURL = ["favicon.png", "favicon.png", "favicon.png", "favicon.png"];
    
</script>

<div>
    {#each imgURL as URL, count}
        <img src={URL} alt="not working" id={count.toString()} class="hidden">
    {/each}
</div>