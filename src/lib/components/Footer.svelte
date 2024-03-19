<script>
	import Icon from '@iconify/svelte';

	let details = {
		address_1: 'Bilhams Plaza',
		address_2: 'Lower Kirinyaga Road',
		phone_1: '0716 885166',
		phone_2: '0743 298722 ',
		email: 'nemmnuchoauto1@gmail.com',
    logo: ''
	};
</script>

<footer class="bg-black max-w-5xl w-full mx-auto">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
            <img class="w-auto h-10 " src="dj/logo-white.png" alt="">
        </a>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Home
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Bookings
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                About
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Contact
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Privacy
            </a>
        </div>

        <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2024 Dj Stainer77. </p>
    </div>
</footer>
