import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterSeven from "../layout/footer/footer-seven";
import team_data from "../data/team";

export default function AboutPage() {
	return (
		<Wrapper>
			<SEOCom title="About Us - Equal Sons" />
			<Header />

			<BreadcrumbOne
				title="About Us"
				subtitle="Partners in the work"
				bg="/assets/img/about.jpg"
			/>

			{/* Our Story */}
			<div className="space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-50">
								<h2 className="sec-title">Partners in the work.</h2>
								<p className="sec-text mt-30 mb-30">
									Equal Sons was founded on a simple belief: great ideas deserve
									great execution, and the best results come from true
									partnership.
								</p>
								<p className="sec-text mb-30">
									We're not the consultants who deliver a deck and disappear.
									We're the ones who sit beside you, roll up our sleeves, and do
									the work—building the products, defining the strategies, and
									delivering the messages that move your business forward.
								</p>
								<p className="sec-text">
									Based in Richmond, Virginia, we work with businesses of all
									sizes who share one thing in common: they're ready to move and
									want a partner who can actually make things happen.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Our Approach */}
			<div className="cta-area-1 overflow-hidden bg-smoke space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">Ideas deserve execution.</h2>
								<p className="sec-text mt-30">
									Strategy without action is just theory. And the best work
									happens when you have a partner who's willing to roll up their
									sleeves alongside you. That's how we work—deeply embedded in
									your challenges, committed to your outcomes, and focused on
									real momentum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* The Team */}
			<div className="team-area-1 space">
				<div className="container">
					<div className="row justify-content-center mb-50">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center">
								<h2 className="sec-title">Meet the Partners</h2>
								<p className="sec-text">
									Two partners bringing complementary expertise to every
									engagement.
								</p>
							</div>
						</div>
					</div>

					<div className="row gy-5 justify-content-center">
						{team_data.map((member) => (
							<div key={member.id} className="col-lg-4">
								<div className="team-card-details team-card-details-vertical">
									<div className="team-card-img mb-4">
										<img
											src={member.imageSrc}
											alt={member.name}
											className="w-100"
										/>
									</div>
									<div className="team-card-content">
										<h3 className="team-card-title mb-2">{member.name}</h3>
										<p className="team-card-desig mb-3">{member.designation}</p>
										{member.bio && (
											<p className="mb-3 text-muted">{member.bio}</p>
										)}
										{member.detailedBio && (
											<p className="mb-4 small">{member.detailedBio}</p>
										)}

										{member.areasOfFocus && (
											<div className="mb-0">
												<strong className="d-block mb-2 text-uppercase small">
													Areas of Focus
												</strong>
												<ul className="list-unstyled">
													{member.areasOfFocus.map((area, index) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<li key={index} className="mb-2 small">
															<i className="fas fa-arrow-right text-theme me-2" />
															{area}
														</li>
													))}
												</ul>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* What We Do */}
			<div className="feature-area-1 bg-smoke space">
				<div className="container">
					<div className="row justify-content-center mb-50">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center">
								<h2 className="sec-title">What We Do</h2>
								<p className="sec-text">
									Three capabilities. One team. Each pillar represents a
									distinct area of expertise that can stand alone or work
									together.
								</p>
							</div>
						</div>
					</div>

					<div className="row gy-4 justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="feature-card h-100">
								<div className="feature-card-icon">
									<img
										src="/assets/img/icon/feature-icon1-2.svg"
										alt="Build icon"
									/>
								</div>
								<h3 className="feature-card-title">
									<NavLink to="/services/build">BUILD</NavLink>
								</h3>
								<p className="mb-3" style={{ fontStyle: "italic" }}>
									You have the idea. We have the expertise.
								</p>
								<p className="feature-card-text">
									Web and app development, MVPs, integrations. We make the
									technology that brings your vision to life.
								</p>
								<NavLink to="/services/build" className="link-btn">
									<span className="link-effect">
										<span className="effect-1">EXPLORE BUILD</span>
										<span className="effect-1">EXPLORE BUILD</span>
									</span>
									<img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
								</NavLink>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="feature-card h-100">
								<div className="feature-card-icon">
									<img
										src="/assets/img/icon/feature-icon1-4.svg"
										alt="Lead icon"
									/>
								</div>
								<h3 className="feature-card-title">
									<NavLink to="/services/lead">LEAD</NavLink>
								</h3>
								<p className="mb-3" style={{ fontStyle: "italic" }}>
									Knowing where you're going changes how you get there.
								</p>
								<p className="feature-card-text">
									Technology strategy, marketing strategy, positioning. We chart
									the course and provide the clarity you need.
								</p>
								<NavLink to="/services/lead" className="link-btn">
									<span className="link-effect">
										<span className="effect-1">EXPLORE LEAD</span>
										<span className="effect-1">EXPLORE LEAD</span>
									</span>
									<img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
								</NavLink>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="feature-card h-100">
								<div className="feature-card-icon">
									<img
										src="/assets/img/icon/feature-icon1-1.svg"
										alt="Share icon"
									/>
								</div>
								<h3 className="feature-card-title">
									<NavLink to="/services/share">SHARE</NavLink>
								</h3>
								<p className="mb-3" style={{ fontStyle: "italic" }}>
									What you know is valuable. How you share it sets you apart.
								</p>
								<p className="feature-card-text">
									Facilitation, speaking, workshops. We amplify the message and
									help you lead out loud.
								</p>
								<NavLink to="/services/share" className="link-btn">
									<span className="link-effect">
										<span className="effect-1">EXPLORE SHARE</span>
										<span className="effect-1">EXPLORE SHARE</span>
									</span>
									<img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="cta-area-1 overflow-hidden space">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-0">
								<h2 className="sec-title">Let's work together.</h2>
								<p className="sec-text mt-30 mb-40">
									Ready to build something? Have a strategy question? Want to
									explore how we can help? Let's talk about what's next.
								</p>
								<div className="btn-group justify-content-center">
									<NavLink to="/contact" className="btn mt-0">
										<span className="link-effect">
											<span className="effect-1">GET IN TOUCH</span>
											<span className="effect-1">GET IN TOUCH</span>
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
