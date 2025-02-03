import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ContactInfo from "../components/contact/contact-info";
import ContactOne from "../components/contact/contact-one";
import MarqueeSlider from "../components/marquee-slider";


export default function Contact() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Contact" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Contact" />
      {/* breadcrumb end */}

      {/* contact info */}
      <ContactInfo/>
      {/* contact info */}

      {/* contact area */}
      <ContactOne/>
      {/* contact area */}

      {/* marquee slider */}
      <MarqueeSlider/>
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight/>
      {/* footer area */}
    </Wrapper>
  )
}