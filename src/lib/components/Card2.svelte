<script>
	export let category;
	export let image;
	export let name;
</script>

<article
	class="relative isolate flex flex-col justify-end overflow-hidden rounded-sm uppercase px-8 pb-8 pt-40 max-w-md"
>
	<img src={image} alt="car part" class="absolute inset-0 h-full w-full object-cover" />
	<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
	<h3 class="z-10 mt-3 text-xl md:text-lg font-bold text-white">{name}</h3>
</article>
