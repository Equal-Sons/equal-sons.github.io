import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import HeroBannerThree from "../components/hero-banner/hero-banner-three";
import FactsOne from "../components/facts/facts-one";
import WhyAreaOne from "../components/why/why-area-one";
import AwardAreaTwo from "../components/award/award-area-two";
import FeatureTwo from "../components/features/feature-two";
import ContactOne from "../components/contact/contact-one";
import BlogThree from "../components/blog/blog-three";
import CtaTwo from "../components/cta/cta-two";
import FooterThree from "../layout/footer/footer-three";


export default function HomeThree() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home three" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerThree />
      {/* hero banner area end */}

      {/* facts area */}
      <FactsOne />
      {/* facts area */}

      {/* why area start */}
      <WhyAreaOne />
      {/* why area end */}

      {/* award area start */}
      <AwardAreaTwo />
      {/* award area end */}

      {/* feature area */}
      <FeatureTwo />
      {/* feature area */}

      {/* contact area */}
      <ContactOne />
      {/* contact area */}

      {/* blog area start */}
      <BlogThree/>
      {/* blog area end */}

      {/* cta area start */}
      <CtaTwo/>
      {/* cta area end */}

      {/* footer area */}
      <FooterThree/>
      {/* footer area */}
    </Wrapper>
  )
}