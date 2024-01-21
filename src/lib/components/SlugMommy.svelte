<script>
    let imgURL=[ "favicon.png", "favicon.png", "favicon.png", "favicon.png"];
    let count=0;
</script>


<div>
    {#each imgURL as URL}
        <img src={URL} alt="not working" id={count.toString()}>
        {count=count+1}
    {/each}
</div>