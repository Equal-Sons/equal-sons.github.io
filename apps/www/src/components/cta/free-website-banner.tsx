import { NavLink } from "react-router-dom";

export default function FreeWebsiteBanner() {
	return (
		<div className="cta-area-1 overflow-hidden space bg-theme">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10 col-lg-11">
						<div className="title-area text-center mb-0">
							<span
								className="sec-subtitle"
								style={{
									color: "#6c757d",
									fontSize: "0.9rem",
									textTransform: "uppercase",
									letterSpacing: "1px",
								}}
							>
								Limited-Time Initiative
							</span>
							<h2 className="sec-title mt-3">
								Your Business Deserves a Website
							</h2>
							<p className="sec-text mt-30 mb-30">
								We're building free websites for businesses that don't have one
								yet. Simple, professional sites (up to 3-5 pages templates) that
								showcase your services and help customers reach you. You pay
								only for hosting and support.
							</p>
							<p className="sec-text mb-40">
								<strong>
									Priority for Richmond, VA businesses. Everyone welcome to
									apply.
								</strong>
							</p>
							<div className="btn-group justify-content-center gap-3">
								<NavLink
									to="/your-business-deserves-a-website"
									className="btn mt-0"
								>
									<span className="link-effect">
										<span className="effect-1">LEARN MORE</span>
										<span className="effect-1">LEARN MORE</span>
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
