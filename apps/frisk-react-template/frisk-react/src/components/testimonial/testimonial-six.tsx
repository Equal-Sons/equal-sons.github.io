import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    text: `It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms`,
    name: "Daniyel Karlos",
    designation: "Senior Director of Marketing",
  },
  {
    id: 2,
    text: `It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms`,
    name: "Daniyel Karlos",
    designation: "Senior Director of Marketing",
  },
  {
    id: 3,
    text: `It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms`,
    name: "Daniyel Karlos",
    designation: "Senior Director of Marketing",
  },
  {
    id: 4,
    text: `It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms`,
    name: "Daniyel Karlos",
    designation: "Senior Director of Marketing",
  },
];

export default function TestimonialSix() {
  const sliderOptions = {
    slidesToShow: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-area-7 space overflow-hidden">
      <div className="container container3">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area text-center">
              <h2 className="sec-title">What Our Customer Say!</h2>
            </div>
          </div>
        </div>
        <Slider
          {...sliderOptions}
          className="row global-carousel testi-slider7"
        >
          {testimonialData.map((elm, i) => (
            <div key={i} className="col-lg-12 sliderItem">
              <div className="testi-box style7">
                <div className="rating-wrap">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testi-box_text">“{elm.text}”</p>
                <div className="testi-box_profile">
                  <h4 className="testi-box_name">{elm.name}</h4>
                  <span className="testi-box_desig">{elm.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
