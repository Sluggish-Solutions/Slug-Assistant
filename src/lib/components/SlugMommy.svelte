<script lang="ts">
    let imgURL = ["favicon.png", "favicon.png", "favicon.png", "favicon.png"];
    let i=0;
    let display1=""
    let URL=""
    function display(show:boolean, index:number)
    {
        URL=imgURL[index]
        display1=show.toString()
    }

    display(true, 1)
</script>

<div>
    <img src={URL} alt="" class="display:{display1}" />
</div>


