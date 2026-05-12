<script>
	// 1. Define the brand logos for Auto Parts Dealers/Manufacturers
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
	];

	// Duplicate the logos array (3 times) to create a seamless infinite loop effect
	const duplicatedLogos = [...logos, ...logos, ...logos];

	// You can adjust the speed of the animation here:
	const animationDuration = '60s';
</script>

<section class="py-12 bg-[#252B2B] text-[#BFBFBF] overflow-hidden rounded-sm my-4">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-4xl font-semibold text-gray-300 mb-8 font-gupter">
			Quality Parts from Brands We Trust
		</h2>
	</div>

	<div class="ticker-container relative">
		<div class="ticker-wrapper flex items-center" style="animation-duration: {animationDuration};">
			{#each duplicatedLogos as logo, index (index)}
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
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-1 * (100% / 3)));
		}
	}

	/* 3. Apply the animation to the wrapper element */
	.ticker-wrapper {
		width: 300%;
		animation-name: scroll;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		white-space: nowrap;
	}

	.ticker-container:hover .ticker-wrapper {
		animation-play-state: paused;
	}
</style>
