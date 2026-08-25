import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

interface PortfolioItem {
    id: number;
    img: string;
    title: string;
    category: string[];
}

const portfolio_data: PortfolioItem[] = [
    {
        id: 1,
        img: "/assets/img/portfolio/portfolio8_3.jpg",
        title: "Money Laundering Compliance Scanner",
        category: ["Branding", "Development", "Marketing"],
    },
    {
        id: 2,
        img: "/assets/img/portfolio/portfolio8_4.jpg",
        title: "Anti Money Laundering Compliance Scanner",
        category: ["Branding", "Development", "Marketing"],
    },
    {
        id: 3,
        img: "/assets/img/portfolio/portfolio8_5.jpg",
        title: "Decentralized Lending Platform for Students",
        category: ["Branding", "Development", "Marketing"],
    },
    {
        id: 4,
        img: "/assets/img/portfolio/portfolio8_6.jpg",
        title: "Shopify Redesign for a Nova Scotia Winery",
        category: ["Branding", "Development", "Marketing"],
    },
];

const PortfolioThirteen = () => {
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let newActiveIndex = 0;

            contentRefs.current.forEach((el, index) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();
                const windowCenter = window.innerHeight / 2;

                // If element is near center of viewport, make it active
                if (rect.top < windowCenter && rect.bottom > windowCenter) {
                    newActiveIndex = index;
                }
            });

            setActiveIndex(newActiveIndex);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="project-area-13 bg-title space">
            <div className="container-fluid p-0">
                <div
                    className="project-static-wrap13"
                    style={{
                        display: "flex",
                        flexWrap: "nowrap",
                    }}
                >
                    {/* Sticky Images */}
                    <div
                        className="sticky-wrap"
                        id="sticky_item"
                        style={{
                            position: "sticky",
                            top: 0,
                            width: "50%",
                            height: "100vh",
                            overflow: "hidden",
                            flexShrink: 0,
                        }}
                    >
                        {portfolio_data.map((item, index) => (
                            <div
                                key={item.id}
                                id={`tab-${index + 1}`}
                                className={`project-img background-image ${index === activeIndex ? "current" : ""}`}
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    display: index === activeIndex ? "block" : "none",
                                    width: "100%",
                                    height: "100%",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <div
                        className="project-content-wrap bg-title"
                        style={{
                            width: "50%",
                            flexShrink: 0,
                        }}
                    >
                        {portfolio_data.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => {
                                    contentRefs.current[index] = el;
                                }}
                                data-tab={`tab-${index + 1}`}
                                className={`project-content ${index === activeIndex ? "current active" : ""
                                    }`}
                            >
                                <div className="hidden-img">
                                    <img src={item.img} alt="img" />
                                </div>

                                <div className="portfolio-wrap style13">
                                    <div className="portfolio-details">
                                        <div className="media-left">
                                            <ul className="portfolio-meta">
                                                {item.category.map((cat, i) => (
                                                    <li key={i}>
                                                        <NavLink to="/blog">{cat}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>

                                            <h3 className="portfolio-title">
                                                <NavLink to="/project-details">{item.title}</NavLink>
                                            </h3>
                                        </div>

                                        <div className="portfolio-details-btn">
                                            <NavLink to="/project-details" className="link-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">VIEW PROJECT</span>
                                                    <span className="effect-1">VIEW PROJECT</span>
                                                </span>
                                                <img
                                                    src="/assets/img/icon/arrow-left-top.svg"
                                                    alt="icon"
                                                />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioThirteen;