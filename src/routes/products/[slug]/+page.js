export async function load({ params, fetch }) {
	const res = await fetch(`/api/products?id=${params.slug}`);
	const product = await res.json();
	console.log('product', product);
	return {
		slug: params.slug,
		product
	};
}

