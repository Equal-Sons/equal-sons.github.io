import Slider from 'react-slick';

const testimonial_data = [
    {
        id: 1,
        text: "“It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing”",
        name: "Daniyel Karlos",
        designation: "Senior Director of Marketing",
    },
    {
        id: 2,
        text: "“It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing”",
        name: "Daniyel Karlos",
        designation: "Senior Director of Marketing",
    },
]

type ArrowProps = {
    onClick?: () => void;
};

const PrevArrow = ({ onClick }: ArrowProps) => (
    <button type="button" className="slick-prev slick-arrow" onClick={onClick} > <i className="fas fa-arrow-left"></i> </button>
);

const NextArrow = ({ onClick }: ArrowProps) => (
    <button type="button" className="slick-next slick-arrow" onClick={onClick} ><i className="fas fa-arrow-right"></i></button>
);

const TestimonialFive = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="testimonial-area-6 overflow-hidden">
            <div className="custom-container">
                <div
                    className="testimonial-wrap6 background-image arrow-wrap"
                    style={{
                        backgroundImage: "url(/assets/img/bg/testimonial-6-bg.jpg)",
                    }}
                >
                    <div className="container container3">
                        <Slider
                            {...settings}
                            className="row global-carousel testi-slider6"
                        >
                            {testimonial_data.map((item) => (
                                <div key={item.id} className="col-lg-12">
                                    <div className="testi-box style6">
                                        <div className="rating-wrap">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>

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

export default TestimonialFive;
