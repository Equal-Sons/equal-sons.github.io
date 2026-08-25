import { NavLink } from "react-router-dom";

const feature_data = [
    {
        id: 1,
        icon: "/assets/img/icon/feature-icon1-1.svg",
        title: "Website Development",
        text: "We care success relationships fuel real success We love building brands and helping",
        list: ["Interaction Design", "Product Design", "3D Modeling/Animation",],
    },
    {
        id: 2,
        icon: "/assets/img/icon/feature-icon1-2.svg",
        title: "Branding & Visual Identity",
        text: "We care success relationships fuel real success We love building brands and helping",
        list: ["Interaction Design", "Product Design", "3D Modeling/Animation",],
    },
    {
        id: 3,
        icon: "/assets/img/icon/feature-icon1-3.svg",
        title: "Website Design & UI/UX",
        text: "We care success relationships fuel real success We love building brands and helping",
        list: ["Interaction Design", "Product Design", "3D Modeling/Animation",],
    },
    {
        id: 4,
        icon: "/assets/img/icon/feature-icon1-4.svg",
        title: "Project Management",
        text: "We care success relationships fuel real success We love building brands and helping",
        list: ["Interaction Design", "Product Design", "3D Modeling/Animation",],
    },
]

const FeatureEight = () => {
    return (
        <div className="feature-area-4 overflow-hidden space-bottom">
            <div className="container">
                <div className="feature-card-wrap4">
                    {feature_data.map((item) => (
                        <div key={item.id} className="feature-card style4">
                            <h4 className="feature-card-title">
                                <NavLink to={`/service-details`}>{item.title}</NavLink>
                            </h4>
                            <div className="feature-card-content">
                                <p className="feature-card-text">{item.text}</p>
                                <ul className="feature-card-list">
                                    {item.list.map((cat, i) => (
                                        <li key={i}>{cat}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="feature-card-icon">
                                <img src={item.icon} alt="icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureEight
