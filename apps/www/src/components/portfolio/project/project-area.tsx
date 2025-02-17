import { NavLink } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const portfolio_data = [
  {
    id: 1,
    imageSrc: "/assets/img/portfolio/portfolio1_1.jpg",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Money Laundering Compliance Scanner",
    title: "Decentralized Platform",
  },
  {
    id: 2,
    imageSrc: "/assets/img/portfolio/portfolio1_2.jpg",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Decentralized Lending Platform for Students",
    title: "App for Business",
  },
  {
    id: 3,
    imageSrc: "/assets/img/portfolio/portfolio1_3.jpg",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Anti Money Laundering Compliance Scanner",
    title: "Website Development",
  },
  {
    id: 4,
    imageSrc: "/assets/img/portfolio/portfolio1_4.jpg",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Shopify Redesign for a Nova Scotia Winery",
    title: "Nova Scotia Winery",
  },
  {
    id: 5,
    imageSrc: "/assets/img/portfolio/portfolio1_5.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle: "Trading Website Design & Development",
    title: "Educational Platform",
  },
  {
    id: 6,
    imageSrc: "/assets/img/portfolio/portfolio1_6.png",
    categoryLinks: ["Branding", "Development", "Marketing"],
    projectTitle:
      "Shopify Redesign for a Nova Scotia",
    title: "Educational Platform",
  },
]

export default function ProjectArea() {

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">

        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2 }}>
          <Masonry gutter="60px" className="masonary-active">
            {portfolio_data.map((elm) => (
              <div key={elm.id} className="">
                <div className={`portfolio-wrap ${elm.id == 1 ? "mt-lg-140" : ""} `}>
                  <div className="portfolio-thumb">
                    <NavLink to={`/project-details`}>
                      <img
                        src={elm.imageSrc}
                        alt="portfolio"
                      />
                    </NavLink>
                  </div>
                  <div className="portfolio-details">
                    <ul className="portfolio-meta">
                      {elm.categoryLinks.map((elm2, i2) => (
                        <li key={i2}>
                          <a href="#">{elm2}</a>
                        </li>
                      ))}
                    </ul>
                    <h3 className="portfolio-title">
                      <a href="#">{elm.projectTitle}</a>
                    </h3>
                    <NavLink
                      to={`/project-details`}
                      className="link-btn"
                    >
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
            ))}
          </Masonry>
        </ResponsiveMasonry>


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
