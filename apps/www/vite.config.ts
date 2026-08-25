import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		imagetools({
			cache: {
				enabled: true,
				dir: "node_modules/.cache/imagetools",
			},
			defaultDirectives: (url) => {
				if (!url.searchParams.has("responsive")) {
					return new URLSearchParams();
				}

				const fallbackFormat = url.pathname.endsWith(".png") ? "png" : "jpg";

				return new URLSearchParams({
					w: "480;960;1440;1920",
					format: `avif;webp;${fallbackFormat}`,
					quality: "75",
					effort: "2",
					as: "picture",
				});
			},
		}),
		ViteImageOptimizer({
			// Imagetools owns imported assets. This plugin only optimizes files
			// copied from public/, avoiding a second pass over responsive variants.
			exclude: /^assets[\\/](?!img[\\/])/,
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
