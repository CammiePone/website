<script lang="ts">
	export let date: Date = new Date("2023-05-23");
	let month = date.toLocaleString('default', { month: 'long' });
	let year = date.getFullYear();
</script>

<div class="bg-lighttext my-[4vh] py-4 px-6 flex md:flex-row flex-col [&:nth-child(odd)]:rounded-e-3xl [&:nth-child(even)]:rounded-s-3xl [&:nth-child(odd)]:mr-[10vw] [&:nth-child(even)]:ml-[10vw] md:[&:nth-child(even)]:flex-row-reverse [&:nth-child(even)]:flex-col-reverse">
	<div class="flex flex-col md:[writing-mode:_vertical-lr] md:[text-orientation:_upright] max-h-fit my-4">
		<!-- replace with date -->
		<p class="uppercase">{month}</p>
		<p>{year}</p>
	</div>

	<div class="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 text-md">
		<slot />
	</div>
</div>
