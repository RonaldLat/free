<script>
	import ProductCard from "./ProductCard.svelte";

let products = [
{name: 'Product Name', image: '19.jpg'},
{name: 'Product Name', image: '23.jpg'},
{name: 'Product Name', image: '24.jpg'},
{name: 'Product Name', image: '26.jpg'},

]
</script>

<div class="text-gray-100 text-center p-10">
    <h1 class="font-bold text-3xl uppercase">featured products</h1>
</div>

<section
    class="w-full mx-auto grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-2 mt-10 mb-5 ">

    {#each products as product }
    <ProductCard image="/images/{product.image}" name={product.name}/>
    {/each}

</section>

<div class="w-full bg-gray-900 items-center justify-items-center lg:grid-cols-4 mx-auto grid p-4 grid-cols-2 gap-x-2 gap-1 mb-6 justify-center hidden">
    {#each products as product }
    <ProductCard image="/images/{product.image}" name={product.name}/>

    {/each}
</div>
