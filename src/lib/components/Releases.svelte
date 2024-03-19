<script>
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	let releases = [
		{
			name: 'HipHop',
			icon: 'material-symbols:home-repair-service-rounded',
			image: 'https://unsplash.com/photos/tiUvFxz4Dj0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmVjb3JkJTIwcGxheWVyfGVufDB8fHx8MTcxMDc3NzAyNHww&force=true&w=640'
		},
		{ name: 'Reggae', icon: 'ph:engine-light', image: 'https://unsplash.com/photos/FZWivbri0Xk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8fHwxNzEwNzA0NDMxfDA&force=true&w=640' },
		//{
		//	name: 'Lubricants',
		//	icon: 'material-symbols:oil-barrel-outline-rounded',
		//	image: 'https://unsplash.com/photos/0rmby-3OTeI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG11c2ljfGVufDB8fHx8MTcxMDcwNDQzMXww&force=true&w=640'
		//},
		//{ name: 'Gearbox Oils', icon: 'ph:gear-six-light', image: 'gearbox-oil.png' },
		{
			name: 'Dancehall',
			icon: 'material-symbols:local-car-wash-outline-rounded',
			image: 'https://unsplash.com/photos/Fw-JHYPwS3U/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzR8fGRqJTIwc2V0fGVufDB8fHx8MTcxMDc2MTU0MXww&force=true&w=640'
		}
	];
</script>

<section class="bg-white">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-4xl font-unbounded font-semibold text-center text-gray-800 uppercase lg:text-3xl ">latest releases</h1>

        <p class="mt-4 text-center text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>


        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">


        {#each releases as release }

            <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style="background-image:url('{release.image}')">
                <div
                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-semibold text-white capitalize">{release.name}</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mixtape</p>
                </div>
            </div>
                <p class="text-gray-900 font-semibold">{release.name} Mixtape</p>
        {/each}

        </div>

    </div>
</section>
