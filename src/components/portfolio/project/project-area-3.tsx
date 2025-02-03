import { NavLink } from "react-router-dom";

const portfolio_data = [
  {
    id: 1,
    imageSrc: "/assets/img/portfolio/portfolio4_1.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Money Laundering Compliance Scanner",
    title: "Decentralized Platform",
  },
  {
    id: 2,
    imageSrc: "/assets/img/portfolio/portfolio4_2.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Decentralized Lending Platform for Students",
    title: "App for Business",
  },
  {
    id: 3,
    imageSrc: "/assets/img/portfolio/portfolio4_3.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Anti Money Laundering Compliance Scanner",
    title: "Website Development",
  },
  {
    id: 4,
    imageSrc: "/assets/img/portfolio/portfolio4_4.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Shopify Redesign for a Nova Scotia Winery",
    title: "Nova Scotia Winery",
  },
  {
    id: 5,
    imageSrc: "/assets/img/portfolio/portfolio4_5.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Trading Website Design & Development",
    title: "Educational Platform",
  },
  {
    id: 6,
    imageSrc: "/assets/img/portfolio/portfolio4_6.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle:
      "Shopify Redesign for a Nova Scotia WineryProduct Lineup Industrial Design for Caramba",
    title: "Educational Platform",
  }
];

export default function ProjectAreaThree() {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-40 gx-60 justify-content-center">
          {portfolio_data.map((elm) => (
            <div key={elm.id} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap">
                <div className="portfolio-thumb">
                  <NavLink to={`/project-details`}>
                    <img
                      src={elm.imageSrc}
                      alt="portfolio"
                    />
                  </NavLink>
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title mb-3">
                    <NavLink to={`/project-details`}>
                      {elm.title}
                    </NavLink>
                  </h3>
                  <ul className="portfolio-meta">
                    {elm.categoryLinks.map((elm2, i2) => (
                      <li key={i2}>
                        <a href="#">{elm2}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-wrap justify-content-center mt-60">
          <NavLink className="btn" to="/project-2">
            <span className="link-effect">
              <span className="effect-1">LOAD MORE</span>
              <span className="effect-1">LOAD MORE</span>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
