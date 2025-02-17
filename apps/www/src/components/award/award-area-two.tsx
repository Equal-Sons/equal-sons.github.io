import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const award_data = [
  {
    id: 'one',
    year: "2017",
    img: "/assets/img/award/award-1-1.png",
    title: "Decentralized Platform",
    categories: ["Branding", "Development", "Marketing"],
    tag: "Webflow",
  },
  {
    id: 'two',
    year: "2019",
    img: "/assets/img/award/award-1-2.png",
    title: "App for Business",
    categories: ["Development", "Marketing"],
    tag: "Themeforest",
  },
  {
    id: 'three',
    year: "2019",
    img: "/assets/img/award/award-1-3.png",
    title: "Website Development",
    categories: ["Branding", "Development"],
    tag: "Framer",
  },
  {
    id: 'four',
    year: "2022",
    img: "/assets/img/award/award-1-4.png",
    title: "Nova Scotia Winery",
    categories: ["Branding", "Development", "Marketing"],
    tag: "Template monster",
  },
  {
    id: 'five',
    year: "2023",
    img: "/assets/img/award/award-1-5.png",
    title: "Educational Platform",
    categories: ["Marketing", "Branding"],
    tag: "Themeforest",
  },
]

const AwardAreaTwo = () => {
  return (
    <div className="award-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="award-wrap-area">
              {award_data.map((elm, i) => (
                <li
                  key={i}
                  className="single-award-list style2 tg-img-reveal-item"
                  data-tooltip-id={elm.id}
                >
                  <span className="award-year">{elm.year}</span>
                  <div className="award-details">
                    <h4>
                      <NavLink to={`/project-details`}>
                        {elm.title}
                      </NavLink>
                    </h4>
                    <div className="award-meta">
                      {elm.categories.map((elm2, i2) => (
                        <a key={i2} href="#">
                          {elm2}
                        </a>
                      ))}
                    </div>
                  </div>
                  <span className="award-tag">{elm.tag}</span>
                  <Tooltip
                    place="right-start"
                    render={() => (
                      <div
                        className=" wow img-custom-anim-top animated"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                        style={{ animationDuration: "0.5s" }}
                      >
                        <img
                          className="preload"
                          src={elm.img}
                          data-wow-duration="1.5s"
                          data-wow-delay="0.1s"
                          alt="image"
                        />
                      </div>
                    )}
                    float={true}
                    id={elm.id}
                  />
                </li>
              ))}
            </ul>
            <div className="btn-wrap mt-50 justify-content-center">
              <NavLink to={`/project`} className="btn">
                <span className="link-effect">
                  <span className="effect-1">VIEW ALL PROJECTS</span>
                  <span className="effect-1">VIEW ALL PROJECTS</span>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardAreaTwo;