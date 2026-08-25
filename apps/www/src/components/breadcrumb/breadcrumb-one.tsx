import type { CSSProperties } from "react";
import ResponsiveImage, { type ImageSource } from "../responsive-image";

type IProps = {
	title: string;
	subtitle?: string;
	bg?: ImageSource;
	icon?: string;
	imagePosition?: CSSProperties["objectPosition"];
};

export default function BreadcrumbOne({
	title,
	subtitle,
	icon,
	bg = "/assets/img/bg/breadcrumb-bg1-6.jpg",
	imagePosition = "center center",
}: IProps) {
	return (
		<div className="breadcrumb-wrapper">
			<ResponsiveImage
				image={bg}
				alt=""
				aria-hidden="true"
				className="breadcrumb-background"
				style={{ objectPosition: imagePosition }}
				sizes="100vw"
				loading="eager"
			/>
			<div className="container">
				<div className="breadcrumb-content flex justify-center">
					{icon && <img className="breadcrumb-icon" src={icon} alt={title} />}
					<h1 className="breadcrumb-title">{title}</h1>
				</div>
				{subtitle && <p className="breadcrumb-subtitle">{subtitle}</p>}
			</div>
		</div>
	);
}
