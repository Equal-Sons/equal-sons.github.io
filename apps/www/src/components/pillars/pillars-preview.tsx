import { NavLink } from "react-router-dom";

const pillarData = [
	{
		id: 1,
		title: "BUILD",
		tagline: "You have the idea. We have the expertise.",
		description:
			"Web and app development, MVPs, integrations. We make the technology that brings your vision to life.",
		link: "/services/build",
		iconSrc: "/assets/img/icon/feature-icon1-2.svg",
	},
	{
		id: 2,
		title: "LEAD",
		tagline: "Knowing where you're going changes how you get there.",
		description:
			"Technology strategy, marketing strategy, positioning. We chart the course and provide the clarity you need to move forward.",
		link: "/services/lead",
		iconSrc: "/assets/img/icon/feature-icon1-4.svg",
	},
	{
		id: 3,
		title: "SHARE",
		tagline: "What you know is valuable. How you share it sets you apart.",
		description:
			"Facilitation, speaking, workshops. We amplify the message and help you lead out loud.",
		link: "/services/share",
		iconSrc: "/assets/img/icon/feature-icon1-1.svg",
	},
];

const PillarsPreview = () => {
	return (
		<div className="feature-area-1 space">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-lg-10">
						<div className="title-area text-center">
							<h2 className="sec-title">Three capabilities. One team.</h2>
							<p className="sec-text">
								Whether you need a product built, a strategy defined, or a
								message delivered—we work alongside you to make it happen.
							</p>
						</div>
					</div>
				</div>
				<div className="row gy-4 align-items-stretch justify-content-center">
					{pillarData.map((pillar, i) => (
						<div key={i} className="col-lg-4 col-md-6">
							<div className="feature-card h-100">
								<div className="feature-card-icon">
									<img src={pillar.iconSrc} alt={`${pillar.title} icon`} />
								</div>
								<h3 className="feature-card-title">
									<NavLink to={pillar.link}>{pillar.title}</NavLink>
								</h3>
								<p
									className="feature-card-tagline"
									style={{ fontStyle: "italic", marginBottom: "1rem" }}
								>
									{pillar.tagline}
								</p>
								<p className="feature-card-text">{pillar.description}</p>
								<NavLink to={pillar.link} className="link-btn">
									<span className="link-effect">
										<span className="effect-1">EXPLORE {pillar.title}</span>
										<span className="effect-1">EXPLORE {pillar.title}</span>
									</span>
									<img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
								</NavLink>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PillarsPreview;
