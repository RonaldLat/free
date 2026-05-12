<script>
	import AdSection from '$lib/components/AdSection.svelte';
	import Card from '$lib/components/Card.svelte';
	import DealersIn from '$lib/components/DealersIn.svelte';
	import Featured from '$lib/components/Featured.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GoogleTestimonials from '$lib/components/GoogleTestimonials.svelte';
	import Header from '$lib/components/Header.svelte';
	import Map from '$lib/components/Map.svelte';
	import Partners from '$lib/components/Partners.svelte';
	
	// Import the updated Chat widget
	import Chat from '$lib/components/Chat.svelte';

	export let data;
</script>

<Header />
<DealersIn />
<Featured {data} />
<AdSection />
<GoogleTestimonials />
<Partners />
<Map />

<Chat />
