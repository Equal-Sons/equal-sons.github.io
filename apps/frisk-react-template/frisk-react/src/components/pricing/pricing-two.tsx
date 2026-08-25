import { Link } from "react-router-dom";

const pricing_data = [
    {
        id: 1,
        title: "Personal",
        price: 90,
        text: "We care about their success. For us real relationships fuel real",
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
        price: 180,
        text: "We care about their success. For us real relationships fuel real",
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
        title: "Corporate",
        price: 410,
        text: "We care about their success. For us real relationships fuel real",
        features: [
            "Web & Mobile",
            "Free Custom Domain",
            "Best Hosting Ever",
            "Outstanding Support",
            "Web Design",
        ],
    },
];

const PricingTwo = () => {
    return (
        <div className="space bg-title">
            <div className="container">
                <div className="title-area text-center">
                    <h2 className="sec-title text-white">Best Pricing Plan</h2>
                </div>
                <div className="row gx-0 justify-content-center">
                    {pricing_data.map((elm, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="pricing-card style2">
                                <h4 className="pricing-card_title text-smoke">{elm.title}</h4>
                                <p className="text-smoke">{elm.text}</p>
                                <div className="checklist">
                                    <ul>
                                        {elm.features.map((elm2, i2) => (
                                            <li key={i2}>
                                                <i className="fas fa-check"></i> {elm2}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="price-card-wrap">
                                    <h4 className="pricing-card_price"><span className="currency">$</span>{elm.price}<span className="duration">/mo</span>
                                    </h4>
                                </div>
                                <Link to="/project" className="btn style7">
                                    <span className="link-effect">
                                        <span className="effect-1">CHOOSE THIS PLAN</span>
                                        <span className="effect-1">CHOOSE THIS PLAN</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingTwo
