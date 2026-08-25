import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import ServiceAreaTwo from "../components/service/service-area-2";
import ContactOne from "../components/contact/contact-one";


export default function ServicePageTwo() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service 2" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Service" bg="/assets/img/bg/breadcumb-bg1-2.jpg" />
      {/* breadcrumb end */}

      {/* service area */}
      <ServiceAreaTwo />
      {/* service area */}

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