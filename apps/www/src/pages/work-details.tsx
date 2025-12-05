import { useParams, NavLink, Navigate } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterSeven from "../layout/footer/footer-seven";
import {
	getCaseStudyBySlug,
	getRelatedCaseStudies,
} from "../data/case-studies";
import { getServiceBySlug } from "../data/services";
import CaseStudyCard from "../components/work/case-study-card";

export default function WorkDetailsPage() {
	const { slug } = useParams<{ slug: string }>();

	// Get case study data
	const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

	// If case study not found, redirect to 404
	if (!caseStudy) {
		return <Navigate to="/not-found" replace />;
	}

	const relatedCaseStudies = getRelatedCaseStudies(caseStudy);

	// Get related services for linking
	const relatedServices = caseStudy.serviceTags
		.map((tag) => getServiceBySlug(tag))
		.filter((service) => service !== undefined);

	return (
		<Wrapper>
			<SEOCom title={`${caseStudy.title} - Equal Sons`} />
			<Header />

			<BreadcrumbOne title={caseStudy.title} subtitle={caseStudy.client} />

			{/* Case Study Content */}
			<div className="project-details-area space">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{/* Overview */}
							<div className="project-details-content mb-50">
								<div className="mb-4">
									<span className="badge bg-theme text-white me-2">
										{caseStudy.pillar.toUpperCase()}
									</span>
									{caseStudy.serviceTags.map((tag, index) => (
										<span key={index} className="badge bg-smoke me-2">
											{tag}
										</span>
									))}
								</div>
								<h2 className="sec-title mb-30">{caseStudy.title}</h2>
								<p className="mb-40">{caseStudy.shortDescription}</p>
							</div>

							{/* The Challenge */}
							<div className="mb-50">
								<h3 className="h4 mb-3">The Challenge</h3>
								<p>{caseStudy.challenge}</p>
							</div>

							{/* Our Solution */}
							<div className="mb-50">
								<h3 className="h4 mb-3">Our Solution</h3>
								<p>{caseStudy.solution}</p>
							</div>

							{/* Results */}
							{caseStudy.results && (
								<div className="mb-50">
									<h3 className="h4 mb-3">The Results</h3>
									<p>{caseStudy.results}</p>
								</div>
							)}

							{/* Testimonial */}
							{caseStudy.testimonial && (
								<div className="mb-50">
									<div className="p-4 bg-smoke">
										<blockquote className="mb-0 flex-column">
											<p
												className="mb-3"
												style={{ fontSize: "1.1rem", fontStyle: "italic" }}
											>
												"{caseStudy.testimonial.quote}"
											</p>
											<footer className="blockquote-footer">
												<strong>{caseStudy.testimonial.author}</strong>
												<br />
												{caseStudy.testimonial.title}
											</footer>
										</blockquote>
									</div>
								</div>
							)}

							{/* Related Services */}
							{relatedServices.length > 0 && (
								<div className="mb-50">
									<h3 className="h4 mb-4">Services Used</h3>
									<div className="row gy-3">
										{relatedServices.map((service) => (
											<div key={service.id} className="col-md-6">
												<NavLink
													to={`/services/${service.pillar}/${service.slug}`}
													className="d-flex align-items-center p-3 bg-smoke hover-bg-theme hover-text-white"
													style={{
														textDecoration: "none",
														transition: "all 0.3s",
													}}
												>
													<i className="fas fa-arrow-right me-3" />
													<div>
														<div className="fw-bold">{service.title}</div>
														<div className="small">
															{service.briefDescription}
														</div>
													</div>
												</NavLink>
											</div>
										))}
									</div>
								</div>
							)}
						</div>

						{/* Sidebar */}
						<div className="col-lg-4">
							<aside className="project-sidebar">
								{/* Project Info */}
								<div className="widget mb-4">
									<div className="p-4 bg-smoke">
										<h4 className="h5 mb-3">Project Info</h4>
										<div className="mb-3">
											<strong>Client:</strong>
											<div>{caseStudy.client}</div>
										</div>
										<div className="mb-3">
											<strong>Category:</strong>
											<div className="text-capitalize">{caseStudy.pillar}</div>
										</div>
										<div>
											<strong>Services:</strong>
											<div>
												{caseStudy.serviceTags.map((tag, index) => (
													<span key={index}>
														{tag}
														{index < caseStudy.serviceTags.length - 1
															? ", "
															: ""}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* CTA */}
								<div className="widget mb-4">
									<div className="p-4 bg-theme text-white">
										<h4 className="h5 mb-3">Have a similar challenge?</h4>
										<p className="mb-3">
											Let's talk about how we can help you achieve results like
											these.
										</p>
										<NavLink to="/contact" className="btn style-white">
											<span className="link-effect">
												<span className="effect-1">GET IN TOUCH</span>
												<span className="effect-1">GET IN TOUCH</span>
											</span>
										</NavLink>
									</div>
								</div>

								{/* Related Case Studies */}
								{relatedCaseStudies.length > 0 && (
									<div className="widget">
										<h4 className="h5 mb-3">Related Work</h4>
										<div className="d-flex flex-column gap-3">
											{relatedCaseStudies.map((related) => (
												<NavLink
													key={related.id}
													to={`/work/${related.slug}`}
													className="d-block p-3 bg-smoke hover-bg-theme hover-text-white"
													style={{
														textDecoration: "none",
														transition: "all 0.3s",
													}}
												>
													<div className="small mb-1">
														<span className="badge bg-white text-dark">
															{related.pillar.toUpperCase()}
														</span>
													</div>
													<div className="fw-bold mb-1">{related.title}</div>
													<div className="small">{related.client}</div>
												</NavLink>
											))}
										</div>
									</div>
								)}
							</aside>
						</div>
					</div>
				</div>
			</div>

			{/* View All Work CTA */}
			<div className="cta-area-1 overflow-hidden bg-smoke space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">View More of Our Work</h2>
								<p className="sec-text mt-30 mb-40">
									Explore more case studies to see how we've helped businesses
									like yours.
								</p>
								<div className="btn-group justify-content-center">
									<NavLink to="/work" className="btn mt-0">
										<span className="link-effect">
											<span className="effect-1">VIEW ALL WORK</span>
											<span className="effect-1">VIEW ALL WORK</span>
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
