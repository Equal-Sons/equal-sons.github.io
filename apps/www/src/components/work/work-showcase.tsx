import { NavLink } from "react-router-dom";
import { getFeaturedCaseStudies } from "../../data/case-studies";

export default function WorkShowcase() {
	const featuredWork = getFeaturedCaseStudies().slice(0, 3);

	return (
		<div className="portfolio-area-1 space">
			<div className="container">
				<div className="row justify-content-center mb-50">
					<div className="col-xl-8 col-lg-10">
						<div className="title-area text-center">
							<h2 className="sec-title">Our Work</h2>
							<p className="sec-text">
								Real results from real partnerships. See how we've helped
								businesses build products, lead strategy, and share their
								message.
							</p>
						</div>
					</div>
				</div>

				<div className="row gy-4 justify-content-center">
					{featuredWork.map((study) => (
						<div key={study.id} className="col-lg-4 col-md-6">
							<div
								className="feature-card h-100 bg-title"
								style={{ position: "relative", overflow: "hidden" }}
							>
								<div className="mb-3">
									<span
										className="badge bg-theme text-black"
										style={{ display: "inline-block" }}
									>
										{study.pillar.toUpperCase()}
									</span>
								</div>
								<h3 className="h4 mb-2 text-theme">
									<NavLink to={`/work/${study.slug}`} className="text-theme">
										{study.title}
									</NavLink>
								</h3>
								<p className="mb-2 text-white">
									<strong>{study.client}</strong>
								</p>
								<p className="mb-3 text-white">{study.shortDescription}</p>
								<NavLink to={`/work/${study.slug}`} className="link-btn">
									<span className="link-effect">
										<span className="effect-1 text-white">READ CASE STUDY</span>
										<span className="effect-1 text-white">READ CASE STUDY</span>
									</span>
									<img src="/assets/img/icon/arrow-left-top.svg" alt="arrow" />
								</NavLink>
							</div>
						</div>
					))}
				</div>

				<div className="row mt-50">
					<div className="col-12 text-center">
						<NavLink to="/work" className="btn bg-theme text-black">
							<span className="link-effect">
								<span className="effect-1">VIEW ALL WORK</span>
								<span className="effect-1">VIEW ALL WORK</span>
							</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
