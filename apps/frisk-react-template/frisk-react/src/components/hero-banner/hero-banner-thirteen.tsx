import { Link } from "react-router-dom"

const HeroBannerThirteen = () => {
    return (
        <div className="hero-wrapper hero-13" id="hero">
            <div className="container">
                <div className="hero-style13">
                    <div className="hero-thumb13-1 wow img-custom-anim-right fade_right" data-wow-duration="1.5s" data-wow-delay="0.1s">
                        <img data-mask-src="/assets/img/hero/hero-mask13-1.png" src="assets/img/hero/hero-13-1.png" alt="img" />
                    </div>
                    <div className="hero-thumb13-2 wow img-custom-anim-left fade_left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                        <img className="spin-slow" data-mask-src="/assets/img/hero/hero-mask13-2.png" src="/assets/img/hero/hero-13-2.png" alt="img" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <h1 className="hero-title text-sm-end wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s"><img src="/assets/img/normal/client_group_thumb_1-1.jpg" alt="img" /> We Craft</h1>
                            <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.7s" data-wow-delay="0.1s">Brands That</h1>
                            <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.9s" data-wow-delay="0.1s">Inspire Sharing</h1>
                            <h1 className="hero-title text-sm-center wow img-custom-anim-left" data-wow-duration="1.9s" data-wow-delay="0.1s">& Growth</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="hero-text text-sm-center wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">We are digital agency that helps businesses develop immersive and engaging user experiences that drive top level growth</p>
                            <div className="btn-group fade_right justify-content-sm-center">
                                <Link to="/project" className="btn wow img-custom-anim-left" >
                                    <span className="link-effect">
                                        <span className="effect-1">VIEW OUR WORKS</span>
                                        <span className="effect-1">VIEW OUR WORKS</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBannerThirteen
