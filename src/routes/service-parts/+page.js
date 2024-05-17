export async function load({ params, fetch }) {
	const res = await fetch('/api/products?category=service-parts');
	const products = await res.json();
	console.log('products', products);
	return {
		slug: params.slug,
		products
	};
}


