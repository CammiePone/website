<script lang="ts">
	import { page } from '$app/stores';
	const classNamesAll = "p-4 mx-0 flex justify-center items-center text-center hover:underline font-bold";
	const classNamesActive = classNamesAll + " underline";
	interface NavItems {
		[name: string]: string;
	}

	export let navItems: NavItems;
</script>

<nav class="h-full">
	<!-- let keyboard users skip navigation -->
	<a id="skip-nav" class="absolute -translate-x-full focus:translate-x-0 p-4 font-bold transition-transform duration-300 underline" href="#main-content">SKIP TO CONTENT</a>

	<ul class="h-full flex justify-left items-center">
		{#each Object.entries(navItems) as [name, target]}
			<li>
				<a class={$page.url.pathname === target ? classNamesActive : classNamesAll} href={target}>{name.toUpperCase()}</a>
			</li>
		{/each}
	</ul>
</nav>
