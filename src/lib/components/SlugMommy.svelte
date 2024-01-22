<script lang="ts">
    export let key: string;
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
</script>


<!-- <div>
  <img src={URL} alt="notworking" class="display:{display1}" />
</div> -->
<div class="flex w-full justify-center py-10">
  <img src="sprites/run.gif" alt="notworking"/>
</div>