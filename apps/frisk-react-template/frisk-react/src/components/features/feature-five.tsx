import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icon/feature-icon1-1.svg",
    title: "Branding Design",
    text: "We care success relationships fuel success we love building",
  },
  {
    id: 2,
    icon: "/assets/img/icon/feature-icon1-2.svg",
    title: "Web Development",
    text: "We care success relationships fuel success we love building",
  },
  {
    id: 3,
    icon: "/assets/img/icon/feature-icon1-3.svg",
    title: "Digital Marketing",
    text: "We care success relationships fuel success we love building",
  },
  {
    id: 4,
    icon: "/assets/img/icon/feature-icon1-1.svg",
    title: "Branding Design",
    text: "We care success relationships fuel success we love building",
  },
  {
    id: 5,
    icon: "/assets/img/icon/feature-icon1-2.svg",
    title: "Web Development",
    text: "We care success relationships fuel success we love building",
  },
  {
    id: 6,
    icon: "/assets/img/icon/feature-icon1-3.svg",
    title: "Digital Marketing",
    text: "We care success relationships fuel success we love building",
  }
]

export default function FeatureFive() {
  const slickSettings = {
    slidesToShow: 3,
    dots: true,

    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">What We Can Do for Our Clients</h2>
            </div>
          </div>
        </div>
        <Slider {...slickSettings} className="row global-carousel">
          {feature_data.map((elm) => (
            <div key={elm.id} className="col-xl-4 col-md-6 sliderItem">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <img src={elm.icon} alt="icon" />
                </div>
                <h4 className="feature-card-title">
                  <a href="#">{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <NavLink
                  to={`/service-details`}
                  className="link-btn"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW DETAILS</span>
                    <span className="effect-1">VIEW DETAILS</span>
                  </span>
                  <img
                    src="/assets/img/icon/arrow-left-top.svg"
                    alt="icon"
                  />
                </NavLink>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
