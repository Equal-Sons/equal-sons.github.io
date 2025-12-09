import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterSeven from "../layout/footer/footer-seven";

export default function FreeWebsiteInitiative() {
	return (
		<Wrapper>
			<SEOCom title="Free Website Initiative - Equal Sons" />
			<Header />

			<BreadcrumbOne
				title="Your Business Deserves a Website"
				subtitle="Simple Sites. Real Impact. No Cost."
				bg="/assets/img/hero/hero-2-1.jpg"
			/>

			{/* Introduction Section */}
			<div className="space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-50">
								<h2 className="sec-title">Here's a truth:</h2>
								<p className="sec-text mt-30 mb-30">
									In 2025, having a website isn't optional. It's table stakes.
									It's how customers find you, understand the offerings you
									provide, and may ultimately be a deciding factor to do
									business with you or not.
								</p>
								<p className="sec-text mb-30">
									But we also know this: you're good at what you do. You started
									your business to be a contractor, a designer, a consultant —
									not a web developer. You want to focus on your craft, not
									become an expert in marketing, hosting, and HTML.
								</p>
								<p className="sec-text">That's where we come in.</p>

								<div className="btn-group justify-content-center">
									<a
										href="https://tally.so/r/Y5PzdW"
										target="_blank"
										rel="noopener noreferrer"
										className="btn mt-12"
									>
										<span className="link-effect">
											<span className="effect-1">APPLY NOW</span>
											<span className="effect-1">APPLY NOW</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* What You Get Section */}
			<div className="cta-area-1 overflow-hidden bg-smoke space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-40">
								<h2 className="sec-title">
									Simple Sites. Real Impact. No Cost.
								</h2>
								<p className="sec-text mt-30">
									We're building free websites for businesses that don't have
									one yet.
								</p>
								<p className="sec-text">
									Not complex, enterprise-level sites. Simple, professional
									websites that do exactly what you need: showcase your
									services, share customer testimonials, and give people a way
									to reach you.
								</p>
							</div>
						</div>
					</div>

					<div className="row justify-content-center mt-50">
						<div className="col-lg-5 col-md-6 mb-4">
							<div className="bg-white p-4" style={{ height: "100%" }}>
								<h3 className="h4 mb-3">Here's what you get:</h3>
								<ul className="list-unstyled">
									<li className="mb-2">
										✓ A clean, professional website (up to 3-5 page templates)
									</li>
									<li className="mb-2">
										✓ Mobile-friendly design that works where your customers are
									</li>
									<li className="mb-2">✓ Fast, reliable performance</li>
									<li className="mb-2">✓ No ongoing development headaches</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5 col-md-6 mb-4">
							<div className="bg-white p-4" style={{ height: "100%" }}>
								<h3 className="h4 mb-3">Here's what we need from you:</h3>
								<ul className="list-unstyled">
									<li className="mb-2">
										✓ Pay for hosting and support (1-year minimum)
									</li>
									<li className="mb-2">
										✓ Fill out the intake form below so we understand your
										business
									</li>
									<li className="mb-2">
										✓ Be ready to optionally provide content (brand details,
										photos, etc.)
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="row justify-content-center mt-40">
						<div className="col-xl-8 col-lg-10">
							<p className="text-center sec-text">
								<strong>This is a limited-time initiative.</strong> We can't do
								this forever, but we can help now.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Community First Section */}
			<div className="space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">
									Community First. Everyone Welcome.
								</h2>
								<p className="sec-text mt-30">
									We'll be giving priority to businesses located in the greater
									Richmond, VA area first, but we still encourage you to apply.
									We'll do our best to help as many companies as possible.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="cta-area-1 overflow-hidden bg-theme space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">Ready to Get Started?</h2>
								<p className="sec-text mt-30 mb-40">
									Fill out the form below. Tell us about your business, what you
									do, and what you need. We'll review your submission and get
									back to you shortly.
								</p>
								<div className="btn-group justify-content-center">
									<a
										href="https://tally.so/r/Y5PzdW"
										target="_blank"
										rel="noopener noreferrer"
										className="btn mt-0"
									>
										<span className="link-effect">
											<span className="effect-1">
												REQUEST YOUR FREE WEBSITE
											</span>
											<span className="effect-1">
												REQUEST YOUR FREE WEBSITE
											</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Optional DIY Section - Coming Soon */}
			{/* <div className="cta-area-1 overflow-hidden bg-smoke space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">Want to Build It Yourself?</h2>
								<p className="sec-text mt-30 mb-30">
									<em>
										[This section is under development and will be added soon.]
									</em>
								</p>
								<p className="sec-text">
									We're creating a video series to help business owners build
									their own simple websites. If you'd rather learn to do it
									yourself, check back soon for step-by-step tutorials that walk
									you through the entire process—no technical experience
									required.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			{/* Why We're Doing This Section */}
			<div className="space bg-smoke">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">Why We're Doing This</h2>
								<p className="sec-text mt-30 mb-30">
									At Equal Sons, we believe great work deserves to be seen. Too
									many talented business owners are invisible online simply
									because building a website feels overwhelming or expensive.
								</p>
								<p className="sec-text mb-30">
									This initiative is our way of changing that. One business at a
									time.
								</p>
								<p className="sec-text">
									<strong>
										Based in Richmond, VA. Building for businesses everywhere.
									</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Need Something More Section */}
			<div className="space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-40">
								<h2 className="sec-title">Need Something More?</h2>
								<p className="sec-text mt-30 mb-40">
									If you need a custom website with advanced features, a content
									management system, or help with our other services like
									technology strategy, marketing, or product development, we
									still want to talk.
								</p>
								<div className="btn-group justify-content-center">
									<NavLink to="/contact" className="btn style2 mt-0">
										<span className="link-effect">
											<span className="effect-1">DISCUSS A CUSTOM PROJECT</span>
											<span className="effect-1">DISCUSS A CUSTOM PROJECT</span>
										</span>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* footer area */}
			<FooterSeven />
			{/* footer area */}
		</Wrapper>
	);
}
