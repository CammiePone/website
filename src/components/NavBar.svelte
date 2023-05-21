<script lang="ts">
	import { page } from '$app/stores';
    import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const classNamesAll = "p-4 mx-0 flex justify-center items-center text-center md:text-xl text-lg hover:underline focus:underline font-bold";
	const classNamesActive = classNamesAll + " underline";
	interface NavItems {
		[name: string]: string;
	}

	export let navItems: NavItems;

	let nav;
	let first = true;
	let navVisible = false;
	let innerWidth = 0

	onMount(() => {
		if(innerWidth >= 640) {
			navVisible = true;
		}
	});

	function menuClick() {
		first = false;
		navVisible = !navVisible;
	}
</script>

<svelte:window bind:innerWidth />

<nav class="h-full">
	<!-- let keyboard users skip navigation -->
	<a id="skip-nav" class="absolute -translate-x-full focus:translate-x-0 p-4 bg-lighttext text-secondary rounded-br-2xl font-bold transition-transform duration-300 underline" href="#main-content">SKIP TO CONTENT</a>

	<button type="button" class={classNamesActive + " md:hidden"} on:click={menuClick}>MENU</button>

	<ul bind:this={nav} class="h-fit flex md:flex-row flex-col justify-left md:items-center items-start md:bg-transparent bg-secondary">
		{#if navVisible}
			{#each Object.entries(navItems) as [name, target]}
				<li transition:slide={{duration: first ? 0 : 400}}>
					<a class={$page.url.pathname === target ? classNamesActive : classNamesAll} href={target}>{name.toUpperCase()}</a>
				</li>
			{/each}
		{/if}
	</ul>
</nav>
