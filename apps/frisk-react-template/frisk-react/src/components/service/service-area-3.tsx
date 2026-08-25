import { NavLink } from "react-router-dom"

const service_data = [
    {
        id: 1,
        iconSrc: "/assets/img/service/service-icon17-1.png",
        title: "AI Strategy and Consulting",
        text: "We design high quality websites that make back for more. A good website tells a story that make users immerse themselves operating",
    },
    {
        id: 2,
        iconSrc: "/assets/img/service/service-icon17-2.png",
        title: "Natural Language Processing",
        text: "We design high quality websites that make back for more. A good website tells a story that make users immerse themselves operating",
    },
    {
        id: 3,
        iconSrc: "/assets/img/service/service-icon17-3.png",
        title: "AI Increasing Finance",
        text: "We design high quality websites that make back for more. A good website tells a story that make users immerse themselves operating",
    },
    {
        id: 4,
        iconSrc: "/assets/img/service/service-icon17-4.png",
        title: "Neural Network Integration",
        text: "We design high quality websites that make back for more. A good website tells a story that make users immerse themselves operating",
    },
]

const ServiceAreaThree = () => {
    return (
        <div className="space">
            <div className="container container3">
                <div className="row justify-content-xl-between justify-content-center">
                    <div className="col-xxl-5 col-xl-6 position-relative">
                        <div className="sec_title_static">
                            <div className="sec_title_wrap">
                                <div className="title-area">
                                    <h2 className="sec-title">Advanced Neural Features Tailored to Your Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6">
                        <div className="service-card-wrap">
                            {service_data.map((item) => (
                                <div key={item.id} className="service-card2">
                                    <span className="box-number">0{item.id}</span>
                                    <div className="box-content">
                                        <h4 className="box-title"><NavLink to="/about">{item.title}</NavLink></h4>
                                        <p className="box-text">{item.text}</p>
                                    </div>
                                    <div className="box-icon">
                                        <img src={item.iconSrc} alt="img" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceAreaThree
