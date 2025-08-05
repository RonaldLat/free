<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
	import Icon from '@iconify/svelte';
</script>

<Nav />
<main class="font-roboto bg-black relative max-w-full min-h-screen overflow-hidden">
	<Icon
		icon="material-symbols:menu-rounded"
		class="hidden text-5xl text-gray-200 fixed top-2 right-2 md:hidden"
	/>
	<slot />
</main>
<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
