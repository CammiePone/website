<script lang="ts">
	import BlogCard from "../../components/BlogCard.svelte";
    import MonthSnip from "../../components/MonthSnip.svelte";
    import UnderConstruction from "../../components/UnderConstruction.svelte";
	import type { PageData } from './$types';

	export let data: PageData;

	function getAllMonths(posts) {
		posts.sort((a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime());
		let months = [];

		for(let index = 0; index < posts.length; index++) {
			const frontmatter = posts[index].frontmatter;
			const date = new Date(frontmatter.date.getUTCFullYear(), frontmatter.date.getUTCMonth(), frontmatter.date.getUTCDate());
			const isDateInArray = months.some((month) => month.date.getUTCFullYear() === date.getUTCFullYear() && month.date.getUTCMonth() === date.getUTCMonth());

			if(!isDateInArray)
				months.push({ date, posts: posts.filter(post => post.frontmatter.date.getUTCMonth() === date.getUTCMonth() && post.frontmatter.date.getUTCFullYear() === date.getUTCFullYear()) });			
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
	{#each getAllMonths(data.posts) as { date, posts }}
		<MonthSnip date={date}>
			{#each posts as { slug, frontmatter, html }}
				<BlogCard link="/blog/{slug}" img={frontmatter.img} title={frontmatter.title} html={html} />
			{/each}	
		</MonthSnip>
	{/each}
</div>
