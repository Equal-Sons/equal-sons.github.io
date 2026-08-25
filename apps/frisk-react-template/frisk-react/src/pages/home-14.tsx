import AboutFour from "../components/about/about-four"
import BlogFive from "../components/blog/blog-five"
import FactTwo from "../components/facts/fact-two"
import FaqFour from "../components/faq/faq-four"
import HeroBannerFourteen from "../components/hero-banner/hero-banner-fourteen"
import MarqueeSliderTwo from "../components/marquee-slider-two"
import PortfolioFourteen from "../components/portfolio/portfolio-fourteen"
import PricingTwo from "../components/pricing/pricing-two"
import SEOCom from "../components/seo"
import TeamThree from "../components/team/team-three"
import VideoAreaTwo from "../components/video/video-area-two"
import FooterOne from "../layout/footer/footer-one"
import HeaderFive from "../layout/headers/header-five"
import Wrapper from "../layout/wrapper"

const HomeFourteen = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Home Fourteen" />
            {/* seo title */}

            {/* header area start */}
            <HeaderFive />
            {/* header area end */}

            {/* hero banner area start */}
            <HeroBannerFourteen />
            {/* hero banner area  end*/}

            {/* faq area */}
            <FaqFour />
            {/* faq area */}

            {/* about area */}
            <AboutFour />
            {/* about area */}

            {/* fact area */}
            <FactTwo />
            {/* fact area */}

            {/* portfolio area */}
            <PortfolioFourteen />
            {/* portfolio area */}

            {/* pricing area */}
            <PricingTwo />
            {/* pricing area */}

            {/* video area start */}
            <VideoAreaTwo />
            {/* video area end */}

            {/* team area */}
            <TeamThree />
            {/* team area */}

            {/* blog area */}
            <BlogFive />
            {/* blog area */}

            {/* marquee slide */}
            <MarqueeSliderTwo />
            {/* marquee slide */}

            {/* footer area start */}
            <FooterOne />
            {/* footer area end */}
        </Wrapper>
    )
}

export default HomeFourteen
