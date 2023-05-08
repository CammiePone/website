<script lang="ts">
	import "../app.ts";
	import "../app.css";

	import NavBar from '../components/NavBar.svelte';
	import Socials from '../components/Socials.svelte';

	const navItems = {
		home: '/',
		portfolio: '/portfolio',
		commissions: '/commissions',
		blog: '/blog'
	};
</script>
<header class="header-bg h-16 top-0 z-50">
	<NavBar {navItems} />
</header>
<main id="main-content" class="scroll-smooth pb-16">
	<slot />
</main>
<footer class="w-full h-18 bottom-0 absolute flex flex-col justify-center text-center">
	<Socials />
	<p class="z-10 pb-2 text-sm">Copyright &COPY; 2023 Cammie Pet, All Rights Reserved</p>
	<div class="footer-bg" />
</footer>
