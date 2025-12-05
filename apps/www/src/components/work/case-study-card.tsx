import { NavLink } from "react-router-dom";
import type { ICaseStudy } from "../../data/case-studies";

interface CaseStudyCardProps {
	study: ICaseStudy;
	variant?: "default" | "dark";
	showTags?: boolean;
	maxTags?: number;
}

export default function CaseStudyCard({
	study,
	variant = "default",
	showTags = true,
	maxTags = 2,
}: CaseStudyCardProps) {
	const isDark = variant === "dark";

	return (
		<div className={`feature-card h-100 ${isDark ? "bg-title" : ""}`}>
			{showTags && (
				<div className="mb-3">
					<NavLink
						to={`/services/${study.pillar}`}
						className={`badge me-2 ${isDark ? "bg-theme text-black" : ""}`}
						style={{ textDecoration: "none" }}
					>
						{study.pillar.toUpperCase()}
					</NavLink>
					{study.serviceTags.slice(0, maxTags).map((tag, index) => (
						<NavLink
							key={index}
							to={`/services/${study.pillar}/${tag}`}
							className="badge bg-smoke me-2"
							style={{ textDecoration: "none" }}
						>
							{tag
								.split("-")
								.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
								.join(" ")}
						</NavLink>
					))}
				</div>
			)}
			<h3 className={`h4 mb-2 ${isDark ? "text-theme" : "text-black"}`}>
				<NavLink
					className={isDark ? "text-theme" : "text-dark-theme"}
					to={`/work/${study.slug}`}
				>
					{study.title}
				</NavLink>
			</h3>
			<p className={`mb-2 ${isDark ? "text-white" : ""}`}>
				<strong>{study.client}</strong>
			</p>
			<p className={`mb-3 ${isDark ? "text-white" : ""}`}>{study.shortDescription}</p>
			<NavLink to={`/work/${study.slug}`} className="link-btn">
				<span className="link-effect">
					<span className={`effect-1 ${isDark ? "text-white" : ""}`}>
						READ CASE STUDY
					</span>
					<span className={`effect-1 ${isDark ? "text-white" : ""}`}>
						READ CASE STUDY
					</span>
				</span>
				<img src="/assets/img/icon/arrow-left-top.svg" alt="arrow" />
			</NavLink>
		</div>
	);
}
