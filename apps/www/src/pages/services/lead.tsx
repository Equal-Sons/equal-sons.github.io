import { NavLink } from "react-router-dom";
import Wrapper from "../../layout/wrapper";
import SEOCom from "../../components/seo";
import Header from "../../layout/headers/header";
import BreadcrumbOne from "../../components/breadcrumb/breadcrumb-one";
import FooterSeven from "../../layout/footer/footer-seven";
import { getServicesByPillar, PILLAR_INFO } from "../../data/services";

export default function LeadPillarPage() {
	const leadServices = getServicesByPillar("lead");
	const pillarInfo = PILLAR_INFO.lead;

	return (
		<Wrapper>
			<SEOCom title="LEAD - Equal Sons" />
			<Header />

			<BreadcrumbOne
				title={pillarInfo.name}
				subtitle={pillarInfo.tagline}
				bg="/assets/img/service/lead.jpg"
			/>

			{/* Pillar Overview */}
			<div className="space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-50">
								<h2 className="sec-title">
									Direction matters as much as motion.
								</h2>
								<p className="sec-text mt-30">{pillarInfo.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Services Grid */}
			<div className="service-area-1 space-bottom">
				<div className="container">
					<div className="row gy-4 justify-content-center">
						{leadServices.map((service) => (
							<div key={service.id} className="col-lg-6">
								<div className="feature-card h-100">
									<div className="feature-card-icon">
										<img
											src="/assets/img/icon/feature-icon1-4.svg"
											alt={service.title}
										/>
									</div>
									<h3 className="feature-card-title">
										<NavLink to={`/services/lead/${service.slug}`}>
											{service.title}
										</NavLink>
									</h3>
									<p className="feature-card-text">
										{service.briefDescription}
									</p>
									<NavLink
										to={`/services/lead/${service.slug}`}
										className="link-btn"
									>
										<span className="link-effect">
											<span className="effect-1">LEARN MORE</span>
											<span className="effect-1">LEARN MORE</span>
										</span>
										<img
											src="/assets/img/icon/arrow-left-top.svg"
											alt="arrow"
										/>
									</NavLink>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="cta-area-1 overflow-hidden bg-smoke space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">Ready to chart your course?</h2>
								<p className="sec-text mt-30 mb-40">
									Let's talk about where you're headed and how we can help you
									get there with clarity and confidence.
								</p>
								<div className="btn-group justify-content-center">
									<NavLink to="/contact" className="btn mt-0">
										<span className="link-effect">
											<span className="effect-1">LET'S TALK</span>
											<span className="effect-1">LET'S TALK</span>
										</span>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FooterSeven />
		</Wrapper>
	);
}
