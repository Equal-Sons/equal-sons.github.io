import { useEffect } from "react";
import type { IPortfolioDT } from "../../types/portfolio-d-t";
import addGsap from "../../utils/addGsap";
import { useIsotop } from "../../hooks/useIsotop";

const portfolio_data: IPortfolioDT[] = [
	{
		id: 1,
		imageSrc: "/assets/img/portfolio/shipping.jpg",
		category: ["Tech Services", "Fractional CTO Support"],
		projectTitle: "Streamlining Customer Deliveries",
		// title: "Decentralized Platform",
		url: "",
	},
	{
		id: 2,
		imageSrc: "/assets/img/portfolio/medical-research.jpg",
		category: ["Tech Services", "Enterprise SaaS Development"],
		projectTitle: "Unlocking Medical University Innovation",
		// title: "App for Business",
		url: "",
	},
	{
		id: 3,
		imageSrc: "/assets/img/portfolio/cryptocurrency.jpg",
		category: ["Tech Services", "Startup MVP Development"],
		projectTitle: "Simulating Cryptocurrency Trading Platform",
		// title: "Website Development",
		url: "",
	},
];
const PortfolioOne = () => {
	const { initIsotop, isotopContainer } = useIsotop();

	useEffect(() => {
		initIsotop();
		addGsap();
	}, [initIsotop]);
	return (
		<div className="portfolio-area-1 space-bottom overflow-hidden background-image">
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
									<a href={elm.url}>
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
										<a href={elm.url}>{elm.projectTitle}</a>
									</h3>
									<a href={elm.url} className="link-btn">
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
							<a className="circle-btn btn mx-lg-5" href="/portfolio">
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
