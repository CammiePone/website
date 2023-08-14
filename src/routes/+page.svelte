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
		<p class="md:text-2xl text-lg mt-4">Indie Game Designer & Developer</p>
	</div>
</div>

<div class="text-darktext md:text-justify text-xl">
	<AboutSnip img="/about/wizard_hat.webp">
		<p>I've been in the field as an indie game designer/developer since early September 2017. I got my start with making modifications for <em>Minecraft: Java Edition</em>, many of which became really popular!</p>
		<p>For me, video games aren't just mere entertainment. They're the ultimate story-telling medium, able to get the player to really <em>feel</em> for these characters we create in a way movies and books can't.</p>
	</AboutSnip>
	<AboutSnip img="/about/end_fable_logo.webp">
		<p>In early March 2023, I started making my first full fledged game with the help of my partner, Upcraft. It's going to be a casual adventure game inspired by <em>Rune Factory 3: A Fantasy Harvest Moon</em>, <em>Pokémon Legends: Arceus</em>, and a few other games - old and new alike!</p>
		<p>You can check out the game on <a href="https://bsky.app/profile/end-fable.com" class="underline text-secondary" target="_blank" rel="noopener noreferrer">Bluesky</a> or <a href="https://twitter.com/EndFable" class="underline text-secondary" target="_blank" rel="noopener noreferrer">Twitter</a> to see some of the concept art we've released.</p>
	</AboutSnip>
	<AboutSnip img="/about/space_helmet.webp">
		<p>On a more serious note, my work is always going to be a love letter to those that came before me. The people who are responsible for creating some of my best memories growing up.</p>
		<p>I may never make the "perfect" game - no one can - but I will always put my heart and soul into the games I work on. If I can do that, maybe I'll help inspire the next generation of game developers.</p>
	</AboutSnip>
</div>
