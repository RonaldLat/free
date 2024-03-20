import productData from '$lib/data/productData.js'; // Adjust the path as needed

import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET(event) {
  console.log(productData)
	return (json(productData));
}
