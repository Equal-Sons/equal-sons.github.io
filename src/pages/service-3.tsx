import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import FaqThree from "../components/faq/faq-three";
import ClientAreaTwo from "../components/clients/client-area-two";


export default function ServicePageThree() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service 3" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Service" bg="/assets/img/bg/breadcumb-bg1-2.jpg" />
      {/* breadcrumb end */}

      {/* faq area */}
      <FaqThree/>
      {/* faq area */}

      {/* client area */}
      <ClientAreaTwo/>
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