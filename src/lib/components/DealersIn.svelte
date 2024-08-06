<script>
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	let dealerships = [
		{
			name: 'Service Parts',
			icon: 'material-symbols:home-repair-service-rounded',
			image: 'wrench.png',
      categoryUrl: 'service-parts',
      info: 'Components necessary for regular maintenance and repairs to keep your vehicle running smoothly.'
		},
		{ name: 'Engine Parts', icon: 'ph:engine-light', image: 'engine.png', categoryUrl: 'engine-parts',info:'Crucial elements for engine performance, efficiency, and durability.'},
		{
			name: 'Lubricants',
			icon: 'material-symbols:oil-barrel-outline-rounded',
			image: 'lubricant.png',
      categoryUrl: 'lubricants',
      info: 'Premium oils and fluids designed to reduce friction and protect engine parts.'
		},
		//{ name: 'Gearbox Oils', icon: 'ph:gear-six-light', image: 'gearbox-oil.png' },
		{
			name: 'Suspensions',
			icon: 'material-symbols:local-car-wash-outline-rounded',
			image: 'suspension.png',
      categoryUrl: 'suspension-parts',
      info: 'Systems and components that enhance vehicle stability, handling, and ride comfort.'
		}
	];
</script>

<div
	class="max-w-full hidden mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 mb-6 justify-center justify-items-center"
>
	{#each dealerships as deal}
    <a href={deal.categoryUrl}>
		<Card2 category={deal.name} image="/images/{deal.image}" name={deal.name} />
    </a>
	{/each}
</div>

<!--
// v0 by Vercel.
// https://v0.dev/t/VH4nVQVQUcK
-->

<!--
// v0 by Vercel.
// https://v0.dev/t/0X6ytAIekwj
-->

<div class="bg-[#252B2B] text-[#BFBFBF]">
  <div class="py-8 px-4 md:px-6">
    <h2 class="font-gupter text-2xl font-bold md:text-3xl">Our Product Categories</h2>
  </div>
  <section class="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-4 md:p-6">
	{#each dealerships as deal}
    <div class="relative overflow-hidden rounded-lg group">
      <a class="absolute inset-0 z-10" href={deal.categoryUrl}>
        <span class="sr-only">View Engine Parts</span>
      </a>
      <img
        src="/images/{deal.image}"
        alt="Engine Parts"
        width="300"
        height="300"
        class="object-cover w-full h-60"
        style="aspect-ratio: 300 / 300; object-fit: cover;"
      />
      <div class="p-4 bg-background">
        <h3 class="font-gupter text-lg text-gray-100 font-semibold  md:text-xl">{deal.name}</h3>
        <p class="text-sm text-gray-300">{deal.info}</p>
      </div>
    </div>
	{/each}
  </section>
</div>
