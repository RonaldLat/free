<script>
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let data;
	let { products } = data;

	console.log(products);
</script>

<div class="text-gray-100 text-left py-10">
	<h1 class="font-bold text-3xl uppercase">featured products</h1>
</div>

<section
	class="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-2 mt-10 mb-5"
>
	{#each products as product}
		<ProductCard image="/files/{product.imageUrl}" name={product.name} id={product.id} category={product.category}/>
	{/each}
</section>
