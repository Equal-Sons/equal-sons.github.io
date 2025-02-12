import { NavLink } from "react-router-dom";

export default function HeroBanner() {
	return (
		<div className="hero-wrapper hero-6" id="hero">
			<div className="container">
				<div className="hero-style6">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
								We build
							</h1>

							<h1 className="hero-title wow img-custom-anim-left animated">
								products &
							</h1>

							<h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
								tell stories.
							</h1>
						</div>
						<div className="col-lg-6 offset-lg-5">
							<p className="hero-text wow img-custom-anim-right animated">
								For business leaders in pursuit of the next big thing - be it a
								bold new product or the right words to share it with the world.
							</p>
							<p className="hero-text wow img-custom-anim-right animated">
								We bring the technical expertise and strategic clarity to make
								it happen.
							</p>
						</div>
					</div>
					<NavLink
						className="circle-btn style2 btn bg-theme text-title gsap-magnetic wow img-custom-anim-left animated"
						to="/contact"
					>
						<span className="link-effect">
							<span className="effect-1">
								LET'S WORK <br />
								TOGETHER
							</span>
							<span className="effect-1">
								AND PURSUE <br />
								GREATNESS
							</span>
						</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
