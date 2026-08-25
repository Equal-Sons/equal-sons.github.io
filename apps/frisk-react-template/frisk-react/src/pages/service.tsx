import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import ServiceAreaOne from "../components/service/service-area-1";
import VideoArea from "../components/video/video-area";


export default function ServicePage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Service" bg="/assets/img/bg/breadcumb-bg1-2.jpg" />
      {/* breadcrumb end */}

      {/* service area */}
      <ServiceAreaOne/>
      {/* service area */}

      {/* video area */}
      <VideoArea/>
      {/* video area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}