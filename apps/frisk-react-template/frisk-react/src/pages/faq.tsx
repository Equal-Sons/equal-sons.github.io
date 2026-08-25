import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import FaqTwo from "../components/faq/faq-two";
import ContactInfoTwo from "../components/contact/contact-info-2";


export default function FaqPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Faq" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="FAQs" bg="/assets/img/bg/breadcumb-bg1-5.jpg" />
      {/* breadcrumb end */}

      {/* faq area */}
      <FaqTwo space="space" />
      {/* faq area */}

      {/* contact info */}
      <ContactInfoTwo/>
      {/* contact info */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}