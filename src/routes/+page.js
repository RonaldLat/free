export async function load({ fetch }) {
	const res = await fetch('/api/products?limit=3');
	const products = await res.json();
	console.log('products', products);
	return {
		products
	};
}
