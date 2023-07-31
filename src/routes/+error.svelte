<script>
	import { page } from '$app/stores';
</script>

<div class="w-80 h-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('/about/space_helmet.webp')] bg-cover bg-no-repeat" />

<div class="text-darktext text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent bg-opacity-75 p-3 rounded-3xl">
	<h1 class="text-4xl font-bold">{$page.status}: {$page.error.message}</h1>
	<p class="text-lg">my cat is sitting on my keyboard :&#40;</p>
</div>
