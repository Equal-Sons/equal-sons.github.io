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

export default function TestimonialTwo() {
  const slickSettings = {
    slidesToShow: 1,
    dots: false,
    centerMode: true,
    centerPadding: "470px",
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "350px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: "200px",
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "100px",
          centerMode: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerPadding: "10px",
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="testimonial-area-2 space bg-gray overflow-hidden">
      <div className="container-fluid p-0">
        <Slider
          {...slickSettings}
          className="row global-carousel testi-slider2"
        >
          {testimonialData.map((elm, i) => (
            <div key={i} className="col-lg-4">
              <div className="testi-box style2">
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
