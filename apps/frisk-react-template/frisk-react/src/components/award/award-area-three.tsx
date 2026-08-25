import { NavLink } from 'react-router-dom';

const award_data = [
  {
    id: 1,
    year: "2023",
    title: "Best eCommerce Websites",
    tag: "Awwwards",
    active: "style3",
  },
  {
    id: 2,
    year: "2022 ",
    title: "Top Creative Agency in United State",
    tag: "Envato Elements",
  },
  {
    id: 3,
    year: "2022 ",
    title: "Behance Portfolio Review",
    tag: "Behance",
  },
  {
    id: 4,
    year: "2019 ",
    title: "Featured App Design of the Week",
    tag: "UI/UX Global Award",
  },
]

const AwardAreaThree = () => {
  return (
    <div className="service-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="service-img-1-1 shape-mockup wow img-custom-anim-left animated"
        style={{
          top: "-100px",
          left: "0px",
          bottom: "140px",
          visibility: "visible",
        }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
      >
        <img
          src="/assets/img/normal/achievement_1-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="about-content-wrap">
              <div className="title-area">
                <h2 className="sec-title">Achievements</h2>
              </div>
              <ul className="award-wrap-area">
                {award_data.map((item) => (
                  <li key={item.id} className={`single-award-list ${item.active ? "style3" : ""}`}>
                    <div className="award-details ms-0">
                      <h4><NavLink to="/about">{item.title}</NavLink></h4>
                      <p>{item.year} / {item.tag}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardAreaThree;