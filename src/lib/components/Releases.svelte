<script>
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	let dealerships = [
		{
			name: 'Service Parts',
			icon: 'material-symbols:home-repair-service-rounded',
			image: 'https://unsplash.com/photos/tiUvFxz4Dj0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmVjb3JkJTIwcGxheWVyfGVufDB8fHx8MTcxMDc3NzAyNHww&force=true&w=640'
		},
		{ name: 'Engine Parts', icon: 'ph:engine-light', image: 'https://unsplash.com/photos/FZWivbri0Xk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8fHwxNzEwNzA0NDMxfDA&force=true&w=640' },
		{
			name: 'Lubricants',
			icon: 'material-symbols:oil-barrel-outline-rounded',
			image: 'https://unsplash.com/photos/0rmby-3OTeI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG11c2ljfGVufDB8fHx8MTcxMDcwNDQzMXww&force=true&w=640'
		},
		//{ name: 'Gearbox Oils', icon: 'ph:gear-six-light', image: 'gearbox-oil.png' },
		{
			name: 'Suspensions',
			icon: 'material-symbols:local-car-wash-outline-rounded',
			image: 'https://unsplash.com/photos/Fw-JHYPwS3U/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzR8fGRqJTIwc2V0fGVufDB8fHx8MTcxMDc2MTU0MXww&force=true&w=640'
		}
	];
</script>
<img src="https://unsplash.com/photos/tiUvFxz4Dj0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmVjb3JkJTIwcGxheWVyfGVufDB8fHx8MTcxMDc3NzAyNHww&force=true&w=640" alt="">

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
		<Card2 category={deal.name} image={deal.image} name={deal.name} />
	{/each}
</div>
