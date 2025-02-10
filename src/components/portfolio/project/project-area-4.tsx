import { NavLink } from "react-router-dom";

const portfolio_data = [
  {
    id: 1,
    title: "Decentralized Platform",
    imageSrc: "/assets/img/portfolio/portfolio5_1.jpg",

    categories: ["Branding", "Development", "Marketing"],
  },
  {
    id: 2,
    title: "App for Business",
    imageSrc: "/assets/img/portfolio/portfolio5_2.jpg",
    categories: ["Development", "Marketing"],
  },
  {
    id: 3,
    title: "Educational Platform",
    imageSrc: "/assets/img/portfolio/portfolio5_3.jpg",
    categories: ["Marketing", "Branding"],
  },
  {
    id: 4,
    title: "Nova Scotia Winery",
    imageSrc: "/assets/img/portfolio/portfolio5_4.jpg",
    categories: ["Branding", "Development", "Marketing"],
  },
]

export default function ProjectAreaFour() {
  return (
    <div className="project-area-8 space">
      <div className="container">
        <div className="row gy-4">
          {portfolio_data.map((elm) => (
            <div key={elm.id} className="col-12">
            <div className="portfolio-wrap style3">
              <div className="portfolio-thumb">
                <img
                  src={elm.imageSrc}
                  alt="portfolio"
                />
              </div>
              <div className="portfolio-details">
                <div className="media-left">
                  <ul className="portfolio-meta">
                    {elm.categories.map((elm2, i2) => (
                      <li key={i2}>
                        <a href="#">{elm2}</a>
                      </li>
                    ))}
                  </ul>
                  <h3 className="portfolio-title">
                    <NavLink to={`/project-details`}>
                      {elm.title}
                    </NavLink>
                  </h3>
                </div>
                <div className="portfolio-details-btn">
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
