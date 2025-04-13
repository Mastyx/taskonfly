//import adapter from '@sveltejs/adapter-auto';
//
///** @type {import('@sveltejs/kit').Config} */
//const config = {
//	kit: {
//		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
//		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
//		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
//		adapter: adapter()
//	}
//};
//
//export default config;
//
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from 'sveltekit/vite';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/taskonfly',
    },
  },
};

