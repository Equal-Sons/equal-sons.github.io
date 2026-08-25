import CounterItem from "../counter/counter-item"

const HeroBannerFourteen = () => {
    return (
        <div className="hero-wrapper hero-14 bg-title" id="hero">
            <div className="container">
                <div className="hero-style14">
                    <div className="row gy-40 justify-content-between">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">Digital</h1>
                            <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.7s" data-wow-delay="0.1s">Marketing</h1>
                            <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.9s" data-wow-delay="0.1s">Solutions</h1>
                            <p className="hero-text text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">We are digital agency that helps businesses develop immersive and engaging experiences that</p>
                        </div>
                        <div className="col-auto align-self-center">
                            <div className="hero-counter-wrap wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                <h2 className="counter-title text-white"><span className="counter-number"><CounterItem min={0} max={26} /> </span>%</h2>
                                <h4 className="counter-subtitle text-white">Annual Momentum of Progress</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-14-thumb">
                <img src="/assets/img/hero/hero-14-1.png" alt="img" />
            </div>
        </div>
    )
}

export default HeroBannerFourteen
