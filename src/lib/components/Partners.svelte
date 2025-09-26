<script>
	// 1. Define the brand logos for Auto Parts Dealers/Manufacturers
	// IMPORTANT: Replace these placeholder URLs with the actual paths to your logo images.
	const logos = [
		{ src: '/logos/bosch.jpg', alt: 'Bosch Auto Parts' },
		{ src: '/logos/denso.png', alt: 'DENSO' },
		{ src: '/logos/trupart.webp', alt: 'Trupart' },
		{ src: '/logos/continental.png', alt: 'Continental' },
		{ src: '/logos/acdelco.png', alt: 'ACDelco' },
		{ src: '/logos/moog.png', alt: 'Moog Suspension' },
		{ src: '/logos/blueprint.jpg', alt: 'Blueprint' },
		{ src: '/logos/ngk.jpg', alt: 'NGK' },
		{ src: '/logos/sealey.jpg', alt: 'Sealey' }
		// Add more logos here to ensure a seamless loop
	];

	// Duplicate the logos array (3 times) to create a seamless infinite loop effect
	const duplicatedLogos = [...logos, ...logos, ...logos];

	// You can adjust the speed of the animation here:
	const animationDuration = '60s';
</script>

<section class="py-12 bg-[#252B2B] text-[#BFBFBF] overflow-hidden rounded-sm my-4">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-4xl font-semibold text-gray-300 mb-8 font-gupter">Quality Parts from Brands We Trust</h2>
	</div>

	<div class="ticker-container relative">
		<div class="ticker-wrapper flex items-center" style="animation-duration: {animationDuration};">
			{#each duplicatedLogos as logo (logo.alt)}
				<div class="flex-shrink-0 mx-8">
					<img
						src={logo.src}
						alt={logo.alt}
						class="h-16 w-auto object-contain transition-opacity duration-300 opacity-60 hover:opacity-100"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* 2. Define the keyframes for the infinite horizontal scroll */
	@keyframes scroll {
		0% {
			/* Start position (0% offset) */
			transform: translateX(0);
		}
		100% {
			/* End position (100% of the combined width of the original logos array) */
			/* We scroll 1/3 of the total width */
			transform: translateX(calc(-1 * (100% / 3)));
		}
	}

	/* 3. Apply the animation to the wrapper element */
	.ticker-wrapper {
		/* Set the width to match the duplication factor (300% for 3 sets of logos) */
		width: 300%;
		animation-name: scroll;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		/* Animation duration is set via Svelte script style attribute */
		white-space: nowrap; /* Prevents logos from wrapping to a new line */
	}

	/* Optional: Pause the animation when the user hovers over the ticker */
	.ticker-container:hover .ticker-wrapper {
		animation-play-state: paused;
	}
</style>
