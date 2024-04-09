<script>
	import '../app.css';
  import Icon from '@iconify/svelte';
</script>

<main class="bg-black relative max-w-full overflow-hidden">
<Icon icon="material-symbols:menu-rounded" class="hidden text-5xl text-gray-200 fixed top-2 right-2 md:hidden"/>
	<slot />
</main>
