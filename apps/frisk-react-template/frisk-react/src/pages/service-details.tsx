import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import MarqueeSlider from "../components/marquee-slider";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import ServiceDetailsArea from "../components/service/service-details-area";


export default function ServiceDetailsPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service Details" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbTwo title="Services" subtitle="Branding Design" />
      {/* breadcrumb end */}

      {/* service details area */}
      <ServiceDetailsArea />
      {/* service details area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}