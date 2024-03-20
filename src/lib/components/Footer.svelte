<script>
	import Icon from '@iconify/svelte';

	let details = {
		address_1: 'Bilhams Plaza',
		address_2: 'Lower Kirinyaga Road',
		phone_1: '0716 885166',
		phone_2: '0743 298722 ',
		email: 'nemmnuchoauto1@gmail.com'
	};
</script>

<div class="bg-gray-100 py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Location</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-4xl">
				Our Store
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum
				cupiditate veritatis in, accusamus quisquam.
			</p>
		</div>

		<div class="mt-10">
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				<div class="flex">
					<div class="flex-shrink-0">
						<div
							class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
						>
							<!-- Heroicon name: globe-alt -->
							<Icon icon="material-symbols:location-on" class="text-3xl" />
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg leading-6 font-medium text-gray-900">Address</dt>
						<dd class="mt-2 text-base text-gray-500">
							{details.address_1}<br />
							{details.address_2}
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div
							class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
						>
							<!-- Heroicon name: phone -->
							<Icon icon="material-symbols:phone-enabled-sharp" class="text-3xl" />
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg leading-6 font-medium text-gray-900">Phone</dt>
						<dd class="mt-2 text-base text-gray-500">
							{details.phone_1} <br />
							{details.phone_2}
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div
							class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
						>
							<!-- Heroicon name: mail -->
							<Icon icon="material-symbols:stacked-email-rounded" class="text-3xl" />
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg leading-6 font-medium text-gray-900">Email</dt>
						<dd class="mt-2 text-base text-gray-500">
							{details.email}
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div
							class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
						>
							<!-- Heroicon name: clock -->
							<Icon icon="material-symbols:nest-clock-farsight-analog" class="text-3xl" />
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg leading-6 font-medium text-gray-900">Store Hours</dt>
						<dd class="mt-2 text-base text-gray-500">
							Monday - Friday: 9am to 8pm<br />
							Saturday: 10am to 6pm<br />
							Sunday: 12pm to 4pm
						</dd>
					</div>
				</div>
			</dl>
		</div>
	</div>
</div>

<footer>
	<p class="text-sm text-gray-100 py-3 pl-5">
		&copy {new Date().getFullYear()} Speedy Nucho Auto Spares. All Rights Reserved.
	</p>
</footer>
