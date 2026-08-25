import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import PricingOne from "../components/pricing/pricing-one";
import FaqTwo from "../components/faq/faq-two";


export default function PricingPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Pricing" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Pricing" bg="/assets/img/bg/breadcumb-bg1-4.jpg" />
      {/* breadcrumb end */}

      {/* pricing area */}
      <PricingOne />
      {/* pricing area */}

      {/* faq area */}
      <FaqTwo />
      {/* faq area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}