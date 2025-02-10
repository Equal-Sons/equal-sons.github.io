import { NavLink } from "react-router-dom";

const Approach = () => {
	return (
		<div className="cta-area-1 overflow-hidden bg-smoke space">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-lg-10">
						<div className="title-area text-center mb-0">
							<h2 className="sec-title">
								Serious Work,
								<br /> Not-So-Serious People
							</h2>
							<p className="sec-text mt-30 mb-40">
								There's no one-size-fits-all approach to building great
								products. That's why we work with growing businesses to offer
								flexible, high-impact solutions—advising, strategizing, leading,
								and delivering hands-on execution when needed.{" "}
							</p>
							<p>
								We take our work seriously—but not ourselves. We believe in
								clear thinking, bold action, and just the right amount of
								irreverence to make things fun.
							</p>
							<div className="btn-group justify-content-center">
								<NavLink to="/contact" className="btn mt-0">
									<span className="link-effect">
										<span className="effect-1">LET’S TALK WITH US</span>
										<span className="effect-1">LET’S TALK WITH US</span>
									</span>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Approach;
