/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const response = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
			prompt: `Generate an digital wishing card for Happy Easter, where a cute bunny is holding a basket of colorful eggs,with a beautiful spring background and flowers.and the text "Happy Easter" in a playful font.`,
		});
		return new Response(response, {
			headers: {
				'content-type': 'image/jpg',
			},
		});
	},
};
