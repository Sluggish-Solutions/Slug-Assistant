<script lang="ts">
  import { onDestroy } from "svelte";
    let imgURL = [
    "/sprites/eat.gif",
    "/sprites/idle.gif",
    "/sprites/read.gif",
    "/sprites/run.gif",
    "/sprites/typing.gif",
    "/sprites/water.gif",
    "/sprites/write.gif",
  ];
    

  let i = 0;
  let display1 = "";
  let URL = "";
  export function display(show: boolean, index: number) {
    URL = imgURL[index];
    display1 = show.toString();
  }

  export const next_mommy = () => {
    // Your logic for next_mommy
    // For example, changing the currently_displayed variable
    currently_displayed = imgURL[i];

    // Increment i and loop back to 0 if it exceeds the array length
    i = (i + 1) % imgURL.length;
  }


  let currently_displayed = "/sprites/idle.gif"
// Set up an interval to call next_mommy every 20 seconds
  const interval = setInterval(next_mommy, 5000);

  // Cleanup the interval when the component is destroyed
  onDestroy(()=>{clearInterval(interval);})
</script>


<!-- <div>
  <img src={URL} alt="notworking" class="display:{display1}" />
</div> -->
<div class="flex w-full justify-center py-10">
  <img src={currently_displayed} alt="notworking"/>
</div>
