import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const icon_list = [
    "assets/img/icon/zoom-icon.svg",
    "assets/img/icon/slack.svg",
    "assets/img/icon/messenger.svg",
    "assets/img/icon/discord.svg",
    "assets/img/icon/skype.svg",
    "assets/img/icon/zoom-icon.svg",
    "assets/img/icon/slack.svg",
    "assets/img/icon/messenger.svg",
    "assets/img/icon/discord.svg",
    "assets/img/icon/skype.svg",
]

const FeatureNine = () => {
    return (
        <div className="feature-area-5 overflow-hidden mt-4">
            <div className="custom-container">
                <div className="feature-card-wrap5">
                    <div className="feature-card style5 background-image" style={{ backgroundImage: `url(/assets/img/feature/feature-card-bg5-1.jpg)` }}>
                        <h4 className="feature-card-title">
                            <Link to="/service">Empower Your Business With Integrated OpenAI Solutions</Link>
                        </h4>
                        <Link to="/blog-details" className="link-btn style4">
                            <span className="link-effect">
                                <span className="effect-1">EXPLORE MORE</span>
                                <span className="effect-1">EXPLORE MORE</span>
                            </span>
                            <img src="assets/img/icon/arrow-left-top.svg" alt="icon" />
                        </Link>
                    </div>
                    <div className="feature-card style5 background-image" style={{ backgroundImage: `url(/assets/img/feature/feature-card-bg5-2.jpg)` }}>
                        <h4 className="feature-card-title">
                            <Link to="/service">AI Integration and Deployment</Link>
                        </h4>
                        <p className="feature-card-text">Assist in seamlessly integrating AI solutions into your existing systems</p>

                        <div className="slider__marquee clearfix marquee-wrap">
                            <div className="marquee_mode marquee__group">
                                <Marquee pauseOnHover={true}>
                                    {icon_list.map((icon, i) => (
                                        <h6 key={i} className="item m-item"><a href="#"><img src={icon} alt="icon" /></a></h6>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                    <div className="feature-card style5 background-image" style={{ backgroundImage: `url(/assets/img/feature/feature-card-bg5-3.jpg)` }}>
                        <h4 className="feature-card-title">
                            <Link to="/service">Transform Your Operations Through Smart API Integration</Link>
                        </h4>
                        <Link to="/blog-details" className="link-btn style4">
                            <span className="link-effect">
                                <span className="effect-1">EXPLORE MORE</span>
                                <span className="effect-1">EXPLORE MORE</span>
                            </span>
                            <img src="assets/img/icon/arrow-left-top.svg" alt="icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureNine
