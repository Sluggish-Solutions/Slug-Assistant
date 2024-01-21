<script>
    var x = false;

    function TestsFunction() {
        console.log(x);
        var T = document.getElementById("drop");
        x = !x;
        if (x) {
            T.style.display = "block";
        } else {
            T.style.display = "none";
        }
    }
</script>

<button on:click={TestsFunction}><img src="/dropicon.png" alt="not working"></button>

<div class=" grid grid-col outline outline-1 absolute right-2 bg-black px-2 py-2 mr-6" id="drop">
   <a href="/">Home</a>
   <a href="/about">About</a>
   <a href="/settings">Settings</a>
</div>
