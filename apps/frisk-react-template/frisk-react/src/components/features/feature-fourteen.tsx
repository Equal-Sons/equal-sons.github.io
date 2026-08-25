import type { JSX } from "react";

type IFeatureDT = {
  id: number;
  iconSrc: string;
  title: JSX.Element;
  text: string;
}
const featureData: IFeatureDT[] = [
  {
    id: 1,
    iconSrc: "/assets/img/icon/feature-icon1-1.svg",
    title: (<>Branding <br className="d-xl-block d-none" /> Design</>),
    text: "We design high quality websites that make users come more a good website tells",
  },
  {
    id: 2,
    iconSrc: "/assets/img/icon/feature-icon1-2.svg",
    title: (<>Illustration Modelling</>),
    text: "We design high quality websites that make users come more a good website tells",
  },
  {
    id: 3,
    iconSrc: "/assets/img/icon/feature-icon1-3.svg",
    title: (<>Website Development</>),
    text: "We design high quality websites that make users come more a good website tells",
  },
  {
    id: 4,
    iconSrc: "/assets/img/icon/feature-icon1-4.svg",
    title: (<>Digital <br className="d-xl-block d-none" /> Marketing</>),
    text: "We design high quality websites that make users come more a good website tells",
  },
]

function FeatureCardItem({ elm }: { elm: IFeatureDT }) {
  return (
    <div className="feature-card bg-white">
      <div className="feature-card-icon mb-4">
        <img
          src={elm.iconSrc}
          alt="icon"
        />
      </div>
      <h4 className="feature-card-title mb-0">
        <a href="#">{elm.title}</a>
      </h4>
      <p className="feature-card-text mb-n2 pt-100">{elm.text}</p>
    </div>
  )
}
const FeatureFourteen = () => {
  return (
    <div className="feature-area-1 space bg-smoke">
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

export default FeatureFourteen;