import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import FactsOne from "../components/facts/facts-one";
import WhyAreaOne from "../components/why/why-area-one";
import AwardArea from "../components/award/award-area";
import TeamOne from "../components/team/team-one";
import ContactOne from "../components/contact/contact-one";
import ClientArea from "../components/clients/client-area";


export default function AboutPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="About" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="About" bg="/assets/img/bg/breadcumb-bg1-1.jpg" />
      {/* breadcrumb end */}

      {/* fact area */}
      <FactsOne space="space"/>
      {/* fact area */}

      {/* why area */}
      <WhyAreaOne/>
      {/* why area */}

      {/* award area */}
      <AwardArea space="space" />
      {/* award area */}

      {/* team area */}
      <TeamOne space="space-bottom" />
      {/* team area */}

      {/* contact area */}
      <ContactOne/>
      {/* contact area */}

      {/* client area */}
      <ClientArea space="space" />
      {/* client area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}