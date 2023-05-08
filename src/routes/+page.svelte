<script>
	import { ImagePanorama } from 'svelte-panolens';

	const config = {
		src: '/minecraft_panorama.jpg',
		controlBar: false,
		horizontalView: true,
		cameraFov: 70,
		autoRotateActivationDuration: 1,
		autoRotate: true
	};
</script>
<svelte:head>
    <title>Home | Cammie's Corner</title>
</svelte:head>
<div class="bottom-0 h-96">
	<ImagePanorama { config } />
</div>
