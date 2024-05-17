<script>
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let data;
	let { products } = data;
</script>

<div class="bg-black">
	<p class="text-gray-200 text-3xl pl-4 font-semibold py-4">All Products</p>
	<div
		class="w-full  items-center justify-items-center lg:grid-cols-4 mx-auto grid p-4 grid-cols-1 md:grid-cols-2 gap-x-2 lg:gap-7 gap-6 mb-6 justify-center"
	>
		{#each products as product}
			<ProductCard image="/files/{product.imageUrl}" name={product.name} id={product.id} category={product.category} />
		{/each}
	</div>
</div>
