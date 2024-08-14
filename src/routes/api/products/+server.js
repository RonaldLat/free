import productData from '$lib/data/productData.js'; // Adjust the path as needed

import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	let products;
	console.log(url.searchParams.get('limit'));
	const limit = url.searchParams.get('limit');
	const id = url.searchParams.get('id');
	const ids = url.searchParams.get('ids');
	const category = url.searchParams.get('category');

	if (id) {
		const product = productData.find((product) => product.id === id);
		if (product) {
			return json(product);
		} else {
			return {
				status: 404,
				body: { message: 'Product not found' }
			};
		}
	}
	if (category) {
		const products = productData.filter((product) => product.category === category);
		if (products) {
			return json(products);
		} else {
			return {
				status: 404,
				body: { message: 'Product not found' }
			};
		}
	}


	if (limit) {
		const numberOfProducts = parseInt(limit, 10);
		products = productData.slice(0, numberOfProducts);
	} else {
		products = productData;
	};

  if (ids){
    // Convert the ids string to an array of numbers
		const idArray = ids.split(',').map(id => id.trim());
    console.log('idsArray',idArray)
    const selectedProducts = productData.filter((product) => idArray.includes(product.id));
    console.log('selected', selectedProducts)
    return json(selectedProducts)
  }else{
    return {
      status: 404,
      body: { message: 'Product not found' }
    };
  } 

	return json(products);
}
