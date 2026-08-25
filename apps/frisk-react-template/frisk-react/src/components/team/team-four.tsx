import { NavLink } from "react-router-dom";
import team_data from "../../data/team";

const TeamFour = () => {
    return (
        <div className="team-area-1 space-bottom overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="title-area text-center">
                            <h2 className="sec-title">Our Team Behind The Studio</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4 justify-content-center">
                    {team_data.slice(0, 3).map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <div className="team-card style2">
                                <div className="team-card_img">
                                    <div className="social-btn">
                                        <a href="https://www.facebook.com/">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        <a href="https://linkedin.com/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://twitter.com/">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                    <img src={item.imageSrc} alt="Team Image" />
                                </div>
                                <div className="team-card_content">
                                    <h3 className="team-card_title"><NavLink to={`/team-details/${item.id}`}>{item.name}</NavLink></h3>
                                    <span className="team-card_desig">{item.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamFour
