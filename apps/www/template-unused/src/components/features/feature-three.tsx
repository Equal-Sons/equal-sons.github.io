import { NavLink } from 'react-router-dom';

type IFeatureDT = {
  id: number;
  iconSrc: string;
  title: string;
  text: string;
}
const featureData: IFeatureDT[] = [
  {
    id: 1,
    iconSrc: "/assets/img/icon/feature-icon1-1.svg",
    title: "Branding Design",
    text: "We care success relationships fuel real success. We love building brands and helping",
  },
  {
    id: 2,
    iconSrc: "/assets/img/icon/feature-icon1-2.svg",
    title: "Website Development",
    text: "We care success relationships fuel real success. We love building brands and helping",
  },
  {
    id: 3,
    iconSrc: "/assets/img/icon/feature-icon1-3.svg",
    title: "Illustration Modelling",
    text: "We care success relationships fuel real success. We love building brands and helping",
  },
  {
    id: 4,
    iconSrc: "/assets/img/icon/feature-icon1-4.svg",
    title: "Digital Marketing",
    text: "We care success relationships fuel real success. We love building brands and helping",
  },
]

function FeatureCardItem({ elm }: { elm: IFeatureDT }) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon">
        <img
          src={elm.iconSrc}
          alt="icon"
        />
      </div>
      <h4 className="feature-card-title">
        <a href="#">{elm.title}</a>
      </h4>
      <p className="feature-card-text">{elm.text}</p>
      <NavLink
        to={`/service-details`}
        className="link-btn"
      >
        <span className="link-effect">
          <span className="effect-1">VIEW DETAILS</span>
          <span className="effect-1">VIEW DETAILS</span>
        </span>
        <img
          src="/assets/img/icon/arrow-left-top.svg"
          alt="icon"
        />
      </NavLink>
    </div>
  )
}
const FeatureThree = () => {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-4 col-lg-8 position-relative">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area">
                  <h2 className="sec-title">What We Can Do for Our Clients</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-8">
            <div className="feature-static-wrap">
              <div className="feature-static">
                <div className="row gy-4">
                  {featureData.slice(0, 2).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <FeatureCardItem elm={elm} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-static">
                <div className="row gy-4">
                  {featureData.slice(2, 4).map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <FeatureCardItem elm={elm} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureThree;