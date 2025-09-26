<script>
	import TestimonialCard from './TestimonialCard.svelte';

	// Define the structure of a single testimonial
	/** * @typedef { {
	 * reviewerName: string,
	 * text: string,
	 * rating: number,
	 * time: string,
	 // * profilePhotoUrl: string
	 * } } Testimonial
	 */

	// --- HARDCODED REVIEWS DATA (Same as before) ---
	/** @type {Testimonial[]} */
	const testimonials = [
		{
			reviewerName: 'David K.',
			text: 'Excellent service and very knowledgeable staff. They helped me find a rare part for my Subaru quickly. Highly recommend Speedy Nucho Auto for genuine parts!',
			rating: 5,
			time: '2024-09-15',
			// profilePhotoUrl: 'https://via.placeholder.com/150/2563eb/ffffff?Text=DK' // blue-600 placeholder
		},
		{
			reviewerName: 'Sarah M.',
			text: 'The delivery was surprisingly fast, and the part was exactly as described. Great communication throughout the process. A reliable source for auto spares.',
			rating: 5,
			time: '2024-08-28',
			// profilePhotoUrl: 'https://via.placeholder.com/150/16a34a/ffffff?Text=SM' // green-600 placeholder
		},
		{
			reviewerName: 'Peter J.',
			text: "I had a good experience. They had my suspension parts in stock when other places didn't. Only wish their location was easier to find, but overall satisfied.",
			rating: 4,
			time: '2024-07-10',
			// profilePhotoUrl: 'https://via.placeholder.com/150/f97316/333333?Text=PJ' // orange-500 placeholder
		},
		{
			reviewerName: 'Grace W.',
			text: 'The best place to get auto parts in town. Affordable prices and they take the time to ensure you get the correct item for your car model. Five stars!',
			rating: 5,
			time: '2024-06-01',
			// profilePhotoUrl: 'https://via.placeholder.com/150/dc2626/ffffff?Text=GW' // red-600 placeholder
		}
	];
</script>

<section class="py-16 bg-gray-100 sm:py-20 lg:py-24">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl font-extrabold text-gray-900 text-center sm:text-5xl">
			What Our Customers Say
		</h2>
		<p class="mt-4 text-xl text-gray-600 text-center">
			Trusted by the community on Google My Business
		</p>

		{#if testimonials.length > 0}
			<div class="mt-16 grid gap-10 lg:grid-cols-3 md:grid-cols-2">
				{#each testimonials as testimonial (testimonial.reviewerName)}
					<TestimonialCard {testimonial} />
				{/each}
			</div>

			<div class="mt-16 text-center">
				<a
					href="https://www.google.com/search?q=speedynuchoauto#mpd=~15692790835925443276/customers/reviews"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-lg shadow-lg
                           text-white bg-blue-600
                           hover:bg-red-600 transition-colors duration-300"
				>
					Read More Reviews on Google
				</a>
			</div>
		{:else}
			<div class="mt-10 text-center text-gray-500">No testimonials to display yet.</div>
		{/if}
	</div>
</section>
