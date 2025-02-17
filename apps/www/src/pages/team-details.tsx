import { useEffect } from "react";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import MarqueeSlider from "../components/marquee-slider";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import TeamDetailsArea from "../components/team/team-details-area";
import { useNavigate, useParams } from "react-router-dom";
import team_data from "../data/team";
import ContactTwo from "../components/contact/contact-two";

export default function TeamDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const team = team_data.find((t) => Number(t.id) === Number(id));

  useEffect(() => {
    if (!team) {
      navigate("/not-found");
    }
  }, [team, navigate]);
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="Team Details" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      {team && <BreadcrumbTwo title="Team" subtitle={team.name} />}
      {/* breadcrumb end */}

      {/* team details area */}
      {team && <TeamDetailsArea team={team} />}
      {/* team details area */}

      {/* contact area */}
      <ContactTwo />
      {/* contact area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  );
}
