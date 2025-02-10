import { NavLink } from "react-router-dom";

const WhyArea = () => {
	return (
		<div className="why-area-1 space bg-theme shape-mockup-wrap">
			<div
				className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
				data-wow-duration="1.5s"
				data-wow-delay="0.2s"
				style={{ top: "-100px", right: "0px", bottom: "140px" }}
			>
				<img src="/assets/img/normal/why_3-1.jpg" alt="img" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="title-area mb-45">
							<h2 className="sec-title">Passionate About Creating Quality</h2>
							<p>
								Equal Sons is a consultancy dedicated to helping businesses
								build better products, scale smarter, and communicate their
								vision with impact.
							</p>
						</div>
						<h4>Fractional CTO & Technical Leadership</h4>
						<p>
							Leading product development, scaling technology, and solving
							complex business challenges.
						</p>
						<h4 className="mt-35">Product Strategy & Public Speaking</h4>
						<p className="mb-n1">
							Sharpening product positioning, facilitating critical
							conversations, and telling the stories that move people.
						</p>
						<NavLink className="link-btn mt-35" to="/services">
							<span className="link-effect">
								<span className="effect-1">SEE OUR SERVICES</span>
								<span className="effect-1">SEE OUR SERVICES</span>
							</span>
							<img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyArea;
