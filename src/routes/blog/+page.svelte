<script lang="ts">
	import BlogCard from "../../components/BlogCard.svelte";
    import MonthSnip from "../../components/MonthSnip.svelte";
    import UnderConstruction from "../../components/UnderConstruction.svelte";
	import type { PageData } from './$types';

	export let data: PageData;

	function sortByDate(posts) {
		posts.sort((a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime());

		return posts;
	}

	function getAllMonths(posts) {
		let months = [];

		for(let index = 0; index < posts.length; index++) {
			const frontmatter = posts[index].frontmatter;
			const date = new Date(frontmatter.date.getUTCFullYear(), frontmatter.date.getUTCMonth());
			const isDateInArray = months.some((month) => month.getUTCFullYear() === date.getUTCFullYear() && month.getUTCMonth() === date.getUTCMonth());

			if(!isDateInArray)
				months.push(date);
		}

		return months;
	}
</script>

<svelte:head>
    <title>Blog | Cammie's Corner</title>
</svelte:head>

<div class="text-darktext text-xl">
	{#if data.posts.length <= 0}
		<UnderConstruction />
	{/if}
	{#each getAllMonths(data.posts) as date}
		<MonthSnip date={date}>
			{#each sortByDate(data.posts) as { slug, frontmatter, html }}
				{#if frontmatter.date.getUTCMonth() === date.getUTCMonth()}
					<BlogCard link="/blog/{slug}" img={frontmatter.img} title={frontmatter.title} html={html} />
				{/if}
			{/each}	
		</MonthSnip>
	{/each}
</div>
