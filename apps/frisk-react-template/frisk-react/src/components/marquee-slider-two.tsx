import Marquee from "react-fast-marquee";

export default function MarqueeSliderTwo() {

  const marQueeData = [
    {
      id: 1,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life text-title",
    },
    {
      id: 2,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life text-title",
    },
    {
      id: 3,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life text-title",
    },
    {
      id: 4,
      href: "#",
      text: "We Give Unparalleled Flexibility",
      icon: "fas fa-star-of-life text-title",
    },
  ];

  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap bg-theme">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeData.map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href} className="text-title">
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
