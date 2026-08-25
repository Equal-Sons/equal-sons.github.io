import type { ImgHTMLAttributes } from "react";

export interface ResponsiveImageSource {
	sources: Record<string, string>;
	img: {
		src: string;
		w: number;
		h: number;
	};
}

export type ImageSource = string | ResponsiveImageSource;

type ResponsiveImageProps = Omit<
	ImgHTMLAttributes<HTMLImageElement>,
	"alt" | "src"
> & {
	image: ImageSource;
	alt: string;
	sizes?: string;
};

export default function ResponsiveImage({
	image,
	alt,
	sizes = "100vw",
	loading = "lazy",
	width,
	height,
	...props
}: ResponsiveImageProps) {
	if (typeof image === "string") {
		return (
			<picture>
				<img
					{...props}
					src={image}
					alt={alt}
					sizes={sizes}
					loading={loading}
					width={width}
					height={height}
				/>
			</picture>
		);
	}

	return (
		<picture>
			{Object.entries(image.sources).map(([format, srcSet]) => (
				<source
					key={format}
					type={`image/${format}`}
					srcSet={srcSet}
					sizes={sizes}
				/>
			))}
			<img
				{...props}
				src={image.img.src}
				alt={alt}
				loading={loading}
				width={width ?? image.img.w}
				height={height ?? image.img.h}
			/>
		</picture>
	);
}
