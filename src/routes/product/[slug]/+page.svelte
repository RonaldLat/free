<script>
export let data;
let   {products} =    data;

console.log(products)
</script>
<div class="text-white">
<p>Product</p>
{#each products as product}
<p class="uppercase">{product.name}</p>
<img class="bg-red-200" src='/files/{product.imageUrl}' alt="">

{/each}
</div>
