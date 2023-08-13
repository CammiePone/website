<script lang="ts">
	import { onMount } from 'svelte';

	export let link;
	export let img;
	export let title;
	export let html;
	let body = '';

	function truncateString(str, maxLength) {
		if(str.length <= maxLength)
			return str;
		
		var truncatedStr = str.substr(0, maxLength);
		
		if(truncatedStr.charAt(truncatedStr.length - 1) !== ' ')
			truncatedStr = truncatedStr.substr(0, truncatedStr.lastIndexOf(' '));
		
		return truncatedStr + "...";
	}

	onMount(() => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const firstParagraph = doc.querySelector('p');

		if(firstParagraph)
			body = truncateString(firstParagraph.textContent, 160);
	});
</script>

<a href={link} class="flex flex-col max-w-[24rem] min-h-[28rem] group hover:bg-main focus:bg-main bg-main transition-all duration-0 rounded-2xl hover:text-secondary focus:text-secondary text-darktext">
	<img src={img} alt="" loading="lazy" class="rounded-t-2xl group-hover:brightness-110 group-focus:brightness-110 object-cover h-56 w-full">
	<p class="font-bold mx-4 my-6 group-hover:underline group-focus:underline">{title}</p>
	<p class="mx-4 text-base">{body}</p>
	<p class="text-base text-center underline font-bold mt-auto mb-2">Read More</p>
</a>
