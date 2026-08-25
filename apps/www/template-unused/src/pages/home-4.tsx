import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/headers/header-one";
import HeroBannerFour from "../components/hero-banner/hero-banner-four";
import FeatureThree from "../components/features/feature-three";
import ClientAreaTwo from "../components/clients/client-area-two";
import PortfolioThree from "../components/portfolio/portfolio-three";
import WhyAreaTwo from "../components/why/why-area-two";
import MarqueeSlider from "../components/marquee-slider";
import PricingOne from "../components/pricing/pricing-one";
import FaqTwo from "../components/faq/faq-two";
import BlogTwo from "../components/blog/blog-two";
import CtaThree from "../components/cta/cta-three";
import FooterFour from "../layout/footer/footer-four";


export default function HomeFour() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home Four" />
      {/* seo title */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerFour />
      {/* hero banner area end */}

      {/* feature area */}
      <FeatureThree />
      {/* feature area */}

      {/* client area */}
      <ClientAreaTwo />
      {/* client area */}

      {/* portfolio area */}
      <PortfolioThree />
      {/* portfolio area */}

      {/* why area start */}
      <WhyAreaTwo />
      {/* why area end */}

      {/* marquee slide */}
      <MarqueeSlider />
      {/* marquee slide */}

      {/* pricing area */}
      <PricingOne />
      {/* pricing area */}

      {/* faq area */}
      <FaqTwo />
      {/* faq area */}

      {/* blog area */}
      <BlogTwo cls="bg-smoke" />
      {/* blog area */}

      {/* cta area */}
      <CtaThree />
      {/* cta area */}

      {/* footer area */}
      <FooterFour />
      {/* footer area */}
    </Wrapper>
  )
}