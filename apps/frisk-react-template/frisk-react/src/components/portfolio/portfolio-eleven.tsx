import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import type { IPortfolioDT } from "../../types/portfolio-d-t";

const portfolio_data: IPortfolioDT[] = [
    {
        id: 1,
        imageSrc: "/assets/img/portfolio/portfolio7_1.jpg",
        category: "Branding",
        title: "Product Lineup Industrial",
    },
    {
        id: 2,
        imageSrc: "/assets/img/portfolio/portfolio7_2.jpg",
        category: "Marketing",
        title: "Trading Website Design",
    },
    {
        id: 3,
        imageSrc: "/assets/img/portfolio/portfolio7_3.jpg",
        category: "Development",
        title: "Nova Scotia Winery",
    },
    {
        id: 4,
        imageSrc: "/assets/img/portfolio/portfolio7_1.jpg",
        category: "Branding",
        title: "Product Lineup Industrial",
    },
    {
        id: 5,
        imageSrc: "/assets/img/portfolio/portfolio7_2.jpg",
        category: "Marketing",
        title: "Trading Website Design",
    },
    {
        id: 6,
        imageSrc: "/assets/img/portfolio/portfolio7_3.jpg",
        category: "Development",
        title: "Nova Scotia Winery",
    },
];

const PortfolioEleven = () => {

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
        <div className="project-area-11 overflow-hidden">
            <div className="container-fluid">
                <div
                    ref={wrapperRef}
                    className="project-slider-showcase-wrap"
                >
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        speed={600}
                        spaceBetween={24}
                        slidesPerView={3}
                        autoplay={{
                            delay: 3000,              
                            
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true, 
                            
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1200: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 },
                        }}
                        className="row global-carousel project-slider-showcase"
                    >
                        {portfolio_data.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className="col-lg-4 sliderItem"
                            >
                                <div className="portfolio-wrap style6">
                                    <div className="portfolio-thumb">
                                        <Link to="/project-details">
                                            <img
                                                src={item.imageSrc}
                                                alt={item.title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="portfolio-details">
                                        <h3 className="portfolio-title">
                                            <Link to="/project-details">
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <ul className="portfolio-meta">
                                            <li>
                                                <Link to="/blog">
                                                    {item.category}
                                                </Link>
                                            </li>
                                        </ul>
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

export default PortfolioEleven;
