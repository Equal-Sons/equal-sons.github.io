import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import AwardAreaTwo from "../components/award/award-area-two";


export default function ProjectSix() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Project 6" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Portfolio" bg="/assets/img/bg/breadcumb-bg1-7.jpg" />
      {/* breadcrumb end */}

      {/* project area */}
      <AwardAreaTwo />
      {/* project area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}