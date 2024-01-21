<script lang='ts'>
    import { onMount } from "svelte";

    export let text: string
	

	let visible = false;
    onMount(() => {
        visible = !visible;

        setInterval(() => {
            visible = !visible;
        }, 10000);

    })

	function typewriter(node: any, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>
<div class="flex justify-center items-center w-full h-20 bg-black rounded-lg my-10">
	{#if visible}
		<p transition:typewriter>
			{text}
		</p>
	{/if}
</div>