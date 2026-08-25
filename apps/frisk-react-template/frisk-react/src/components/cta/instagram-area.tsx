import { Link } from "react-router-dom"
import Slider from "react-slick"

const insta_data = [
    {
        id: 1,
        img: "/assets/img/instagram/1-1.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 2,
        img: "/assets/img/instagram/1-2.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 3,
        img: "/assets/img/instagram/1-3.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 4,
        img: "/assets/img/instagram/1-4.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 5,
        img: "/assets/img/instagram/1-5.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 6,
        img: "/assets/img/instagram/1-1.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 7,
        img: "/assets/img/instagram/1-2.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 8,
        img: "/assets/img/instagram/1-3.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 9,
        img: "/assets/img/instagram/1-4.jpg",
        url: "https://www.instagram.com/",
    },
    {
        id: 10,
        img: "/assets/img/instagram/1-5.jpg",
        url: "https://www.instagram.com/",
    },
]

const setting = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};


const InstagramArea = () => {
    return (
        <div className="instagram-area-1 overflow-hidden">
            <div className="container container3">
                <Slider {...setting} className="row global-carousel instagram-slider1" data-slide-show="5" data-lg-slide-show="4" data-md-slide-show="3" data-sm-slide-show="2" data-xs-slide-show="2" data-dots="false" data-arrows="false">
                    {insta_data.map((item) => (
                        <div key={item.id} className="col-lg-12 sliderItem">
                            <Link className="instagram-card" to="https://www.instagram.com/">
                                <img src={item.img} alt="img" />
                                <span className="icon-btn">
                                    <i className="fab fa-instagram"></i>
                                </span>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default InstagramArea
