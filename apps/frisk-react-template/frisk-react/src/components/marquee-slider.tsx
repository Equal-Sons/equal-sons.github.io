import Marquee from "react-fast-marquee";

export default function MarqueeSlider() {
  const marQueeData = [
    {
      id: 1,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life",
    },
    {
      id: 2,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life",
    },
    {
      id: 3,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life",
    },
    {
      id: 4,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeData.map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href}>
                  <i className={elm.icon}></i> {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
