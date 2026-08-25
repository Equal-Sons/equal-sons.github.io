import { NavLink } from "react-router-dom";

const portfolio_data = [
    {
        id: 1,
        col: "col-lg-5",
        title: "Laundering Compliance",
        imageSrc: "/assets/img/portfolio/portfolio16_1.jpg",
        categories: "Branding",
    },
    {
        id: 2,
        col: "col-lg-7",
        title: "Decentralized Platform",
        imageSrc: "/assets/img/portfolio/portfolio16_2.jpg",
        categories: "Branding",
    },
    {
        id: 3,
        col: "col-lg-7",
        title: "Decentralized Platform",
        imageSrc: "/assets/img/portfolio/portfolio16_3.jpg",
        categories: "Branding",
    },
    {
        id: 4,
        col: "col-lg-5",
        title: "Decentralized Platform",
        imageSrc: "/assets/img/portfolio/portfolio16_4.jpg",
        categories: "Branding",
    },
    {
        id: 5,
        col: "col-lg-7",
        title: "Decentralized Platform",
        imageSrc: "/assets/img/portfolio/portfolio16_6.jpg",
        categories: "Branding",
    },
    {
        id: 6,
        col: "col-lg-5",
        title: "Decentralized Platform",
        imageSrc: "/assets/img/portfolio/portfolio16_5.jpg",
        categories: "Branding",
    },
]

const PortfolioSixteen = () => {
    return (
        <div className="portfolio-area-1 space-bottom overflow-hidden">
            <div className="container">
                <div className="row gy-60 gx-60 justify-content-center">
                    {portfolio_data.map((item) => (
                        <div key={item.id} className={item.col}>
                            <NavLink to={`/project-details`} className="portfolio-wrap style3">
                                <div className="portfolio-thumb">
                                    <img src={item.imageSrc} alt="portfolio" />
                                </div>
                                <div className="portfolio-details">
                                    <ul className="portfolio-meta">
                                        <li>{item.categories}</li>
                                    </ul>
                                    <h3 className="portfolio-title">{item.title}</h3>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default PortfolioSixteen
