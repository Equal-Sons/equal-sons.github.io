
const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icon/feature-icon1-1.svg",
    title: "Branding Design",
    text: "We care success relationships fuel success we love building",
  },
  {
    id: 2,
    icon: "/assets/img/icon/feature-icon1-2.svg",
    title: "Web Development",
    text: "We care success relationships fuel success we love building",
  },
  {
    id: 3,
    icon: "/assets/img/icon/feature-icon1-3.svg",
    title: "Digital Marketing",
    text: "We care success relationships fuel success we love building",
  },
]

export default function FeatureSeven() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {feature_data.map((elm, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="feature-card style2">
                <div className="feature-card-icon">
                  <img src={elm.icon} alt="icon" />
                </div>
                <h4 className="feature-card-title">
                  <a href="#">{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <a href={`/service-details/${elm.id}`} className="link-btn">
                  <span className="link-effect">
                    <span className="effect-1">VIEW DETAILS</span>
                    <span className="effect-1">VIEW DETAILS</span>
                  </span>
                  <img
                    src="/assets/img/icon/arrow-left-top.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
