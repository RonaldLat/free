<script>
	import Footer from '$lib/components/Footer.svelte';
import '../app.css';
import Icon from '@iconify/svelte';
</script>

<main class="bg-black min-h-screen max-w-full overflow-hidden ">
	<header class="h-24 sm:h-32 flex items-center w-full max-w-5xl mx-auto relative bg-transparent">
		<div class="w-full mx-auto px-6 flex items-center justify-around">
			<nav class="font-cuprum text-gray-800 pb-4  w-full dark:text-white uppercase text-md md:text-lg flex items-center justify-between">
				<a href="/about" class="hidden md:block px-6 flex"> About </a>
				<a href="#" class="py-2 hidden md:block px-6 flex"> Downloads </a>
				<a href="/" class=" cursor-pointer font-stalemate text-gray-800 normal-case dark:text-white font-black text-5xl">dj stainer77</a>
				<a href="#" class="hidden md:block px-6 flex"> listen </a>
				<a href="#" class="hidden md:block px-6 flex "> booking </a>
        <Icon icon="material-symbols:menu-rounded" class="text-4xl md:hidden self-center"/>
			</nav>
		</div>
	</header>

	<slot />
  <Footer/>
</main>
