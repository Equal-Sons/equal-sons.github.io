import { NavLink } from "react-router-dom";

const Approach = () => {
	return (
		<div className="cta-area-1 overflow-hidden bg-smoke space">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-lg-10">
						<div className="title-area text-center mb-0">
							<h2 className="sec-title">
								Partners in the work.
							</h2>
							<p className="sec-text mt-30 mb-40">
								We're not the consultants who deliver a deck and disappear. We're
								the ones who sit beside you, roll up our sleeves, and do the
								work—building the products, defining the strategies, and
								delivering the messages that move your business forward.
							</p>
							<p className="sec-text">
								Ideas deserve execution. Strategy without action is just theory.
								And the best work happens when you have a partner who's willing
								to roll up their sleeves alongside you.
							</p>
							<div className="btn-group justify-content-center">
								<NavLink to="/contact" className="btn mt-4">
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
};

export default Approach;
