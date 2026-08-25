import { NavLink } from "react-router-dom"

const portfolio_data = [
    {
        id: 1,
        imageSrc: "/assets/img/portfolio/portfolio17_1.jpg",
        category: "AI Solution",
        title: "Autonomous Vehicle Navigation with Advanced Neural Networks",
    },
    {
        id: 2,
        imageSrc: "/assets/img/portfolio/portfolio17_2.jpg",
        category: "AI Solution",
        title: "AI for Large Corporations and  Businesses Across Industries",
    },
    {
        id: 3,
        imageSrc: "/assets/img/portfolio/portfolio17_3.jpg",
        category: "AI Solution",
        title: "Shaping the Future through Cutting-Edge AI Endeavors",
    },
    {
        id: 4,
        imageSrc: "/assets/img/portfolio/portfolio17_4.jpg",
        category: "AI Solution",
        title: "Autonomous Vehicle Navigation with Advanced Neural Networks",
    },
]

const PortfolioSeventeen = () => {
    return (
        <div className="portfolio-area-17 space overflow-hidden">
            <div className="container container3">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="title-area text-center">
                            <h2 className="sec-title">Pioneering Projects for Intelligent Solutions</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-container">
                <div className="row gy-4 justify-content-center">
                    {portfolio_data.map((item) => (
                        <div key={item.id} className="col-xxl-3 col-xl-4 col-md-6">
                            <NavLink to={`/project-details`} className="portfolio-wrap style16">
                                <div className="portfolio-thumb">
                                    <img src={item.imageSrc} alt="portfolio" />
                                </div>
                                <div className="portfolio-details">
                                    <span className="portfolio-meta">
                                        {item.category}
                                    </span>
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

export default PortfolioSeventeen
