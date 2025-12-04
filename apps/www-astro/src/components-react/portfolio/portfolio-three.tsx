
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
]

type IProps = {
  space?:string;
}

const PortfolioThree = ({space='space-bottom'}:IProps) => {
  return (
    <div className={`project-area-4 ${space} overflow-hidden`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Discover Our Selected Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center masonary-active">
          {portfolio_data.map((elm, i) => (
            <div key={i} className={elm.parentClass}>
              <a
                href={`/project-details`}
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
              </a>
            </div>
          ))}
        </div>
        <div className="btn-wrap mt-50 justify-content-center">
          <a href="/project" className="btn">
            <span className="link-effect">
              <span className="effect-1">VIEW ALL PROJECTS</span>
              <span className="effect-1">VIEW ALL PROJECTS</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioThree;