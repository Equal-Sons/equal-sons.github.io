
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
]
export default function PortfolioFour() {
  return (
    <div className="project-area-5 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">
                Discover Our Selected Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-60 gx-60 justify-content-center">
          {project_data.map((project) => (
            <div key={project.id} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap style4">
                <div
                  className="portfolio-thumb wow img-custom-anim-top animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <a href={`/project-details`}>
                    <img
                      src={project.imageSrc}
                      alt="portfolio"
                    />
                  </a>
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title">
                    <a href={`/project-details`}>
                      {project.title}
                    </a>
                  </h3>
                  <ul className="portfolio-meta">
                    {project.categories.map((category, index) => (
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
        <div className="btn-wrap mt-50 justify-content-center">
          <a
            href="/project"
            className="btn bg-theme text-title"
          >
            <span className="link-effect">
              <span className="effect-1">VIEW ALL PROJECTS</span>
              <span className="effect-1">VIEW ALL PROJECTS</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
