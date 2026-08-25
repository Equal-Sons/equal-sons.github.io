import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderFive from "../layout/headers/header-five";
import HeroBannerSeven from "../components/hero-banner/hero-banner-seven";
import ClientAreaTwo from "../components/clients/client-area-two";
import FeatureSix from "../components/features/feature-six";
import SkillArea from "../components/skills/skill-area";
import PortfolioThree from "../components/portfolio/portfolio-three";
import MarqueeSlider from "../components/marquee-slider";
import FaqTwo from "../components/faq/faq-two";
import TestimonialOne from "../components/testimonial/testimonial-one";
import BlogTwo from "../components/blog/blog-two";
import CtaTwo from "../components/cta/cta-two";
import FooterThree from "../layout/footer/footer-three";


export default function HomeSeven() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home Seven" />
      {/* seo title */}

      {/* header area start */}
      <HeaderFive />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerSeven />
      {/* hero banner area end */}

      {/* client area */}
      <ClientAreaTwo space="space" />
      {/* client area */}

      {/* feature area */}
      <FeatureSix />
      {/* feature area */}

      {/* skill area start */}
      <SkillArea />
      {/* skill area end */}

      {/* portfolio area */}
      <PortfolioThree space="space" />
      {/* portfolio area */}

      {/* marquee slide */}
      <MarqueeSlider />
      {/* marquee slide */}

      {/* faq area */}
      <FaqTwo space="space" />
      {/* faq area */}

      {/* testimonial area */}
      <TestimonialOne />
      {/* testimonial area */}

      {/* blog area */}
      <BlogTwo />
      {/* blog area */}

      {/* cta area */}
      <CtaTwo />
      {/* cta area */}

      {/* footer area */}
      <FooterThree />
      {/* footer area */}
    </Wrapper>
  )
}