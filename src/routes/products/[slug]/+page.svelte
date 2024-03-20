<script>
	export let data;
  const {product } = data;
</script>

<section class="min-h-screen bg-gray-300 text-gray-950 pb-20">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center">
            <img class="object-contain object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="/files/{product.imageUrl}" alt="">

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

                <h1 class="text-3xl font-semibold text-gray-800  lg:text-3xl lg:w-96 uppercase">
                    {product.name}
                </h1>

                <p class="max-w-lg mt-6 text-gray-800  ">{product.description}</p>


            </div>
        </div>
    </div>
</section>
