type IProps = {
	title: string;
	subtitle?: string;
	bg?: string;
	icon?: string;
};

export default function BreadcrumbOne({
	title,
	subtitle,
	icon,
	bg = "/assets/img/bg/breadcumb-bg1-6.jpg",
}: IProps) {
	return (
		<div
			className="breadcumb-wrapper"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundPosition: "center center",
			}}
		>
			<div className="container">
				<div className="breadcumb-content flex justify-center">
					{icon && <img className="breadcumb-icon" src={icon} alt={title} />}
					<h1 className="breadcumb-title">{title}</h1>
				</div>
				{subtitle && <p className="breadcumb-subtitle">{subtitle}</p>}
			</div>
		</div>
	);
}
