import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import TeamTwo from "../components/team/team-two";
import ContactOne from "../components/contact/contact-one";


export default function TeamPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Team" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Team" bg="/assets/img/bg/breadcumb-bg1-3.jpg" />
      {/* breadcrumb end */}

      {/* team area */}
      <TeamTwo/>
      {/* team area */}

      {/* contact area */}
      <ContactOne/>
      {/* contact area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}