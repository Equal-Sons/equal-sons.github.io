import { useEffect, type RefObject } from "react";
import { useParallax } from "react-scroll-parallax";
import addGsap from "../../utils/addGsap";

const HeroBannerSixteen = () => {

    const parallax = useParallax({
        speed: -20,
    });

    useEffect(() => {
        addGsap();
    }, []);

    return (
        <div className="hero-wrapper hero-16" id="hero">
            <div className="container">
                <div className="hero-style16">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">Creating</h1>

                            <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.7s" data-wow-delay="0.1s">Design Agency</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="hero-text wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">We are digital agency that helps businesses develop immersive and engaging user experiences that drive top level growth</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="hero-thumb-wrap16">
                <div className="text-circle-wrap">
                    <div className="box-icon">
                        <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.966 59.4L0 59.4L0 48.6L40.9608 48.6L19.3619 27L26.9984 19.3631L48.6 40.9657L48.6 0L59.4 0L59.4 40.9651L81.001 19.3631L88.6376 27L67.0386 48.6H108V59.4H67.0334L88.6376 81.0053L81.001 88.6422L59.4 67.0402V108H48.6V67.0395L26.9984 88.6422L19.3619 81.0053L40.966 59.4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <svg className="text-circle spin" viewBox="0 0 300 300" width="236" height="236">
                        <defs>
                            <path id="circlePath"
                                d="M150,150 m-100,0
                                a100,100 0 1,1 200,0
                                a100,100 0 1,1 -200,0" />
                        </defs>
                        <text>
                            <textPath href="#circlePath" startOffset="0%" textLength="615">
                                START A PROJECT • START A PROJECT • START A PROJECT •
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className="hero-16-thumb wow img-custom-anim-top jarallax background-image" ref={parallax.ref as RefObject<HTMLDivElement>}
                    style={{ backgroundImage: "url(/assets/img/hero/hero-16-1.jpg)" }}></div>
            </div>
        </div>
    )
}

export default HeroBannerSixteen
