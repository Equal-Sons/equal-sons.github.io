import { useEffect, type RefObject } from "react";
import { Link } from "react-router-dom"
import { useParallax } from "react-scroll-parallax";
import addGsap from "../../utils/addGsap";

const CtaNine = () => {

  const parallax = useParallax({
    speed: -20,
  });

  useEffect(() => {
    addGsap();
  }, []);

    return (
        <div className="cta-area-3 overflow-hidden text-center">
            <div className="cta-wrap3">
                <div ref={parallax.ref as RefObject<HTMLDivElement>} className="jarallax cta-bg-thumb background-image" data-overlay="title" data-opacity="4" style={{ backgroundImage: `url(/assets/img/normal/cta_4-1.jpg)` }}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9">
                            <div className="title-area mb-0 text-center">
                                <h2 className="sec-title cta-title text-white">Find Your Unique Style with Our Fashion Collection</h2>
                                <Link to="/shop" className="btn style4">
                                    <span className="link-effect">
                                        <span className="effect-1">SHOP NOW</span>
                                        <span className="effect-1">SHOP NOW</span>
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

export default CtaNine
