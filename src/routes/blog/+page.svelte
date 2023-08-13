<script lang="ts">
	import BlogCard from "../../components/BlogCard.svelte";
    import MonthSnip from "../../components/MonthSnip.svelte";
    import UnderConstruction from "../../components/UnderConstruction.svelte";
	import type { PageData } from './$types';
	import { Button, Dropdown, DropdownItem, Toggle } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { writable } from "svelte/store";

	export let data: PageData;
	const filters = writable(new Set<string>());

	function getAllMonths(posts) {
		posts.sort((a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime());
		let months = [];

		for(let index = 0; index < posts.length; index++) {
			const frontmatter = posts[index].frontmatter;
			const date = new Date(frontmatter.date.getUTCFullYear(), frontmatter.date.getUTCMonth());
			const isDateInArray = months.some((month) => month.date.getUTCFullYear() === date.getUTCFullYear() && month.date.getUTCMonth() === date.getUTCMonth());

			if(!isDateInArray)
				months.push({ date, posts: posts.filter(post => new Date(post.frontmatter.date.getUTCFullYear(), post.frontmatter.date.getUTCMonth()).getTime() === date.getTime()) });			
		}

		return months;
	}

	function matchesFilters(posts) {
		return !$filters.size || posts.filter(post => post.frontmatter.tags?.some(tag => $filters.has(tag))).length;
	}

	function toggleFilter(filter: string) {
		return _e => {
			filters.update(set => {
				if(set.has(filter))
					set.delete(filter);
				else
					set.add(filter);

				return set;
			});
		};
	}
</script>

<svelte:head>
    <title>Blog | Cammie's Corner</title>
</svelte:head>

{#if data.posts.length > 0}
	<div class="flex justify-end mt-6 mr-6">
		<Button class="text-main text-md font-bold px-20 py-2.5 focus:ring-none">
			Filters <Icon name="chevron-down-solid" class="w-3 h-3 ml-2"/>
		</Button>

		<Dropdown class="p-3 space-y-2 bg-secondary rounded text-sm overflow-y-auto h-56">
			<DropdownItem class="rounded p-2 hover:bg-darktext">
				<Toggle class="rounded p-2 text-main focus:ring-none" on:click={toggleFilter("designdialogues")} checked={$filters.has("designdialogues")}>Design Dialogues</Toggle>
			</DropdownItem>
			<!-- <DropdownItem class="rounded p-2 hover:bg-darktext">
				<Toggle class="rounded p-2 text-main focus:ring-0" on:change={toggleFilter("devlogs")} checked={$filters.has("devlogs")}>Dev Logs</Toggle>
			</DropdownItem> -->
			<DropdownItem class="rounded p-2 hover:bg-darktext">
				<Toggle class="rounded p-2 text-main focus:ring-none" on:change={toggleFilter("lifeupdates")} checked={$filters.has("lifeupdates")}>Life Updates</Toggle>
			</DropdownItem>
			<DropdownItem class="rounded p-2 hover:bg-darktext">
				<Toggle class="rounded p-2 text-main focus:ring-none" on:change={toggleFilter("travels")} checked={$filters.has("travels")}>Travel Blogs</Toggle>
			</DropdownItem>
			<DropdownItem class="rounded p-2 hover:bg-darktext">
				<Toggle class="rounded p-2 text-main focus:ring-0" on:change={toggleFilter("funstuff")} checked={$filters.has("funstuff")}>Fun Stuff</Toggle>
			</DropdownItem>
		</Dropdown>
	</div>
{/if}

<div class="text-darktext text-xl">
	{#if data.posts.length <= 0}
		<UnderConstruction />
	{/if}
	{#key $filters}
		{#each getAllMonths(data.posts) as { date, posts }}
			{#if matchesFilters(posts)}
				<MonthSnip date={date}>
					{#each posts as { slug, frontmatter, html }}
						{#if matchesFilters([{ slug, frontmatter, html }])}
							<BlogCard link="/blog/{slug}" img={frontmatter.img} title={frontmatter.title} html={html} />
						{/if}
					{/each}	
				</MonthSnip>
			{/if}
		{/each}
	{/key}
</div>
