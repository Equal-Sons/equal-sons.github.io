import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const project_data = [
    {
        id: "1",
        img: "/assets/img/portfolio/portfolio8_1.jpg",
        title: "Decentralized Lending Platform for Students",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: "2",
        img: "/assets/img/portfolio/portfolio8_2.jpg",
        title: "Shopify Redesign for a Nova Scotia Winery",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: "3",
        img: "/assets/img/portfolio/portfolio8_3.jpg",
        title: "Money Laundering Compliance Scanner",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: "4",
        img: "/assets/img/portfolio/portfolio8_4.jpg",
        title: "Anti Money Laundering Compliance Scanner",
        categories: ["Branding", "Development", "Marketing"],
    },
];

const PortfolioTwelve = () => {

    const swiperRef = useRef<any>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const scrollLock = useRef(false);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const onWheel = (e: WheelEvent) => {
            if (!swiperRef.current) return;

            e.preventDefault();

            if (scrollLock.current) return;
            scrollLock.current = true;

            if (e.deltaY > 0) {
                swiperRef.current.slideNext();
            } else {
                swiperRef.current.slidePrev();
            }

            setTimeout(() => {
                scrollLock.current = false;
            }, 600);
        };

        wrapper.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            wrapper.removeEventListener("wheel", onWheel);
        };
    }, []);

    return (
        <div className="project-area-12 overflow-hidden">
            <div className="container-fluid p-0">
                <div ref={wrapperRef} className="project-slider-showcase-wrap style2">
                    <Swiper
                        direction="vertical"
                        loop={true}
                        speed={600}
                        slidesPerView={1}
                        spaceBetween={0}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        className="row g-0 global-carousel project-slider-showcase"
                    >
                        {project_data.map((item) => (
                            <SwiperSlide key={item.id} className="col-12">
                                <div className="portfolio-wrap style12">
                                    <div className="portfolio-thumb">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="portfolio-details">
                                        <div className="media-left">
                                            <ul className="portfolio-meta">
                                                {item.categories.map((cat, i) => (
                                                    <li key={i}>
                                                        <Link to="/blog">{cat}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <h3 className="portfolio-title">
                                                <Link to="/project-details">{item.title}</Link>
                                            </h3>
                                        </div>
                                        <div className="portfolio-details-btn">
                                            <Link to="/project-details" className="link-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">VIEW PROJECT</span>
                                                    <span className="effect-1">VIEW PROJECT</span>
                                                </span>
                                                <img src="assets/img/icon/arrow-left-top.svg" alt="icon" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTwelve;
