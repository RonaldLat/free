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

<div class="bg-black text-gray-300 py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Location</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
				Our Store
			</p>
			<p class="mt-4 max-w-2xl  text-gray-300 lg:mx-auto">Welcome to our auto spare parts website! We're dedicated to providing you with the highest quality auto parts at competitive prices. <br> We're committed to helping you find the right parts for your vehicle.</p>
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
						<dt class="text-lg leading-6 font-medium font-semibold text-gray-300">Address</dt>
						<dd class="mt-2 text-base text-gray-300">
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
						<dt class="text-lg leading-6 font-medium font-semibold text-gray-300">Phone</dt>
						<dd class="mt-2 text-base text-gray-300">
							<a href="tel:{details.phone_1}">{details.phone_1}</a> <br />
              <a href="tel:{details.phone_2}">
							{details.phone_2}
              </a>
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
						<dt class="text-lg leading-6 font-medium font-semibold text-gray-300">Email</dt>
						<dd class="mt-2 text-base text-gray-300">
              <a href="mailto:{details.email}">
							{details.email}
              </a>
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
						<dt class="text-lg leading-6 font-medium font-semibold text-gray-300">Store Hours</dt>
						<dd class="mt-2 text-base text-gray-300">
							Monday - Saturday: 7am to 6pm<br />
							Saturday: 10am to 6pm<br />
						</dd>
					</div>
				</div>
			</dl>
		</div>
	</div>
</div>

<footer class="bg-black text-gray-100 px-5">
	<p class="text-sm text-gray-100 py-3  ">
		&copy {new Date().getFullYear()} Speedy Nucho Auto Spares. All Rights Reserved.
	</p>
  <ul class="text-red-400 flex gap-4">
  <li><a href="/">Home</a></li>
  <li><a href="/products">Products</a></li>
  </ul>
</footer>
