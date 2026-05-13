<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Chat from '$lib/components/Chat.svelte'; // 1. Import the Chat component
	import '../app.css';
	import Icon from '@iconify/svelte';
</script>

<main class="font-roboto relative max-w-full min-h-screen overflow-hidden">
	<Nav />
	<Icon
		icon="material-symbols:menu-rounded"
		class="hidden text-5xl text-gray-200 fixed top-2 right-2 md:hidden"
	/>

	<slot />

	<Chat />
</main>
<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
