import Marquee from "react-fast-marquee";

export default function MarqueeSlider() {
	const marQueeData = [
		{
			id: 1,
			href: "#",
			text: "Bold Thinking",
			icon: "fas fa-star-of-life",
		},
		{
			id: 2,
			href: "#",
			text: "Simple Solutions",
			icon: "fas fa-star-of-life",
		},
		{
			id: 3,
			href: "#",
			text: "Just the right amount of irreverence",
			icon: "fas fa-star-of-life",
		},
	];
	return (
		<div className="container-fluid p-0 overflow-hidden">
			<div className="slider__marquee clearfix marquee-wrap">
				<div className="marquee_mode marquee__group">
					<Marquee pauseOnHover={true}>
						{marQueeData.map((elm, i) => (
							<h6
								key={i}
								className="item m-item"
								style={{
									fontFamily: "var(--title-font)",
									color: "var(--smoke-color)",
									fontWeight: 600,
									fontSize: "36px",
								}}
							>
								<i className={elm.icon}></i> {elm.text}
							</h6>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
}
