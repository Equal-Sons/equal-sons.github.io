import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";

const marQueeData = [
    {
        id: 1,
        href: "#",
        text: "Artificial Intelligence in Shaping the Future of Technology",
    },
    {
        id: 2,
        href: "#",
        text: "Artificial Intelligence in Shaping the Future of Technology",
    },
]

const AboutSeven = () => {
    return (
        <div className="about-area-17 overflow-hidden bg-smoke">
            <div className="container-fluid p-0 overflow-hidden bg-white text-slider-area">
                <div className="slider__marquee clearfix marquee-wrap style3">
                    <div className="marquee_mode marquee__group">
                        <Marquee pauseOnHover={true}>
                            {marQueeData.map((elm, i) => (
                                <h6 key={i} className="item m-item">
                                    <a href={elm.href}>{elm.text}</a>
                                </h6>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="about-thumb17">
                            <img src="/assets/img/normal/about_17-1.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-wrap17 space">
                            <div className="title-area mb-0">
                                <h2 className="sec-title">Harnessing the Power of Artificial Inelegance for Smart Solution</h2>
                                <p className="sec-text mt-25">The neural network is trained by exposing it to a large dataset with  known inputs and outputs. During training, the network learns to adjust  its weights through backpropagation, gradually improving its ability to  make accurate predictions or classifications</p>
                                <p className="sec-text mt-25">We provide customized solutions tailored to the specific needs and goals of their clients. This can include website development, mobile</p>
                                <Link to="/about" className="tg-btn" style={{marginTop:"36px"}}>
                                    <span className="link-effect">
                                        <span className="effect-1">LEARN MORE</span>
                                        <span className="effect-1">LEARN MORE</span>
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

export default AboutSeven
