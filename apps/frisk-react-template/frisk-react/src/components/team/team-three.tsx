import { Link } from "react-router-dom"
import type { ITeamDT } from "../../types/team-d-t"
import Slider from "react-slick";

const team_data: ITeamDT[] = [
    {
        id: 1,
        imageSrc: "/assets/img/team/team-1-1.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 2,
        imageSrc: "/assets/img/team/team-1-2.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 3,
        imageSrc: "/assets/img/team/team-1-3.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 4,
        imageSrc: "/assets/img/team/team-1-4.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 5,
        imageSrc: "/assets/img/team/team-1-5.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 6,
        imageSrc: "/assets/img/team/team-1-6.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 7,
        imageSrc: "/assets/img/team/team-1-1.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 8,
        imageSrc: "/assets/img/team/team-1-2.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 9,
        imageSrc: "/assets/img/team/team-1-3.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 10,
        imageSrc: "/assets/img/team/team-1-4.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 11,
        imageSrc: "/assets/img/team/team-1-5.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
    {
        id: 12,
        imageSrc: "/assets/img/team/team-1-6.png",
        name: "Daniyel Karlos",
        designation: "Web Developer",
    },
]

const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoPlay:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


const TeamThree = () => {
    return (
        <div className="team-area-1 space overflow-hidden">
            <div className="container-fluid p-0">
                <Slider {...setting} className="row justify-content-center global-carousel">
                    {team_data.map((item) => (
                        <div key={item.id} className="col-xl-2 col-md-6 sliderItem">
                            <div className="team-card">
                                <div className="team-card_img">
                                    <img src={item.imageSrc} alt="Team Image" />
                                </div>
                                <div className="team-card_content">
                                    <h3 className="team-card_title"><Link to="/team-details">{item.name}</Link></h3>
                                    <span className="team-card_desig">{item.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default TeamThree
