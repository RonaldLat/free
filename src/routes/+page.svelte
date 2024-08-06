<script>
	import AdSection from '$lib/components/AdSection.svelte';
	import Card from '$lib/components/Card.svelte';
	import DealersIn from '$lib/components/DealersIn.svelte';
	import Featured from '$lib/components/Featured.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

  export let data;

</script>

<Header />
<DealersIn />
<Featured {data}/>
<AdSection />
