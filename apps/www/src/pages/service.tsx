import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import Footer from "../layout/footer/footer-seven";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import PillarsPreview from "../components/pillars/pillars-preview";

export default function ServicePageThree() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title="Services - Equal Sons" />
			{/* seo title */}

			{/* header area start */}
			<Header />
			{/* header area end */}

			{/* breadcrumb start */}
			<BreadcrumbOne
				title="Services"
				subtitle="Build. Lead. Share."
				imageSrc="/assets/img/breadcumb/breadcumb-1.jpg"
			/>
			{/* breadcrumb end */}

			{/* Intro Section */}
			<div className="space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-50">
								<h2 className="sec-title">Three capabilities. One team.</h2>
								<p className="sec-text mt-30">
									Equal Sons partners with businesses to build products, lead
									strategy, and share ideas that create real momentum. Whether
									you need one capability or all three, we work alongside you to
									make it happen.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Three Pillars */}
			<PillarsPreview />

			{/* How We Work */}
			<div className="cta-area-1 overflow-hidden bg-smoke space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">How we work.</h2>
								<p className="sec-text mt-30 mb-30">
									We're not the consultants who deliver a deck and disappear.
									We're the ones who sit beside you, roll up our sleeves, and do
									the work. Each engagement is tailored to your specific needs,
									timeline, and goals.
								</p>
								<p className="sec-text mb-40">
									Ideas deserve execution. Strategy without action is just
									theory. And the best work happens when you have a partner
									who's willing to roll up their sleeves alongside you.
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

			{/* footer area */}
			<Footer />
			{/* footer area */}
		</Wrapper>
	);
}
