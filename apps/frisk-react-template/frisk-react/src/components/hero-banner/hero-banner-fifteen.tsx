import { Link } from "react-router-dom"

const HeroBannerFifteen = () => {
    return (
        <div className="hero-wrapper hero-15" id="hero">
            <div className="hero-thumb-15-2 wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <img src="/assets/img/hero/hero-15-2.jpg" alt="img" />
            </div>
            <div className="hero-inner bg-title">
                <div className="container">
                    <div className="hero-style15">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 col-md-8">
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">Craft</h1>
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.7s" data-wow-delay="0.1s">Exceptional</h1>
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.9s" data-wow-delay="0.1s">Websites</h1>
                            </div>
                            <div className="col-xl-12">
                                <div className="hero-content-wrap wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                    <div className="hero-arrow-icon">
                                        <svg width="86" height="150" viewBox="0 0 86 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.36641 105.326C2.28642 105.406 1.6748 107.839 1.00774 110.734C0.34069 113.629 -0.103145 116.029 0.0207419 116.068C0.145001 116.106 2.15956 116.406 4.49778 116.733C9.1932 117.391 14.6755 118.984 18.1041 120.687C28.7896 125.993 35.8649 135.513 37.7039 147.06L38.1723 150L42.8926 150L47.6133 150L48.0616 147.335C50.9985 129.875 64.0873 118.492 83.6748 116.362C84.9538 116.223 86 116.057 86 115.993C86 115.404 83.6424 105.647 83.4557 105.463C83.3206 105.329 82.1216 105.428 80.7916 105.683C66.0639 108.507 54.0796 116.591 49.0687 127.082L47.8667 129.599L47.7726 2.08821e-06L38.2193 1.67062e-06L38.0997 77.9338L38.0052 129.561L36.3914 126.384C32.2049 118.142 23.9926 111.616 12.9697 107.774C9.82937 106.679 2.66998 105.026 2.36641 105.326Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="hero-text text-white mb-40">We are digital agency that helps develop immersive and engaging user experiences that drive top level growth</p>
                                    <Link to="/project" className="btn bg-theme text-title">
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
            <div className="hero-thumb-15-1 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <img src="/assets/img/hero/hero-15-1.jpg" alt="img" />
            </div>
        </div>
    )
}

export default HeroBannerFifteen
