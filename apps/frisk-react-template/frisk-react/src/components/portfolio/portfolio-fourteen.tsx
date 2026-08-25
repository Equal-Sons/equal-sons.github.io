import { Link } from "react-router-dom";
import Slider from "react-slick";

interface IPortfolioDT {
    id: number;
    imageSrc: string;
    category: string[];
    title: string;
}

const portfolio_data: IPortfolioDT[] = [
    {
        id: 1,
        imageSrc: "/assets/img/portfolio/portfolio14_1.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
    {
        id: 2,
        imageSrc: "/assets/img/portfolio/portfolio14_2.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
    {
        id: 3,
        imageSrc: "/assets/img/portfolio/portfolio14_3.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
    {
        id: 4,
        imageSrc: "/assets/img/portfolio/portfolio14_4.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
    {
        id: 5,
        imageSrc: "/assets/img/portfolio/portfolio14_1.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
    {
        id: 6,
        imageSrc: "/assets/img/portfolio/portfolio14_2.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
    {
        id: 7,
        imageSrc: "/assets/img/portfolio/portfolio14_3.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
    {
        id: 8,
        imageSrc: "/assets/img/portfolio/portfolio14_4.jpg",
        category: ["Branding", "Development", "Marketing",],
        title: "Decentralized Platform",
    },
];

const setting = {
    dots: false,
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
                slidesToScroll: 1,
            },
        },
    ],
};


const PortfolioFourteen = () => {
    return (
        <div className="portfolio-area-14 space overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="title-area">
                            <h2 className="sec-title">Discover Our Selected Projects</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Slider {...setting} className="row global-carousel gx-60 portfolio-slider14">
                    {portfolio_data.map((item) => (
                        <div key={item.id} className="col-lg-4 sliderItem">
                            <div className="portfolio-wrap style2">
                                <div className="portfolio-thumb">
                                    <img src={item.imageSrc} alt="portfolio" />
                                </div>
                                <div className="portfolio-details">
                                    <Link to="/project-details"><h3 className="portfolio-title">{item.title}</h3></Link>
                                    <ul className="portfolio-meta mb-0 mt-4">
                                        {item.category.map((cat, i) => (
                                            <li key={i}>{cat}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default PortfolioFourteen 
