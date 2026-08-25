import { NavLink } from "react-router-dom";

const project_data = [
    {
        id: 1,
        title: "Decentralized Platform",
        imageSrc: "/assets/img/portfolio/portfolio4_1.png",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 2,
        title: "App for Business",
        imageSrc: "/assets/img/portfolio/portfolio4_2.png",
        categories: ["Development", "Marketing"],
    },
    {
        id: 3,
        title: "Educational Platform",
        imageSrc: "/assets/img/portfolio/portfolio4_3.png",
        categories: ["Marketing", "Branding"],
    },
    {
        id: 4,
        title: "Nova Scotia Winery",
        imageSrc: "/assets/img/portfolio/portfolio4_4.png",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 5,
        title: "Caramba Product",
        imageSrc: "/assets/img/portfolio/portfolio4_5.png",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 6,
        title: "Trading Website Design",
        imageSrc: "/assets/img/portfolio/portfolio4_6.png",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 7,
        title: "Ticket Booking App",
        imageSrc: "/assets/img/portfolio/portfolio4_7.png",
        categories: ["Branding", "Marketing"],
    },
    {
        id: 8,
        title: "Fund Management",
        imageSrc: "/assets/img/portfolio/portfolio4_8.png",
        categories: ["Branding", "Development", "Marketing"],
    },
    {
        id: 9,
        title: "Quartier Petit Champlain",
        imageSrc: "/assets/img/portfolio/portfolio4_9.png",
        categories: ["Development", "Marketing"],
    },
    {
        id: 10,
        title: "Intelligent Dashboard",
        imageSrc: "/assets/img/portfolio/portfolio4_10.png",
        categories: ["Marketing", "Business"],
    },
]

const PortfolioNine = () => {
    return (
        <div className="portfolio-area-1 space-bottom overflow-hidden">
            <div className="container">
                <div className="row gy-40 gx-60 justify-content-center">
                    {project_data.map((item) => (
                        <div key={item.id} className="col-xl-6 col-lg-6">
                            <div className="portfolio-wrap">
                                <div className="portfolio-thumb">
                                    <NavLink to="/project-details">
                                        <img src={item.imageSrc} alt="portfolio" />
                                    </NavLink>
                                </div>
                                <div className="portfolio-details">
                                    <h3 className="portfolio-title mb-3"><NavLink to="/project-details">Decentralized Platform</NavLink></h3>
                                    <ul className="portfolio-meta">

                                        {item.categories.map((category, index) => (
                                            <li key={index}>
                                                <a href="#">{category}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default PortfolioNine
