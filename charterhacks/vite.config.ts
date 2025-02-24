import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Allow serving files from the project root
			allow: ['.'],
		},
	},
	build: {
		// Ensure static assets are optimized
		assetsInlineLimit: 0, // Disable inlining small assets (optional)
	},
});