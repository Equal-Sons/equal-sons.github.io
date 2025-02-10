import { NavLink } from "react-router-dom";

export default function CtaFour() {
	return (
		<div className="cta-area-1 overflow-hidden bg-smoke space">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-lg-10">
						<div className="title-area text-center mb-0">
							<h2 className="sec-title">
								Let’s Build the Next Big Thing Together
							</h2>
							<p className="sec-text mt-30 mb-40">
								Whether you need a fractional CTO to architect your next big
								move, or a product strategist to help bring your vision to
								life—we're here for it.
							</p>
							<div className="btn-group justify-content-center">
								<NavLink to="/contact" className="btn mt-0">
									<span className="link-effect">
										<span className="effect-1">LET'S TALK ABOUT</span>
										<span className="effect-1">WHAT COMES NEXT</span>
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
