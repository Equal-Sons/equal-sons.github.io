import Wrapper from '../layout/wrapper';
import SEOCom from '../components/seo';
import HeaderTwo from '../layout/headers/header-two';
import HeroBannerTwo from '../components/hero-banner/hero-banner-two';
import MarqueeSlider from '../components/marquee-slider';
import FeatureOne from '../components/features/feature-one';
import SkillArea from '../components/skills/skill-area';
import PortfolioTwo from '../components/portfolio/portfolio-two';
import AwardArea from '../components/award/award-area';
import VideoArea from '../components/video/video-area';
import BlogTwo from '../components/blog/blog-two';
import ClientArea from '../components/clients/client-area';
import CtaOne from '../components/cta/cta-one';
import FooterTwo from '../layout/footer/footer-two';

const HomeTwo = () => {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home two" />
      {/* seo title */}

      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerTwo />
      {/* hero banner area  end*/}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* feature area */}
      <FeatureOne />
      {/* feature area */}

      {/* skill area start */}
      <SkillArea />
      {/* skill area end */}

      {/* portfolio area start */}
      <PortfolioTwo />
      {/* portfolio area end */}

      {/* award area start */}
      <AwardArea />
      {/* award area end */}

      {/* video area start */}
      <VideoArea />
      {/* video area end */}

      {/* blog area */}
      <BlogTwo/>
      {/* blog area */}

      {/* client area start */}
      <ClientArea/>
      {/* client area end */}

      {/* cta area */}
      <CtaOne/>
      {/* cta area */}

      {/* footer start */}
      <FooterTwo/>
      {/* footer end */}

    </Wrapper>
  );
};

export default HomeTwo;