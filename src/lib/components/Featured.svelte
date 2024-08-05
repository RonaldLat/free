<script>
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let data;
	let { products } = data;

	console.log(products);
</script>

<div class="text-gray-100 text-left py-10 hidden">
	<h1 class="font-bold text-3xl uppercase">featured products</h1>
</div>

<section
	class="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-2 mt-10 mb-5 hidden"
>
	{#each products as product}
		<ProductCard image="/files/{product.imageUrl}" name={product.name} id={product.id} category={product.category}/>
	{/each}
</section>

<!--
// v0 by Vercel.
// https://v0.dev/t/XchJFtAmVW5
-->

<div class="bg-[#d5d5d8]">
  <div class="py-8 px-4 md:px-6">
    <h2 class="font-gupter text-2xl font-bold md:text-3xl capitalize">Featured products</h2>
  </div>
  <section class="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-6">
	{#each products as product}
      <div class="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" href="/products/{product.id}">
          <span class="sr-only">View</span>
        </a>
        <img
          src="/files/{product.imageUrl}"
          alt="Auto Part 2"
          width="500"
          height="400"
          class="object-cntain w-full h-64"
          style="aspect-ratio: 500 / 400; object-fit: cover;"
        />
        <div class="p-4 bg-black h-full text-white">
          <span class="font-gupter text-sm font-medium capitalize text-gray-300">{product.category}</span>
          <h3 class="text-lg font-bold uppercase text-gray-100">{product.name}</h3>
        </div>
      </div>
  {/each}
  </section>
</div>
