import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
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
