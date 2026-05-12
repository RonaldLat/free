import { json } from '@sveltejs/kit';
import { GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEY } from '$env/static/private';
import productData from '$lib/data/productData.js';
// Import our operational rules
import { businessPolicy } from '$lib/data/businessConfig.js';

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const { message } = await request.json();

		if (!message) {
			return json({ error: 'Message is required' }, { status: 400 });
		}

		// Calculate Nairobi local time dynamically
		const now = new Date();
		const options = {
			timeZone: 'Africa/Nairobi',
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		const currentNairobiTime = now.toLocaleString('en-US', options);

		// Format our dynamic inventory listing
		const inventoryText = productData
			.map((product) => {
				return `- **Product**: ${product.name.toUpperCase()}
  **Category**: ${product.category || 'general'}
  **Link**: https://speedynuchoauto.co.ke/products/${product.id}
  **Details**: ${product.description.trim()}\n`;
			})
			.join('\n');

		const hyperAccurateInstructions = `
You are an expert, direct, and welcoming customer support assistant for Speedynucho Auto (speedynuchoauto.co.ke), an automotive garage and spare parts store in Nairobi, Kenya.

TIMING & CONTEXT:
- Today's Date and Day: ${currentNairobiTime}. (Use this to answer questions like "are you open tomorrow" exactly).

BUSINESS OPERATIONS & SCENARIOS:
1. Delivery Operations: ${businessPolicy.delivery}
2. Parts Authenticity: ${businessPolicy.authenticity}
3. Parts Compatibility matching: ${businessPolicy.compatibilityTip}
4. Garage Services & Workshop Labor: ${businessPolicy.workshopServices}
5. Symptom/Diagnostic Guide: ${businessPolicy.symptomMappers}

OUR SPARE PARTS CATALOG:
${inventoryText}

STRICT RESPONSE FORMATTING RULES:
1. **No Corporate Fluff**: Do not say "Thank you for inquiring" or "As a valued customer". Speak exactly like an experienced mechanical workshop service advisor—helpful, direct, and clear.
2. **Markdown Links**: When sharing a link from our catalog, use clean markdown format: [Product Name](URL). Never output naked URLs or broken punctuation text.
3. **Markdown Bold**: Use clean double asterisks **like this** to emphasize key headers, part names, or instructions. Never use triple asterisks.
4. **Handling Prices**: Our prices are currently unlisted because costs depend on the car's exact chassis specification. Explain this transparently, offer the product link, and prompt them to send a photo of their logbook/chassis via WhatsApp for an immediate quote.
5. **Call to Action**: Keep answers concise and always encourage them to either click the link, visit our Nairobi garage, or jump to WhatsApp for quick scheduling.
`;

		const response = await ai.models.generateContent({
			model: 'gemini-2.5-flash',
			contents: [
				{
					role: 'user',
					parts: [{ text: `${hyperAccurateInstructions}\n\nUser Question: ${message}` }]
				}
			]
		});

		return json({ reply: response.text });
	} catch (error) {
		console.error('Gemini API Error:', error);
		return json({ error: 'Something went wrong processing your request.' }, { status: 500 });
	}
}
