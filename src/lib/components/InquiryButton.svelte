<script>
	export let productName;
	export let productImage;

	// productImage = 'https://localhost:5173' + productImage;
	productImage = 'https://speedynuchoauto.co.ke' + productImage;
	console.log('inqiry name:', productName, productImage);

	function sendWhatsApp(productName) {
		const phoneNumber = '+254712973489';
		const message = encodeURIComponent(
			`Hello! I'm interested in learning more about the ${productName}. ${('localhost:5173/', productImage)}`
		);
		const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
		window.open(whatsappURL, '_blank');
	}
</script>

<button
	on:click={() => sendWhatsApp(productName)}
	class="bg-[#25d366] rounded-md text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
	><i class="fab fa-facebook mr-1"></i> Inquire</button
>
