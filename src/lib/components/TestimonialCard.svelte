<script>
	import StarRating from './StarRating.svelte';

	/** @typedef { { reviewerName: string, text: string, rating: number, time: string, profilePhotoUrl: (string | undefined) } } Testimonial */
	export let testimonial;

	// --- Helper Functions for Initials and Colors ---

	/** Gets the first letter of the first two names (e.g., "John Smith" -> "JS") */
	const getInitials = (name) => {
		if (!name) return '??';
		const parts = name.split(' ').filter((p) => p.length > 0);
		return parts
			.slice(0, 2)
			.map((p) => p[0])
			.join('')
			.toUpperCase();
	};

	/** * Generates a consistent background color class based on the name
	 * This makes the same reviewer always have the same initial color.
	 */
	const getRandomColor = (name) => {
		const colors = [
			'bg-indigo-500',
			'bg-purple-500',
			'bg-pink-500',
			'bg-green-500',
			'bg-red-500',
			'bg-yellow-500',
			'bg-teal-500',
			'bg-blue-500'
		];

		let hash = 0;
		for (let i = 0; i < name.length; i++) {
			hash = name.charCodeAt(i) + ((hash << 5) - hash);
		}
		const index = Math.abs(hash) % colors.length;
		return colors[index];
	};

	// Calculate the initials and color once per component instance
	$: initials = getInitials(testimonial.reviewerName);
	$: bgColorClass = getRandomColor(testimonial.reviewerName);
</script>

<div
	class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300
            border-t-4 border-white hover:border-blue-600
            flex flex-col h-full"
>
	<div class="flex-grow">
		<StarRating rating={testimonial.rating} />
		<p class="mt-4 text-gray-800 text-base italic line-clamp-4">
			"{testimonial.text}"
		</p>
	</div>

	<div class="mt-6 pt-4 border-t border-blue-100 flex items-center">
		{#if testimonial.profilePhotoUrl}
			<img
				src={testimonial.profilePhotoUrl}
				alt={testimonial.reviewerName}
				class="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-600"
				loading="lazy"
			/>
		{:else}
			<div
				class="w-12 h-12 rounded-full mr-4 flex items-center justify-center
                       text-white font-semibold text-lg uppercase {bgColorClass} 
                       ring-2 ring-blue-600"
			>
				{initials}
			</div>
		{/if}

		<div>
			<p class="font-bold text-gray-900">{testimonial.reviewerName}</p>
			<p class="text-sm text-gray-500 hidden">
				Posted on {new Date(testimonial.time).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})}
			</p>
		</div>
	</div>
</div>
