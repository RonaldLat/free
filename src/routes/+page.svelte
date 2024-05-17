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
<a class="text-gray-200 text-center block cursor-pointer underline-offset-4 underline" href="/products">Load more</a>
<AdSection />
