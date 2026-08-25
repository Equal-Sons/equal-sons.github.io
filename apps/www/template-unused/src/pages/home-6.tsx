import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import HeroBannerSix from "../components/hero-banner/hero-banner-six";
import FeatureFive from "../components/features/feature-five";
import AwardArea from "../components/award/award-area";
import PortfolioFive from "../components/portfolio/portfolio-five";
import TeamOne from "../components/team/team-one";
import ContactOne from "../components/contact/contact-one";
import BlogOne from "../components/blog/blog-one";
import CtaFour from "../components/cta/cta-four";
import FooterSix from "../layout/footer/footer-six";


export default function HomeSix() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home Six" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerSix />
      {/* hero banner area end */}

      {/* feature area */}
      <FeatureFive />
      {/* feature area */}

      {/* award area start */}
      <AwardArea />
      {/* award area end */}

      {/* portfolio area */}
      <PortfolioFive />
      {/* portfolio area */}

      {/* team area */}
      <TeamOne />
      {/* team area */}

      {/* contact area */}
      <ContactOne />
      {/* contact area */}

      {/* blog area */}
      <BlogOne />
      {/* blog area */}

      {/* cta area */}
      <CtaFour />
      {/* cta area */}

      {/* footer area */}
      <FooterSix />
      {/* footer area */}
    </Wrapper>
  )
}