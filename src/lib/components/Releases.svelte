<script>
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	let dealerships = [
		{
			name: 'Service Parts',
			icon: 'material-symbols:home-repair-service-rounded',
			image: 'wrench.png'
		},
		{ name: 'Engine Parts', icon: 'ph:engine-light', image: 'engine.png' },
		{
			name: 'Lubricants',
			icon: 'material-symbols:oil-barrel-outline-rounded',
			image: 'lubricant.png'
		},
		//{ name: 'Gearbox Oils', icon: 'ph:gear-six-light', image: 'gearbox-oil.png' },
		{
			name: 'Suspensions',
			icon: 'material-symbols:local-car-wash-outline-rounded',
			image: 'suspension.png'
		}
	];
</script>

<div class="uppercase text-center font-dancing">
	<p class="text-gray-300 text-2xl mb-5">featured</p>
	<p class="text-gray-300 text-2xl font-bold mb-5">new releases</p>
	<p class="text-gray-300 normal-case mb-5">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nam facere esse quidem est
		illum corrupti obcaecati! Dolorem voluptate molestiae voluptas. Inventore?
	</p>
</div>
<div
	class="max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 mb-6 justify-center justify-items-center"
>
	{#each dealerships as deal}
		<Card2 category={deal.name} image="/images/{deal.image}" name={deal.name} />
	{/each}
</div>
