<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';
	const iconSize = 48;
</script>

<ul id="socials" class="h-full w-full grid gap-4 grid-flow-col auto-cols-max place-content-center my-4">
	<li class="m-auto inline-flex">
		<a href="https://www.linkedin.com/in/cammie-pet" target="_blank" rel="noopener noreferrer" class="inline-flex social-item-anchor">
			<SocialIcons network="linkedin" fgColor="#2e3157" bgColor="#ffef91" width={iconSize} height={iconSize} />
		</a>
	</li>
	<li class="m-auto inline-flex">
		<a href="https://github.com/CammiePone" target="_blank" rel="noopener noreferrer" class="inline-flex social-item-anchor">
			<SocialIcons network="github" fgColor="#2e3157" bgColor="#ffef91" width={iconSize} height={iconSize} />
		</a>
	</li>
	<li class="m-auto inline-flex">
		<a href="https://discord.gg/f5dFYWX" target="_blank" rel="noopener noreferrer" class="inline-flex social-item-anchor">
			<SocialIcons network="discord" fgColor="#2e3157" bgColor="#ffef91" width={iconSize} height={iconSize} />
		</a>
	</li>
</ul>