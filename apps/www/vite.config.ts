import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({
			// Responsive variants are generated manually and committed. Avoid
			// reprocessing them and the oversized originals removed after build.
			exclude: /assets[\\/](?:generated|img[\\/](?:service|work))[\\/]/,
			includePublic: true,
			cache: true,
			cacheLocation: "node_modules/.cache/vite-plugin-image-optimizer",
			logStats: false,
			ansiColors: false,
			test: /\.(jpe?g|png|webp|avif)$/i,
			png: {
				compressionLevel: 9,
				palette: true,
				quality: 85,
			},
			jpeg: {
				progressive: true,
				quality: 78,
			},
			jpg: {
				progressive: true,
				quality: 78,
			},
			webp: {
				effort: 4,
				quality: 78,
			},
			avif: {
				effort: 4,
				quality: 60,
			},
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				// https://github.com/twbs/bootstrap/issues/40962
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
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id: string) => {
					if (id.includes("node_modules")) {
						return "vendor";
					}

					return null;
				},
			},
		},
	},
});
