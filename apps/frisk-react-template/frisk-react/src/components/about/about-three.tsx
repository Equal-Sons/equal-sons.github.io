import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutThree = () => {

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
        <div className="about-area-13 overflow-hidden space">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xxl-8">
                        <div className="title-area mb-0">
                            <h2 className="sec-title style2"><span ref={textRef} className="scroll-text-ani">We created Family Style to do what we love most products in creative ways strategies, identities and systems to bring cool ideas to moving forward.</span></h2>
                            <p className="sec-text mt-25">If you ask our clients what it’s like working with 36, they’ll talk about how much we care about their success. For us, real relationships fuel real success. We love building brands</p>
                            <div className="btn-wrap mt-35">
                                <a href="about.html" className="link-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">ABOUT US</span>
                                        <span className="effect-1">ABOUT US</span>
                                    </span>
                                    <img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutThree
