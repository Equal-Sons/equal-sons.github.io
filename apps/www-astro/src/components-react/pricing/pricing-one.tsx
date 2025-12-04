

const pricing_data = [
  {
    id: 1,
    title: "Startup",
    price: 100,

    features: [
      "Web & Mobile",
      "Free Custom Domain",
      "Best Hosting Ever",
      "Outstanding Support",
      "Web Design",
    ],
  },
  {
    id: 2,
    title: "Startup",
    price: 120,

    features: [
      "Web & Mobile",
      "Free Custom Domain",
      "Best Hosting Ever",
      "Outstanding Support",
      "Web Design",
    ],
  },
  {
    id: 3,
    title: "Startup",
    price: 180,

    features: [
      "Web & Mobile",
      "Free Custom Domain",
      "Best Hosting Ever",
      "Outstanding Support",
      "Web Design",
    ],
  },
];

const PricingOne = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Best Pricing Plan</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {pricing_data.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="pricing-card bg-smoke">
                <h4 className="pricing-card_title">{elm.title}</h4>
                <div className="price-card-wrap">
                  <h4 className="pricing-card_price">
                    <span className="currency">$</span>
                    {elm.price}
                    <span className="duration">/mo</span>
                  </h4>
                </div>
                <p>{elm.title}</p>
                <div className="checklist">
                  <ul>
                    {elm.features.map((elm2, i2) => (
                      <li key={i2}>
                        <i className="fas fa-check"></i> {elm2}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/project" className="btn">
                  <span className="link-effect">
                    <span className="effect-1">CHOOSE THIS PLAN</span>
                    <span className="effect-1">CHOOSE THIS PLAN</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingOne;