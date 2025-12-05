import { useParams, NavLink, Navigate } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterSeven from "../layout/footer/footer-seven";
import { getServiceBySlug, getRelatedServices } from "../data/services";
import { getCaseStudiesByService } from "../data/case-studies";
import CaseStudyCard from "../components/work/case-study-card";

export default function ServiceDetailsPage() {
	const { pillar, slug } = useParams<{ pillar: string; slug: string }>();

	// Get service data
	const service = slug ? getServiceBySlug(slug) : undefined;

	// If service not found, redirect to 404
	if (!service) {
		return <Navigate to="/not-found" replace />;
	}

	const relatedServices = getRelatedServices(service);
	const relatedCaseStudies = getCaseStudiesByService(service.slug);

	return (
		<Wrapper>
			<SEOCom title={`${service.title} - Equal Sons`} />
			<Header />

			<BreadcrumbOne title={service.title} subtitle={service.tagline} />

			{/* Service Overview */}
			<div className="service-details-area space">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{/* Service Description */}
							<div className="service-details-content">
								<h2 className="sec-title mb-30">{service.title}</h2>
								<p className="mb-40">{service.detailedDescription}</p>

								{/* Key Features */}
								<div className="mb-50">
									<h3 className="h4 mb-3">What We Deliver</h3>
									<div className="row gy-3">
										{service.keyFeatures.map((feature, index) => (
											<div key={index} className="col-md-6">
												<div className="d-flex align-items-start">
													<i className="fas fa-check-circle text-theme me-2 mt-1" />
													<span>{feature}</span>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Process */}
								<div className="mb-50">
									<h3 className="h4 mb-4">Our Process</h3>
									{service.process.map((step) => (
										<div key={step.step} className="mb-4">
											<h4 className="h5 mb-2">
												<span className="text-theme me-2">
													{String(step.step).padStart(2, "0")}.
												</span>
												{step.title}
											</h4>
											<p className="ms-5">{step.description}</p>
										</div>
									))}
								</div>

								{/* Benefits */}
								<div className="mb-50">
									<h3 className="h4 mb-3">Why Work With Us</h3>
									<div className="row gy-3">
										{service.benefits.map((benefit, index) => (
											<div key={index} className="col-md-6">
												<div className="d-flex align-items-start">
													<i className="fas fa-arrow-right text-theme me-2 mt-1" />
													<span>{benefit}</span>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Related Case Studies */}
								{relatedCaseStudies.length > 0 && (
									<div className="mb-50">
										<h3 className="h4 mb-4">Case Studies</h3>
										<div className="row gy-4">
											{relatedCaseStudies.map((study) => (
												<div key={study.id} className="col-md-6">
													<CaseStudyCard study={study} showTags={false} />
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Sidebar */}
						<div className="col-lg-4">
							<aside className="service-sidebar">
								{/* Service Pillar */}
								<div className="widget mb-4">
									<div className="p-4 bg-smoke">
										<h4 className="h5 mb-2">Service Category</h4>
										<p className="mb-3">
											<strong>{service.pillarName}</strong> -{" "}
											{service.pillar === "build"
												? "Product Development"
												: service.pillar === "lead"
													? "Strategic Leadership"
													: "Communication & Sharing"}
										</p>
										<NavLink
											to={`/services/${service.pillar}`}
											className="link-btn"
										>
											<span className="link-effect">
												<span className="effect-1">
													VIEW ALL {service.pillarName}
												</span>
												<span className="effect-1">
													VIEW ALL {service.pillarName}
												</span>
											</span>
											<img
												src="/assets/img/icon/arrow-left-top.svg"
												alt="arrow"
											/>
										</NavLink>
									</div>
								</div>

								{/* CTA */}
								<div className="widget mb-4">
									<div className="p-4 bg-theme text-white">
										<h4 className="h5 mb-3 text-white">Ready to start?</h4>
										<p className="mb-3">
											Let's talk about your project and how we can help.
										</p>
										<NavLink to="/contact" className="btn style-white">
											<span className="link-effect">
												<span className="effect-1">GET IN TOUCH</span>
												<span className="effect-1">GET IN TOUCH</span>
											</span>
										</NavLink>
									</div>
								</div>

								{/* Related Services */}
								{relatedServices.length > 0 && (
									<div className="widget">
										<h4 className="h5 mb-3">Related Services</h4>
										<ul className="list-unstyled">
											{relatedServices.map((related) => (
												<li key={related.id} className="mb-2">
													<NavLink
														to={`/services/${related.pillar}/${related.slug}`}
														className="d-flex align-items-center text-title hover-text-theme"
													>
														<i className="fas fa-chevron-right me-2 small" />
														{related.title}
													</NavLink>
												</li>
											))}
										</ul>
									</div>
								)}
							</aside>
						</div>
					</div>
				</div>
			</div>

			<FooterSeven />
		</Wrapper>
	);
}
