import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderSix from "../layout/headers/header-six";
import HeroBannerEight from "../components/hero-banner/hero-banner-eight";
import FeatureSeven from "../components/features/feature-seven";
import PortfolioSix from "../components/portfolio/portfolio-six";
import TestimonialThree from "../components/testimonial/testimonial-three";
import ClientAreaThree from "../components/clients/client-area-three";
import BlogFour from "../components/blog/blog-four";
import CtaFive from "../components/cta/cta-five";
import FooterSeven from "../layout/footer/footer-seven";


export default function HomeEight() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home Eight" />
      {/* seo title */}

      {/* header area start */}
      <HeaderSix />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerEight />
      {/* hero banner area end */}

      {/* feature area */}
      <FeatureSeven />
      {/* feature area */}

      {/* portfolio area */}
      <PortfolioSix />
      {/* portfolio area */}

      {/* testimonial area */}
      <TestimonialThree />
      {/* testimonial area */}

      {/* client area */}
      <ClientAreaThree />
      {/* client area */}

      {/* blog area */}
      <BlogFour />
      {/* blog area */}

      {/* cta area */}
      <CtaFive />
      {/* cta area */}

      {/* footer area */}
      <FooterSeven />
      {/* footer area */}
    </Wrapper>
  )
}