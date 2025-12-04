import { NavLink } from "react-router-dom";

export default function CtaFour() {
	return (
		<div className="cta-area-1 overflow-hidden bg-smoke space">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-lg-10">
						<div className="title-area text-center mb-0">
							<h2 className="sec-title">Let's make something.</h2>
							<p className="sec-text mt-30 mb-40">
								Based in Richmond, VA. Working with builders everywhere. Whether
								you need a product built, a strategy defined, or a message
								delivered—let's talk about what's next.
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
	);
}
