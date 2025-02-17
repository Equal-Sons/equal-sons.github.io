import { Helmet } from "react-helmet-async";

// prop type
type IProps = {
	title?: string;
};
const SEOCom = ({ title }: IProps) => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>
				{title
					? `${title} - Equal Sons`
					: "Equal Sons - Product and Story Development"}
			</title>
			<meta
				name="description"
				content="Equal Sons - Product and Story Development"
			/>
			<meta
				name="keywords"
				content="Equal Sons - Product and Story Development"
			/>
			<meta name="robots" content="INDEX,FOLLOW" />
		</Helmet>
	);
};

export default SEOCom;
