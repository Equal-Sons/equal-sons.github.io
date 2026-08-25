import { NavLink } from "react-router-dom";

const portfolio_data = [
    {
        id: 1,
        title: "Money Laundering Compliance Scanner",
        imageSrc: "/assets/img/portfolio/portfolio8_3.jpg",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 2,
        title: "Anti Money Laundering Compliance Scanner",
        imageSrc: "/assets/img/portfolio/portfolio8_4.jpg",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 3,
        title: "Decentralized Lending Platform for Students",
        imageSrc: "/assets/img/portfolio/portfolio8_5.jpg",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 4,
        title: "Shopify Redesign for a Nova Scotia Winery",
        imageSrc: "/assets/img/portfolio/portfolio8_2.jpg",
        categories: ["Branding", "Development", "Marketing"],
    },
]

const PortfolioFifteen = () => {
    return (
        <div className="portfolio-area-15 space bg-smoke overflow-hidden">
            <div className="container">
                <div className="title-area text-center">
                    <h2 className="sec-title style3">Latest Projects</h2>
                </div>
            </div>
            <div className="container">
                <div className="project-wrap15">
                    {portfolio_data.map((item) => (
                        <div key={item.id} className="portfolio-wrap style15">
                            <div className="portfolio-thumb wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <NavLink to={`/project-details`}>
                                    <img src={item.imageSrc} alt="portfolio" />
                                </NavLink>
                            </div>
                            <div className="portfolio-details">
                                <div className="media-left">
                                    <ul className="portfolio-meta">
                                        {item.categories.map((cat, i) => (
                                            <li key={i}><a href="/blog">{cat}</a></li>
                                        ))}
                                    </ul>
                                    <h3 className="portfolio-title"><NavLink to={`/project-details`}>{item.title}</NavLink></h3>
                                </div>
                                <div className="portfolio-details-btn">
                                    <NavLink to={`/project-details`} className="link-btn">
                                        <span className="link-effect">
                                            <span className="effect-1">VIEW PROJECT</span>
                                            <span className="effect-1">VIEW PROJECT</span>
                                        </span>
                                        <img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioFifteen
