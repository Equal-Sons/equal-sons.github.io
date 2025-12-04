import { useState } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterSeven from "../layout/footer/footer-seven";
import { caseStudies, getFeaturedCaseStudies } from "../data/case-studies";

export default function WorkPage() {
	const [activeFilter, setActiveFilter] = useState<string>("all");

	const filteredCaseStudies =
		activeFilter === "all"
			? caseStudies
			: caseStudies.filter((study) => study.pillar === activeFilter);

	const featuredStudies = getFeaturedCaseStudies();

	return (
		<Wrapper>
			<SEOCom title="Work - Equal Sons" />
			<Header />

			<BreadcrumbOne
				title="Our Work"
				subtitle="Case studies showcasing how we help businesses build, lead, and share"
				imageSrc="/assets/img/breadcumb/breadcumb-1.jpg"
			/>

			{/* Featured Case Studies */}
			{activeFilter === "all" && featuredStudies.length > 0 && (
				<div className="space">
					<div className="container">
						<div className="row justify-content-center mb-50">
							<div className="col-xl-8 col-lg-10">
								<div className="title-area text-center">
									<h2 className="sec-title">Featured Work</h2>
									<p className="sec-text">
										Highlighted projects that showcase the depth and impact of
										our partnership approach.
									</p>
								</div>
							</div>
						</div>

						<div className="row gy-4">
							{featuredStudies.slice(0, 3).map((study) => (
								<div key={study.id} className="col-lg-4 col-md-6">
									<div className="feature-card h-100">
										<div className="mb-3">
											<span className="badge bg-theme text-white me-2">
												{study.pillar.toUpperCase()}
											</span>
											{study.serviceTags.slice(0, 2).map((tag, index) => (
												<span key={index} className="badge bg-smoke me-2">
													{tag}
												</span>
											))}
										</div>
										<h3 className="h4 mb-2">
											<NavLink to={`/work/${study.slug}`}>
												{study.title}
											</NavLink>
										</h3>
										<p className="mb-2">
											<strong>{study.client}</strong>
										</p>
										<p className="mb-3">{study.shortDescription}</p>
										<NavLink to={`/work/${study.slug}`} className="link-btn">
											<span className="link-effect">
												<span className="effect-1">READ CASE STUDY</span>
												<span className="effect-1">READ CASE STUDY</span>
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
			)}

			{/* All Case Studies */}
			<div className="portfolio-area-1 space-bottom">
				<div className="container">
					{/* Filter Tabs */}
					<div className="row justify-content-center mb-50">
						<div className="col-xl-8 col-lg-10">
							<div className="filter-menu filter-menu-active text-center">
								<button
									onClick={() => setActiveFilter("all")}
									className={activeFilter === "all" ? "active" : ""}
								>
									All Work
								</button>
								<button
									onClick={() => setActiveFilter("build")}
									className={activeFilter === "build" ? "active" : ""}
								>
									BUILD
								</button>
								<button
									onClick={() => setActiveFilter("lead")}
									className={activeFilter === "lead" ? "active" : ""}
								>
									LEAD
								</button>
								<button
									onClick={() => setActiveFilter("share")}
									className={activeFilter === "share" ? "active" : ""}
								>
									SHARE
								</button>
							</div>
						</div>
					</div>

					{/* Case Studies Grid */}
					<div className="row gy-4">
						{filteredCaseStudies.map((study) => (
							<div key={study.id} className="col-lg-6">
								<div className="feature-card h-100">
									<div className="mb-3">
										<span className="badge bg-theme text-white me-2">
											{study.pillar.toUpperCase()}
										</span>
										{study.serviceTags.slice(0, 2).map((tag, index) => (
											<span key={index} className="badge bg-smoke me-2">
												{tag}
											</span>
										))}
									</div>
									<h3 className="h4 mb-2">
										<NavLink to={`/work/${study.slug}`}>{study.title}</NavLink>
									</h3>
									<p className="mb-2">
										<strong>{study.client}</strong>
									</p>
									<p className="mb-3">{study.shortDescription}</p>
									<NavLink to={`/work/${study.slug}`} className="link-btn">
										<span className="link-effect">
											<span className="effect-1">READ CASE STUDY</span>
											<span className="effect-1">READ CASE STUDY</span>
										</span>
										<img src="/assets/img/icon/arrow-left-top.svg" alt="arrow" />
									</NavLink>
								</div>
							</div>
						))}
					</div>

					{filteredCaseStudies.length === 0 && (
						<div className="row">
							<div className="col-12 text-center py-5">
								<p className="sec-text">
									No case studies found for this category.
								</p>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* CTA Section */}
			<div className="cta-area-1 overflow-hidden bg-smoke space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">Ready to create your own success story?</h2>
								<p className="sec-text mt-30 mb-40">
									Let's talk about your project and how we can help you achieve
									results like these.
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
