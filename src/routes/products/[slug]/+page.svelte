<script>
	import InquiryButton from '$lib/components/InquiryButton.svelte';

	export let data;
	const { product } = data;
	console.log(data.product.id);
</script>

<section class="min-h-screen bg-gray-300 text-gray-950 pb-20">
	<div class="container px-6 py-10 mx-auto">
		<div class="lg:-mx-6 lg:flex lg:items-center">
			<div class="lg:w-1/2 lg:mx-6 h-96 rounded-lg lg:h-[36rem]">
				<img
					class="object-contain object-center my-auto w-auto h-full rounded-md"
					src="/files/{product.imageUrl}"
					alt=""
				/>
			</div>

			<div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
				<h1 class="text-3xl font-semibold text-gray-800 lg:text-3xl lg:w-96 uppercase">
					{product.name}
				</h1>

				<p class="max-w-lg mt-6 text-gray-800">{product.description}</p>
			</div>
			<div class="mt-6">
				<InquiryButton productName={data.product.name} productId={data.product.id} />
			</div>
		</div>
	</div>
</section>
