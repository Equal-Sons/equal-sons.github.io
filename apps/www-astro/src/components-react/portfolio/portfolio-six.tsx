
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

export default function PortfolioSix() {
  return (
    <div className="project-area-8 space bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">
                Discover My Selected Projects
              </h2>
            </div>
          </div>
        </div>
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
                      <a href={`/project-details`}>
                        {elm.title}
                      </a>
                    </h3>
                  </div>
                  <div className="portfolio-details-btn">
                    <a
                      href={`/project-details`}
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 text-center">
            <a href="/project" className="btn style2 mt-30">
              <span className="link-effect">
                <span className="effect-1">VIEW ALL PROJECTS</span>
                <span className="effect-1">VIEW ALL PROJECTS</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
