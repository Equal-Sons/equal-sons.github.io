import { useVideoPopup } from "../../hooks/useVideoPopup";
import { useEffect } from "react";
import addGsap from "../../utils/addGsap";
import VideoPopup from "../../modals/VideoPopup";

const HeroBannerSeventeen = () => {

    const { isVideoOpen, openVideo, closeVideo } = useVideoPopup();

    useEffect(() => {
        addGsap();
    }, []);

    return (
        <>
            <div className="hero-wrapper hero-17" id="hero">
                <div className="custom-container">
                    <div className="hero-inner  background-image" style={{backgroundImage:`url(/assets/img/hero/hero-17-1.jpg)`}}>
                        <div className="container container3">
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="hero-style17">
                                        <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">Unleash the True</h1>

                                        <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.7s" data-wow-delay="0.1s">Potential of AI in</h1>
                                        <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.8s" data-wow-delay="0.1s">Your World</h1>
                                        <div className="btn-group">
                                            <a href="project.html" className="btn style4 wow img-custom-anim-left">
                                                <span className="link-effect">
                                                    <span className="effect-1">DISCOVER NOW</span>
                                                    <span className="effect-1">DISCOVER NOW</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 align-self-end">
                                    <div className="hero-video-card  background-image" style={{backgroundImage:`url(/assets/img/hero/hero-17-video-card-bg.jpg)`}}>
                                        <div className="box-img">
                                            <img src="/assets/img/hero/hero-17-2.jpg" alt="img" />
                                        </div>
                                        <div className="box-content">
                                            <h4 className="box-title">Your Global Ai Service Partner Since 2021</h4>
                                            <a className="link-btn style3 popup-video" style={{ cursor: "pointer" }} onClick={openVideo}>
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.9974 29.3327C23.3612 29.3327 29.3307 23.3631 29.3307 15.9993C29.3307 8.63555 23.3612 2.66602 15.9974 2.66602C8.6336 2.66602 2.66406 8.63555 2.66406 15.9993C2.66406 23.3631 8.6336 29.3327 15.9974 29.3327Z" stroke="currentColor" stroke-width="2.66667" stroke-linecap="square" />
                                                    <path d="M13.3359 10.666L21.3359 15.9993L13.3359 21.3327V10.666Z" stroke="currentColor" stroke-width="2.66667" stroke-linecap="square" />
                                                </svg>
                                                <span className="link-effect">
                                                    <span className="effect-1">WATCH VIDEO</span>
                                                    <span className="effect-1">WATCH VIDEO</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup isOpen={isVideoOpen} onClose={closeVideo} videoId="vvNwlRLjLkU" />
        </>
    )
}

export default HeroBannerSeventeen
