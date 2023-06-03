<script>
	export let img;
</script>

<div class="bg-lighttext my-[4vh] py-4 px-6 flex md:flex-row flex-col items-center [&:nth-child(odd)]:rounded-e-3xl [&:nth-child(even)]:rounded-s-3xl [&:nth-child(odd)]:mr-[10vw] [&:nth-child(even)]:ml-[10vw] [&:nth-child(even)]:flex-row-reverse">
	<img src={img} alt="" height="128" width="128" class="md:mx-6 md:my-0 mb-6">
	
	<div class="max-w-4xl m-auto space-y-4">
		<slot />
	</div>
</div>
