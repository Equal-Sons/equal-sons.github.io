import { Helmet } from "react-helmet-async";
import type { ImageSource } from "./responsive-image";

type IProps = {
	title?: string;
	description?: string;
	image?: ImageSource;
	path?: string;
	type?: "website" | "article";
};

const SITE_URL = "https://equalsons.com";
const DEFAULT_DESCRIPTION = "Equal Sons - Build. Lead. Share.";
const DEFAULT_IMAGE = "/assets/img/es-og.jpg";

function absoluteUrl(path: string) {
	return new URL(path, SITE_URL).toString();
}

const SEOCom = ({
	title,
	description = DEFAULT_DESCRIPTION,
	image,
	path = "/",
	type = "website",
}: IProps) => {
	const pageTitle = title
		? `${title} - Equal Sons`
		: "Equal Sons - Product and Story Development";
	const imageUrl = absoluteUrl(
		typeof image === "string" ? image : (image?.img.src ?? DEFAULT_IMAGE),
	);
	const pageUrl = absoluteUrl(path);

	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{pageTitle}</title>
			<meta name="description" content={description} />
			<meta
				name="keywords"
				content="Equal Sons - Product and Story Development"
			/>
			<meta name="robots" content="INDEX,FOLLOW" />
			<link rel="canonical" href={pageUrl} />

			<meta property="og:type" content={type} />
			<meta property="og:url" content={pageUrl} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={pageUrl} />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
		</Helmet>
	);
};

export default SEOCom;
