import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderFour from "../layout/headers/header-four";
import HeroBannerFive from "../components/hero-banner/hero-banner-five";
import FeatureFour from "../components/features/feature-four";
import AboutTwo from "../components/about/about-two";
import PortfolioFour from "../components/portfolio/portfolio-four";
import TestimonialTwo from "../components/testimonial/testimonial-two";
import VideoArea from "../components/video/video-area";
import BlogOne from "../components/blog/blog-one";
import FooterFive from "../layout/footer/footer-five";


export default function HomeFive() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home Five" />
      {/* seo title */}

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerFive />
      {/* hero banner area end */}

      {/* feature area */}
      <FeatureFour />
      {/* feature area */}

      {/* about area */}
      <AboutTwo />
      {/* about area */}

      {/* portfolio area */}
      <PortfolioFour />
      {/* portfolio area */}

      {/* testimonial area */}
      <TestimonialTwo />
      {/* testimonial area */}

      {/* video area */}
      <VideoArea />
      {/* video area */}

      {/* blog area */}
      <BlogOne style_3={true} />
      {/* blog area */}

      {/* footer area */}
      <FooterFive />
      {/* footer area */}
    </Wrapper>
  )
}