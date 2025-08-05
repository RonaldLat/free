import productData from '$lib/data/productData.js';
import { json, error } from '@sveltejs/kit'; // Import the 'error' helper

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const limit = url.searchParams.get('limit');
	const id = url.searchParams.get('id');
	const ids = url.searchParams.get('ids');
	const category = url.searchParams.get('category');

	if (id) {
		const product = productData.find((product) => product.id === id);
		if (product) {
			return json(product);
		} else {
			// Use the SvelteKit 'error' helper for 404
			throw error(404, 'Product not found');
		}
	}

	if (category) {
		const products = productData.filter((product) => product.category === category);
		if (products) {
			return json(products);
		} else {
			// Use the SvelteKit 'error' helper for 404
			throw error(404, 'Product not found');
		}
	}

	if (ids) {
		const idArray = ids.split(',').map((id) => id.trim());
		const selectedProducts = productData.filter((product) => idArray.includes(product.id));

		// This handles the case where no products are found for the given IDs
		if (selectedProducts.length > 0) {
			return json(selectedProducts);
		} else {
			throw error(404, 'Products not found for the given IDs');
		}
	}

	if (limit) {
		const numberOfProducts = parseInt(limit, 10);
		const products = productData.slice(0, numberOfProducts);
		return json(products);
	}

	// Default case: no parameters provided, return all products
	return json(productData);
}
