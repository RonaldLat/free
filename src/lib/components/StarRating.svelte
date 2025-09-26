<script>
	export let rating = 0;
	const maxRating = 5;
</script>

<div class="flex items-center">
	{#each Array(maxRating) as _, i}
		{@const isFilled = i < rating}
		<svg
			class="w-5 h-5 {isFilled ? 'text-yellow-400' : 'text-gray-300'}"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.049 2.927c.3-.921 1.638-.921 1.94 0l1.242 3.823a1 1 0 00.95.691h4.015c.969 0 1.371 1.24.588 1.81l-3.255 2.365a1 1 0 00-.364 1.118l1.242 3.823c.3.921-.755 1.688-1.54 1.118l-3.255-2.365a1 1 0 00-1.176 0l-3.255 2.365c-.785.57-1.84-.197-1.54-1.118l1.242-3.823a1 1 0 00-.364-1.118L2.051 9.251c-.783-.57-.381-1.81.588-1.81h4.015a1 1 0 00.95-.691l1.242-3.823z"
			></path>
		</svg>
	{/each}
</div>
