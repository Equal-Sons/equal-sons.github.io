type IProps = {
	title: string;
	bg?: string;
	icon?: string;
};

export default function BreadcrumbOne({
	title,
	bg = "/assets/img/bg/breadcumb-bg1-6.jpg",
	icon = "/assets/img/icon/feature-icon1-1.svg",
}: IProps) {
	return (
		<div
			className="breadcumb-wrapper"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="container">
				<div className="breadcumb-content flex justify-center">
					<img className="breadcumb-icon" src={icon} alt={title} />
					<h1 className="breadcumb-title">{title}</h1>
				</div>
			</div>
		</div>
	);
}
