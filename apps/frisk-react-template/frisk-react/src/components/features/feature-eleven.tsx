import { NavLink } from "react-router-dom";

const feature_data = [
    {
        id: 1,
        icon: "/assets/img/icon/feature-icon1-1.svg",
        title: "Branding Design",
        text: "We care success relationships fuel real success We love building brands and helping",
        list: ["Interaction Design", "Product Design", "3D Modeling/Animation",],
    },
    {
        id: 2,
        icon: "/assets/img/icon/feature-icon1-2.svg",
        title: "Motion Graphics",
        text: "We care success relationships fuel real success We love building brands and helping",
        list: ["Interaction Design", "Product Design", "3D Modeling/Animation",],
    },
    {
        id: 3,
        icon: "/assets/img/icon/feature-icon1-3.svg",
        title: "Digital Solution",
        text: "We care success relationships fuel real success We love building brands and helping",
        list: ["Interaction Design", "Product Design", "3D Modeling/Animation",],
    },
]

const FeatureEleven = () => {
    return (
        <div className="feature-area-3 space">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="title-area text-center">
                            <h2 className="sec-title">What We Can Do for Our Clients</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    {feature_data.map((item) => (
                        <div key={item.id} className="col-xl-4 col-md-6">
                            <div className="feature-card style3">
                                <div className="title-wrap">
                                    <h4 className="feature-card-title">
                                        <NavLink to={`/service-details`}>{item.title}</NavLink>
                                    </h4>
                                    <div className="feature-card-icon">
                                        <img src={item.icon} alt="icon" />
                                    </div>
                                </div>
                                <p className="feature-card-text">{item.text}</p>
                                <ul className="feature-card-list">
                                    {item.list.map((cat, i) => (
                                        <li key={i}>{cat}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureEleven
