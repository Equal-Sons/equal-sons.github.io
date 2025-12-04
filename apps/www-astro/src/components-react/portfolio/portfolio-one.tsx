import { useEffect } from "react";
import type { IPortfolioDT } from "../../types/portfolio-d-t";
import addGsap from "../../utils/addGsap";
import { useIsotop } from "../../hooks/useIsotop";

const portfolio_data: IPortfolioDT[] = [
	{
		id: 1,
		url: "",
		imageSrc: "/assets/img/portfolio/portfolio1_1.jpg",
		category: ["Branding", "Development", "Marketing"],
		projectTitle: "Money Laundering Compliance Scanner",
		title: "Decentralized Platform",
	},
	{
		id: 2,
		url: "",
		imageSrc: "/assets/img/portfolio/portfolio1_2.jpg",
		category: ["Branding", "Development", "Marketing"],
		projectTitle: "Decentralized Lending Platform for Students",
		title: "App for Business",
	},
	{
		id: 3,
		url: "",
		imageSrc: "/assets/img/portfolio/portfolio1_3.jpg",
		category: ["Branding", "Development", "Marketing"],
		projectTitle: "Anti Money Laundering Compliance Scanner",
		title: "Website Development",
	},
	{
		id: 4,
		url: "",
		imageSrc: "/assets/img/portfolio/portfolio1_4.jpg",
		category: ["Branding", "Development", "Marketing"],
		projectTitle: "Shopify Redesign for a Nova Scotia Winery",
		title: "Nova Scotia Winery",
	},
];
const PortfolioOne = () => {
	const { initIsotop, isotopContainer } = useIsotop();

	useEffect(() => {
		initIsotop();
		addGsap();
	}, [initIsotop]);
	return (
		<div
			className="portfolio-area-1 space-bottom overflow-hidden background-image"
			style={{ backgroundImage: "url(/assets/img/bg/portfolio-1-bg.png)" }}
		>
			<div className="container">
				<div
					className="row  gy-60  justify-content-between masonary-active"
					ref={isotopContainer}
				>
					{portfolio_data.map((elm, i) => (
						<div key={i} className="col-lg-6 filter-item">
							<div className={`portfolio-wrap ${i == 0 ? "mt-lg-140" : ""}`}>
								<div
									className="portfolio-thumb wow img-custom-anim-top animated"
									data-wow-duration="1.5s"
									data-wow-delay="0.2s"
								>
									<a href={`/project-details`}>
										<img src={elm.imageSrc} alt="portfolio" />
									</a>
								</div>
								<div className="portfolio-details">
									<ul className="portfolio-meta">
										{typeof elm.category === "object" &&
											elm.category.map((elm2, i2) => (
												<li key={i2}>
													<a href="#">{elm2}</a>
												</li>
											))}
									</ul>
									<h3 className="portfolio-title">
										<a href={`/project-details`}>
											{elm.projectTitle}
										</a>
									</h3>
									<a href={`/project-details`} className="link-btn">
										<span className="link-effect">
											<span className="effect-1">VIEW PROJECT</span>
											<span className="effect-1">VIEW PROJECT</span>
										</span>
										<img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
									</a>
								</div>
							</div>
						</div>
					))}
					<div className="col-lg-6 filter-item">
						<div className="btn-wrap mt-140">
							<a
								className="circle-btn btn gsap-magnetic mx-lg-5"
								to="/project"
							>
								<span className="link-effect">
									<span className="effect-1">VIEW ALL</span>
									<span className="effect-1">VIEW ALL</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioOne;
