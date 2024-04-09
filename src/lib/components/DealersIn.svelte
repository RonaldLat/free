<script>
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	let dealerships = [
		{
			name: 'Service Parts',
			icon: 'material-symbols:home-repair-service-rounded',
			image: 'wrench.png',
      categoryUrl: 'service-parts'
		},
		{ name: 'Engine Parts', icon: 'ph:engine-light', image: 'engine.png', catergoryUrl: 'engine parts'},
		{
			name: 'Lubricants',
			icon: 'material-symbols:oil-barrel-outline-rounded',
			image: 'lubricant.png',
      categoryUrl: 'service-parts'
		},
		//{ name: 'Gearbox Oils', icon: 'ph:gear-six-light', image: 'gearbox-oil.png' },
		{
			name: 'Suspensions',
			icon: 'material-symbols:local-car-wash-outline-rounded',
			image: 'suspension.png'
		}
	];
</script>

<p class="text-gray-300 text-left uppercase text-2xl font-bold mb-5">dealers in</p>
<div
	class="max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 mb-6 justify-center justify-items-center"
>
	{#each dealerships as deal}
    <a href={deal.catergoryUrl}>
		<Card2 category={deal.name} image="/images/{deal.image}" name={deal.name} />
    </a>
	{/each}
</div>
