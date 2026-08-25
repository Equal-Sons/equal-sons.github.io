import { NavLink } from "react-router-dom"
import Slider from "react-slick"
import { useRef } from "react";

import hero_img1 from "../../../public/assets/img/hero/hero-18-1.jpg"
import hero_img2 from "../../../public/assets/img/hero/hero-18-2.jpg"

const hero_data = [
    {
        id: 1,
        bg_img: hero_img1,
        title: "Discover New Arrivals",
    },
    {
        id: 2,
        bg_img: hero_img2,
        title: "Discover New Arrivals",
    },
]

const HeroBannerEighteen = () => {

    const setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        cssEase: "ease-in-out",
    };

    const sliderRef = useRef<Slider | null>(null);

    return (
        <div className="hero-wrapper hero-18" id="hero">
            <Slider {...setting} ref={sliderRef} className="global-carousel">
                {hero_data.map((item) => (
                    <div key={item.id} className="hero-slider">
                        <div className=" background-image tg-hero-18-wrapper" style={{ backgroundImage: `url(${item.bg_img})` }}>
                            <div className="hero-overlay" data-overlay="title" data-opacity="3"></div>
                            <div className="container container3">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7">
                                        <div className="hero-style18">
                                            <h1 className="hero-title" data-ani="slideinleft" data-ani-delay="0.1s">{item.title}</h1>
                                            <NavLink to="/shop" className="btn style4" data-ani="slideinleft" data-ani-delay="0.2s">
                                                <span className="link-effect">
                                                    <span className="effect-1">SHOP NOW</span>
                                                    <span className="effect-1">SHOP NOW</span>
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="icon-box">
                <button onClick={() => sliderRef.current?.slickPrev()} data-slick-prev="#heroSlider18" className="slick-arrow default"><i className="fas fa-arrow-left"></i></button>
                <button onClick={() => sliderRef.current?.slickNext()} data-slick-next="#heroSlider18" className="slick-arrow default"><i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default HeroBannerEighteen
