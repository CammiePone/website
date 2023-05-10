
<script lang="ts">
	import "../app.ts";
	import "../app.css";

	import NavBar from '../components/NavBar.svelte';
	import Socials from '../components/Socials.svelte';
	import { MetaTags } from 'svelte-meta-tags';

	const navItems = {
		home: '/',
		portfolio: '/portfolio',
		commissions: '/commissions',
		blog: '/blog'
	};
</script>

<MetaTags
	title="Cammie's Corner"
	titleTemplate="%s"
	description="Cammie Pet's blog and portfolio. Commissions. Minecraft mods. Game development."
	canonical="https://cammiescorner.dev"
	openGraph={{
		url: "https://cammiescorner.dev",
		title: "cammiescorner.dev",
		description: "Indie Game Designer & Developer",
		images: [
			{
				url: "https://cammiescorner.dev/space_helmet.webp",
				width: 512,
				height: 512,
				alt: "A voxelised space helmet"
			}
		],
		site_name: "Cammie's Corner"
	}}
/>

<div class="flex flex-col min-h-screen bg-main text-lighttext">
	<header class="bg-secondary h-16 top-0 z-50">
		<NavBar {navItems} />
	</header>
	<main id="main-content" class="scroll-smooth">
		<slot />
	</main>
	<footer class="partial-bg mt-auto w-full h-18 bottom-0 flex flex-col justify-center text-center">
		<Socials />
		<p class="z-10 pb-2 text-sm">Copyright &COPY; 2023 Cammie Pet, All Rights Reserved</p>
	</footer>
</div>
