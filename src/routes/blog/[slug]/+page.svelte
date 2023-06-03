<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let day = data.date.getUTCDate() < 10 ? "0" + data.date.getUTCDate() : data.date.getUTCDate();
	let month = data.date.getUTCMonth() < 10 ? "0" + data.date.getUTCMonth() : data.date.getUTCMonth();
	let date = day + " / " + month + " / " + data.date.getUTCFullYear();
</script>

<svelte:head>
    <title>{data.title} | Cammie's Corner</title>
</svelte:head>

<div class="md:h-[450px] h-[225px] relative bg-center bg-no-repeat bg-cover" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{data.img}');">
	<div class="hero-text text-center absolute top-1/2 left-1/2 z-10 w-full">
		<h1 class="md:text-5xl text-4xl">{data.title}</h1>
		<p class="text-2xl">{date}</p>
	</div>
</div>

<div class="text-darktext md:my-8 my-4 lg:text-xl md:text-lg text-base lg:mx-[20%] md:mx-[10%] mx-8 flex justify-center">
	{@html data.body}
</div>
