import { NavLink } from "react-router-dom";

const portfolio_data = [
  {
    id: 1,
    imageUrl: "/assets/img/portfolio/portfolio3_1.jpg",
    category: "Branding",
    title: "Decentralized Platform",
    parentClass: "col-lg-7",
  },
  {
    id: 2,
    imageUrl: "/assets/img/portfolio/portfolio3_2.jpg",
    category: "Branding",
    title: "Laundering Compliance",
    parentClass: "col-lg-5",
  },
  {
    id: 3,
    imageUrl: "/assets/img/portfolio/portfolio3_3.jpg",
    category: "Branding",
    title: "Anti Money Laundering",
    parentClass: "col-lg-12",
  },
  {
    id: 4,
    imageUrl: "/assets/img/portfolio/portfolio3_4.png",
    category: "Branding",
    title: "Anti Money Laundering",
    parentClass: "col-lg-5",
  },
  {
    id: 5,
    imageUrl: "/assets/img/portfolio/portfolio3_5.png",
    category: "Branding",
    title: "Anti Money Laundering",
    parentClass: "col-lg-7",
  },
  {
    id: 6,
    imageUrl: "/assets/img/portfolio/portfolio3_6.png",
    category: "Branding",
    title: "Anti Money Laundering",
    parentClass: "col-lg-12",
  },
]
export default function ProjectAreaTwo() {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {portfolio_data.map((elm, i) => (
            <div key={i} className={elm.parentClass}>
              <NavLink
                to={`/project-details`}
                className="portfolio-wrap style3"
              >
                <div className="portfolio-thumb">
                  <img
                    src={elm.imageUrl}
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-details">
                  <ul className="portfolio-meta">
                    <li>{elm.category}</li>
                  </ul>
                  <h3 className="portfolio-title">{elm.title}</h3>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="btn-wrap justify-content-center mt-60">
          <NavLink className="btn" to={`/project`}>
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
