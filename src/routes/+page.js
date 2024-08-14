export async function load({ fetch }) {
	// const res = await fetch('/api/products?limit=3');
	const res = await fetch('/api/products?ids=8,15,7');
	const products = await res.json();
	console.log('productsId', products);
	return {
		products
	};
}
