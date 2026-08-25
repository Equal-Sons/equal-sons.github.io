import Slider from 'react-slick';

const testimonial_data = [
  {
    id: 1,
    text: "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms. The team is responsive, quick and always willing help winning partnership",
    name: "Daniyel Karlos",
    designation: "Senior Director of Marketing",
  },
  {
    id: 2,
    text: "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms. The team is responsive, quick and always willing help winning partnership",
    name: "Daniyel Karlos",
    designation: "Senior Director of Marketing",
  },
  {
    id: 3,
    text: "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms. The team is responsive, quick and always willing help winning partnership",
    name: "Daniyel Karlos",
    designation: "Senior Director of Marketing",
  },
];

const TestimonialOne = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="testimonial-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="testimonial-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ right: "0px", top: "-100px", bottom: "100px" }}
      >
        <img
          src="/assets/img/testimonial/testi_thumb1_1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area ">
              <h2 className="sec-title">Testimonials</h2>
            </div>
            <div className="quote-icon ">
              <img
                src="/assets/img/icon/quote.svg"
                alt="icon"
              />
            </div>
            <Slider
              className="row global-carousel testi-slider1 "
              {...settings}
            >
              {testimonial_data.map((item) => (
                <div key={item.id} className="col-lg-4 sliderItem">
                  <div className="testi-box">
                    <p className="testi-box_text">{item.text}</p>
                    <div className="testi-box_profile">
                      <h4 className="testi-box_name">{item.name}</h4>
                      <span className="testi-box_desig">
                        {item.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;