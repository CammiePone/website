<script lang="ts">
	import Carousel from 'svelte-carousel?client'
	import { browser } from '$app/environment';
    import { onMount } from 'svelte';

	let carousel;
	let imgTags;
	const carouselImgs = [
		"/carousel/wizard_tower.webp",
		"/carousel/icarus.webp",
		"/carousel/small_spaceship.webp",
		"/carousel/solar_strike.webp",
		"/carousel/backpacks.webp"
	];
	const update=(index) => {
		let leftImg = imgTags[index];
		let midImg = imgTags[(index + 1) % carouselImgs.length];
		let rightImg = imgTags[(index + 2) % carouselImgs.length];

		leftImg.classList.add("left-image");
		leftImg.classList.remove("middle-image");
		midImg.classList.add("middle-image");
		midImg.classList.remove("right-image");
		rightImg.classList.add("right-image");
		rightImg.classList.remove("left-image");
	};

	onMount(async() => {
		update(carousel.currentPageIndex);
	});
</script>

<svelte:head>
    <title>Home | Cammie's Corner</title>
</svelte:head>

<div id="hero-images" class="relative">
	<div class="pt-6 pb-6 bg-slate-900 flex flex-row place-content-center max-w-full overflow-x-hidden">
		{#if browser}
			<Carousel
				particlesToShow={3}
				autoplay
				autoplayDuration={4000}
				arrows={false}
				swiping={false}
				pauseOnFocus={true}
				bind:this={carousel}
				on:pageChange={
					event => {
						let index = event.detail;
						update(index);
					}
				}
			>
				{#each carouselImgs as src, i}
					<img {src} alt="" class="middle-image brightness-50 rounded-2xl" bind:this={imgTags[i].ref} height="500" width="888">
				{/each}
			</Carousel>
		{/if}

		<!-- <img src={carouselImgs[(index - 1 + carouselImgs.length) % carouselImgs.length]} alt="" class="left-image brightness-50 rounded-2xl" height="500" width="888">
		<img src={carouselImgs[index]} alt="" class="middle-image brightness-50 rounded-2xl" height="500" width="888">
		<img src={carouselImgs[(index + 1) % carouselImgs.length]} alt="" class="right-image brightness-50 rounded-2xl" height="500" width="888"> -->
	</div>
	<div class="hero-text text-center absolute top-1/2 left-1/2 z-10">
		<h1 class="text-5xl">Hello, I'm Cammie!</h1>
		<p class="text-sm [text-shadow:_none]">Fae / Faer</p>
		<p class="text-2xl mt-4">Indie Game Designer & Developer</p>
	</div>
</div>

<div class="text-darktext text-justify text-xl">
	<div class="bg-lighttext mr-[10vw] my-[4vh] py-4 px-6 rounded-e-3xl flex flex-row place-content-start items-center">
		<img src="/wizard_hat.webp" alt="" height="128" width="128" class="mx-6">
		<p>
			I've been working as an indie game designer and developer since September 2017. I got my start by learning Java and making mods for <em>Minecraft: Java Edition</em>.
			<br>
			Since then, I've branched out to making my own demos in different game engines, including Godot, Unity3D, and Unreal Engine 4. I've picked up several other programming languages, including C#, JavaScript, TypeScript, C++, Python, Rust, and more!
		</p>
	</div>
	<div class="bg-lighttext ml-[10vw] my-[4vh] py-4 px-6 rounded-s-3xl flex flex-row place-content-end items-center">
		<p>
			Ultimately, game design is what I'm most passionate about. I picked up programming as a means to bring my designs to life, and my design skills are what I'm most proud of. I've honed them to near-perfection over the years, and I'm more than happy to test them against unfamiliar circumstances!
			<br>
			As of March 2023, I've finally taken the huge step to start development on my first full game, alongside my partner!
		</p>
		<img src="/end_fable_logo.webp" alt="" height="128" width="128" class="mx-6">
	</div>
	<div class="bg-lighttext mr-[10vw] my-[4vh] py-4 px-6 rounded-e-3xl flex flex-row place-content-start items-center">
		<img src="/space_helmet.webp" alt="" height="128" width="128" class="mx-6">
		<p>
			I hold myself to very high standards, and know that my work benefits from that immensely. Any project I set my sights on gets that same quality treatment, regardless of if it's my own creation or one I was hired to work on.
			<br>
			Despite my humble beginnings, my ambitions are aimed at the stars and my abilities can carry them there!
		</p>
	</div>
</div>
