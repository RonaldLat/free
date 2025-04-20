<script>
	import Icon from '@iconify/svelte';

	export let productName;
	export let productId;

	// productImage = 'https://localhost:5173' + productImage;
	productId = 'https://speedynuchoauto.co.ke/products/' + productId;
	console.log('inqiry name:', productName, productId);

	function sendWhatsApp(productName) {
		const phoneNumber = '+254743298722';
		const message = encodeURIComponent(
			`Hello! I'm interested in learning more about the ${productName}. ${('localhost:5173/', productId)}`
		);
		const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
		window.open(whatsappURL, '_blank');
	}
</script>

<button
	on:click={() => sendWhatsApp(productName)}
	class="bg-[#128c7d] rounded-md text-white text-xs text-center flex items-center space-x-1.5 self-center px-2 py-1.5"
>
	<span class="font-seri">Inquire</span>
	<Icon class="text-lg" icon="ic:sharp-whatsapp" />
</button>
