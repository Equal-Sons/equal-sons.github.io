import { useState } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterSeven from "../layout/footer/footer-seven";
import { caseStudies, getFeaturedCaseStudies } from "../data/case-studies";
import CaseStudyCard from "../components/work/case-study-card";

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
				subtitle="See how our clients have improved their businesses through our partnership."
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
									<CaseStudyCard study={study} showTags={true} maxTags={2} />
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
							<div className="filter-tab-group text-center">
								<button
									type="button"
									onClick={() => setActiveFilter("all")}
									className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
								>
									All Work
								</button>
								<button
									type="button"
									onClick={() => setActiveFilter("build")}
									className={`filter-tab ${activeFilter === "build" ? "active" : ""}`}
								>
									Build
								</button>
								<button
									type="button"
									onClick={() => setActiveFilter("lead")}
									className={`filter-tab ${activeFilter === "lead" ? "active" : ""}`}
								>
									Lead
								</button>
								<button
									type="button"
									onClick={() => setActiveFilter("share")}
									className={`filter-tab ${activeFilter === "share" ? "active" : ""}`}
								>
									Share
								</button>
							</div>
						</div>
					</div>

					{/* Case Studies Grid */}
					<div className="row gy-4">
						{filteredCaseStudies.map((study) => (
							<div key={study.id} className="col-lg-6">
								<CaseStudyCard study={study} showTags={true} maxTags={2} />
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
								<h2 className="sec-title">
									Ready to create your own success story?
								</h2>
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
