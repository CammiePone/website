<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';
	const iconSize = 48;
</script>

<ul id="socials" class="z-10 w-full grid gap-4 grid-flow-col auto-cols-max place-content-center mt-0 mb-1">
	<li class="m-auto inline-flex">
		<a href="https://cammiescorner.dev/linkedin" target="_blank" rel="noopener noreferrer" class="inline-flex border-solid border-secondary border-4 bg-accent hover:rounded-xl focus:rounded-xl social-item-anchor">
			<SocialIcons network="linkedin" fgColor="#2e3157" bgColor="#ffef91" width={iconSize} height={iconSize} />
		</a>
	</li>
	<li class="m-auto inline-flex">
		<a href="https://cammiescorner.dev/github" target="_blank" rel="noopener noreferrer" class="inline-flex border-solid border-secondary border-4 bg-accent hover:rounded-xl focus:rounded-xl social-item-anchor">
			<SocialIcons network="github" fgColor="#2e3157" bgColor="#ffef91" width={iconSize} height={iconSize} />
		</a>
	</li>
	<li class="m-auto inline-flex">
		<a href="https://cammiescorner.dev/discord" target="_blank" rel="noopener noreferrer" class="inline-flex border-solid border-secondary border-4 bg-accent hover:rounded-xl focus:rounded-xl social-item-anchor">
			<SocialIcons network="discord" fgColor="#2e3157" bgColor="#ffef91" width={iconSize} height={iconSize} />
		</a>
	</li>
</ul>
