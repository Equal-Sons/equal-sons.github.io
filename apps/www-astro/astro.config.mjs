// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					// Silence Bootstrap SCSS deprecation warnings
					silenceDeprecations: [
						"mixed-decls",
						"color-functions",
						"global-builtin",
						"import",
						"legacy-js-api",
					],
				},
			},
		},
	},
});
