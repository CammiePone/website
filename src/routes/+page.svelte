<script lang="ts">
	import Carousel from 'svelte-carousel?client'
	import { browser } from '$app/environment';
    import AboutSnip from '../components/AboutSnip.svelte';

	const carouselImgs = [
		"/carousel/wizard_tower.webp",
		"/carousel/icarus.webp",
		"/carousel/small_spaceship.webp",
		"/carousel/solar_strike.webp",
		"/carousel/backpacks.webp"
	];
</script>

<svelte:head>
    <title>Home | Cammie's Corner</title>
</svelte:head>

<div id="hero-images" class="relative overflow-x-hidden h-1/2">
	<div class="py-[2.5vh] bg-slate-900 flex flex-row place-content-center md:min-w-[150vw] md:-translate-x-[25vw] min-w-[300vw] -translate-x-[100vw]">
		{#if browser}
			<Carousel
				particlesToShow={3}
				autoplay
				autoplayDuration={4000}
				arrows={false}
				swiping={false}
				dots={false}
				let:currentPageIndex
			>
				{#each carouselImgs as src, index(src)}
					<div class="px-4">
						{#if index === currentPageIndex}
							<img {src} alt="" loading="lazy" class="left-image brightness-50 rounded-2xl" height="500" width="888">
						{:else if index === (currentPageIndex + 1) % carouselImgs.length}
							<img {src} alt="" loading="lazy" class="middle-image brightness-50 rounded-2xl" height="500" width="888">
						{:else if index === (currentPageIndex + 2) % carouselImgs.length}
							<img {src} alt="" loading="lazy" class="right-image brightness-50 rounded-2xl" height="500" width="888">
						{:else}
							<img {src} alt="" loading="lazy" class="brightness-50 rounded-2xl" height="500" width="888">
						{/if}
					</div>
				{/each}
			</Carousel>
		{/if}
	</div>
	<div class="hero-text text-center absolute top-1/2 left-1/2 z-10 w-full">
		<h1 class="md:text-5xl text-4xl">Hello, I'm Cammie!</h1>
		<p class="md:text-sm">Fae / Faer</p>
		<p class="md:text-2xl text-lg mt-4">Indie Game Designer & Developer</p>
	</div>
</div>

<div class="text-darktext md:text-justify text-xl">
	<AboutSnip img="/about/wizard_hat.webp">
		<p>I've been working as an indie game designer and developer since September 2017. I got my start by learning Java and making mods for <em>Minecraft: Java Edition</em>.</p>
		<p>Since then, I've branched out to making my own demos in different game engines, including Godot, Unity3D, and Unreal Engine 4. I've picked up several other programming languages, including C#, JavaScript, TypeScript, C++, Python, Rust, and more!</p>
	</AboutSnip>
	<AboutSnip img="/about/end_fable_logo.webp">
		<p>Ultimately, game design is what I'm most passionate about. I picked up programming as a means to bring my designs to life, and my design skills are what I'm most proud of. I've honed them to near-perfection over the years, and I'm more than happy to test them against unfamiliar circumstances!</p>
		<p>As of March 2023, I've finally taken the huge step to start development on my first full game, alongside my partner!</p>
	</AboutSnip>
	<AboutSnip img="/about/space_helmet.webp">
		<p>I hold myself to very high standards, and know that my work benefits from that immensely. Any project I set my sights on gets that same quality treatment, regardless of if it's my own creation or one I was hired to work on.</p>
		<p>Despite my humble beginnings, my ambitions are aimed at the stars and my abilities can carry them there!</p>
	</AboutSnip>
</div>
