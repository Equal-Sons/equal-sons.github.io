import Slider from 'react-slick';

const testimonial_data = [
    {
        id: 1,
        avatar: "assets/img/testimonial/testi_thumb2_1.jpg",
        text: "“It’s a pleasure working with Bunker understood new brand positioning guidelines translated them beautifully and consistently into our on going marketing comms”",
        name: "Daniyel Karlos",
        designation: "Senior Director of Marketing",
    },
    {
        id: 2,
        avatar: "assets/img/testimonial/testi_thumb2_2.jpg",
        text: "“It’s a pleasure working with Bunker understood new brand positioning guidelines translated them beautifully and consistently into our on going marketing comms”",
        name: "Nathan Hallmark",
        designation: "Designer Team Head at Qxygen",
    },
    {
        id: 3,
        avatar: "assets/img/testimonial/testi_thumb2_3.jpg",
        text: "“It’s a pleasure working with Bunker understood new brand positioning guidelines translated them beautifully and consistently into our on going marketing comms”",
        name: "Daniyel Karlos",
        designation: "Senior Director of Marketing",
    },
    {
        id: 4,
        avatar: "assets/img/testimonial/testi_thumb2_1.jpg",
        text: "“It’s a pleasure working with Bunker understood new brand positioning guidelines translated them beautifully and consistently into our on going marketing comms”",
        name: "Daniyel Karlos",
        designation: "Senior Director of Marketing",
    },
    {
        id: 5,
        avatar: "assets/img/testimonial/testi_thumb2_2.jpg",
        text: "“It’s a pleasure working with Bunker understood new brand positioning guidelines translated them beautifully and consistently into our on going marketing comms”",
        name: "Nathan Hallmark",
        designation: "Designer Team Head at Qxygen",
    },
    {
        id: 6,
        avatar: "assets/img/testimonial/testi_thumb2_3.jpg",
        text: "“It’s a pleasure working with Bunker understood new brand positioning guidelines translated them beautifully and consistently into our on going marketing comms”",
        name: "Daniyel Karlos",
        designation: "Senior Director of Marketing",
    },
]

const setting = {
    dots: true,       
    infinite: true,   
    speed: 500,         
    slidesToShow: 3,    
    slidesToScroll: 1,
    arrows: false,        
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots:false
            },
        },
    ],
};

const TestimonialFour = () => {
    return (
        <div className="testimonial-area-5 space overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="title-area text-center">
                            <h2 className="sec-title">What Our Customer Says</h2>
                        </div>
                    </div>
                </div>
                <Slider  {...setting} className="row global-carousel testi-slider5" data-slide-show="3" data-dots="true" data-xl-dots="true" data-ml-dots="true">
                    {testimonial_data.map((item) => (
                        <div key={item.id} className="col-lg-4 sliderItem">
                            <div className="testi-box style5">
                                <div className="testi-box_img">
                                    <img src={item.avatar} alt="img" />
                                </div>
                                <p className="testi-box_text">{item.text}</p>
                                <div className="testi-box_profile">
                                    <h4 className="testi-box_name">{item.name}</h4>
                                    <span className="testi-box_desig">{item.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default TestimonialFour
