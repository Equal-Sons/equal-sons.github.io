/// <reference types="vite/client" />
/// <reference path="../../www-form-api/worker-configuration.d.ts" />

declare module "*?responsive" {
	import type { ResponsiveImageSource } from "./components/responsive-image";

	const image: ResponsiveImageSource;
	export default image;
}
