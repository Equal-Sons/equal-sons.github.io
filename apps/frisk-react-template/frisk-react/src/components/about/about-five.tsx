import { Link } from "react-router-dom"
import CounterItem from "../counter/counter-item"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutFive = () => {

    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.to(textRef.current, {
            backgroundImage:
                "linear-gradient(to right, #0B1422 100%, #D5D7DA 100%)",
            ease: "none",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top bottom",
                end: "top center",
                scrub: 1,
            },
        });

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <div className="about-area-15 overflow-hidden space">
            <div className="container">
                <div className="row gy-40 justify-content-between">
                    <div className="col-xl-3">
                        <div className="counter-card style3 text-start">
                            <h3 className="counter-card_number">
                                <span className="counter-number"><CounterItem min={0} max={26} /> </span>+
                            </h3>
                            <p className="counter-card_text">Delivering expert solutions built on industry experience</p>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-8">
                        <div className="title-area mb-0">
                            <h2 className="sec-title style2"><span ref={textRef} className="scroll-text-ani">We help you build your brand — shaping even the wildest ideas into elegant designs, seamless development, and top-notch solutions</span></h2>
                            <Link to="/project" className="tg-btn mt-4" style={{ visibility: "visible" }}>
                                <span className="link-effect">
                                    <span className="effect-1">VIEW ALL PROJECTS</span>
                                    <span className="effect-1">VIEW ALL PROJECTS</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive
