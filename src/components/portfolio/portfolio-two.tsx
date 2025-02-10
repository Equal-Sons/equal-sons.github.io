import Slider, { Settings } from "react-slick";
import { IPortfolioDT } from "../../types/portfolio-d-t";

const portfolio_data: IPortfolioDT[] = [
	{
		id: 1,
		imageSrc: "/assets/img/portfolio/portfolio2_1.jpg",
		category: "Branding",
		title: "Decentralized Platform",
	},
	{
		id: 2,
		imageSrc: "/assets/img/portfolio/portfolio2_2.jpg",
		category: "Branding",
		title: "Decentralized Platform",
	},
	{
		id: 3,
		imageSrc: "/assets/img/portfolio/portfolio2_3.jpg",
		category: "Branding",
		title: "Decentralized Platform",
	},
	{
		id: 4,
		imageSrc: "/assets/img/portfolio/portfolio2_1.jpg",
		category: "Branding",
		title: "Decentralized Platform",
	},
	{
		id: 5,
		imageSrc: "/assets/img/portfolio/portfolio2_2.jpg",
		category: "Branding",
		title: "Decentralized Platform",
	},
	{
		id: 6,
		imageSrc: "/assets/img/portfolio/portfolio2_3.jpg",
		category: "Branding",
		title: "Decentralized Platform",
	},
];

type IProps = {
	hideTitle?: boolean;
};
export default function PortfolioTwo({ hideTitle = false }: IProps) {
	const sliderSettings: Settings = {
		slidesToShow: 1,
		dots: true,
		arrows: false,
		centerMode: true,
		centerPadding: "600px",
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					centerMode: true,
					centerPadding: "300px", // Adjust for extra-large screens
				},
			},
			{
				breakpoint: 1600,
				settings: {
					centerMode: true,
					centerPadding: "200px", // Adjust for extra-large screens
				},
			},
			{
				breakpoint: 1200,
				settings: {
					centerMode: true,
					centerPadding: "150px", // Adjust for large screens
				},
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: "0px", // Adjust for medium screens
				},
			},
			{
				breakpoint: 576,
				settings: {
					centerMode: true,
					centerPadding: "0px", // Adjust for small screens
				},
			},
		],
	};
	return (
		<div className="portfolio-area-1 space overflow-hidden">
			{!hideTitle && (
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-7 col-lg-9">
							<div className="title-area text-center">
								<h2 className="sec-title">Discover Our Selected Projects</h2>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="container-fluid p-0">
				<Slider
					className="row global-carousel gx-60 portfolio-slider"
					{...sliderSettings}
				>
					{portfolio_data.map((item) => (
						<div key={item.id} className="col-lg-4 sliderItem">
							<a href={`/project-details`} className="portfolio-wrap style2">
								<div className="portfolio-thumb">
									<img src={item.imageSrc} alt="portfolio" />
								</div>
								<div className="portfolio-details">
									<ul className="portfolio-meta">
										<li>{item.category}</li>
									</ul>
									<h3 className="portfolio-title">{item.title}</h3>
								</div>
							</a>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
