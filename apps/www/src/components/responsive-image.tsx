import type { ImgHTMLAttributes } from "react";
import { responsiveImages } from "../generated/responsive-images";

type ResponsiveImageProps = Omit<
	ImgHTMLAttributes<HTMLImageElement>,
	"alt" | "src"
> & {
	src: string;
	alt: string;
	sizes?: string;
};

function srcSet(variants: { src: string; width: number }[]) {
	return variants.map(({ src, width }) => `${src} ${width}w`).join(", ");
}

export default function ResponsiveImage({
	src,
	alt,
	sizes = "100vw",
	loading = "lazy",
	width,
	height,
	...props
}: ResponsiveImageProps) {
	const metadata = responsiveImages[src];

	if (!metadata) {
		return (
			<img
				{...props}
				src={src}
				alt={alt}
				sizes={sizes}
				loading={loading}
				width={width}
				height={height}
			/>
		);
	}

	return (
		<picture>
			<source type="image/avif" srcSet={srcSet(metadata.avif)} sizes={sizes} />
			<source type="image/webp" srcSet={srcSet(metadata.webp)} sizes={sizes} />
			<img
				{...props}
				src={metadata.fallback.src}
				alt={alt}
				loading={loading}
				width={width ?? metadata.width}
				height={height ?? metadata.height}
			/>
		</picture>
	);
}
