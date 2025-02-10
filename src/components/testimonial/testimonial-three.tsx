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
];

export default function TestimonialThree() {
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
    <div className="testimonial-area-8 space-top dot-style2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">Testimonials</h2>
            </div>
          </div>
        </div>
        <Slider
          {...sliderOptions}
          className="row global-carousel testi-slider3 dot-style2"
        >
          {testimonialData.map((elm, i) => (
            <div key={i} className="col-lg-6 sliderItem2">
              <div className="testi-box style3">
                <div className="quote-icon">
                  <img
                    src="/assets/img/icon/quote.svg"
                    alt="icon"
                  />
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
