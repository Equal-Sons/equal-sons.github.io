import { NavLink } from "react-router-dom"

const feature_data = [
    {
        id: 1,
        bg_img: "assets/img/normal/offer-card1-1.jpg",
        sub_title: "Best summer collections",
        title: "Adidas Premium Clothes",
    },
    {
        id: 2,
        bg_img: "assets/img/normal/offer-card1-2.jpg",
        sub_title: "Running and lifestyle shoes",
        title: "Nike Sneakers Everyday",
    },
]

const FeatureTen = () => {
    return (
        <div className="offer-area-1 overflow-hidden space">
            <div className="container container3">
                <div className="row gy-4">
                    {feature_data.map((item) => (
                        <div key={item.id} className="col-md-6">
                            <div className="offer-card" data-overlay="title" data-opacity="2" style={{backgroundImage:`url(${item.bg_img})`}} data-bg-src="assets/img/normal/offer-card1-1.jpg">
                                <div className="box-content">
                                    <span className="box-subtitle">{item.sub_title}</span>
                                    <h4 className="box-title">{item.title}</h4>
                                    <div className="btn-wrap">
                                        <NavLink to="/shop" className="btn style4">
                                            <span className="link-effect">
                                                <span className="effect-1">EXPLORE NOW</span>
                                                <span className="effect-1">EXPLORE NOW</span>
                                            </span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureTen
