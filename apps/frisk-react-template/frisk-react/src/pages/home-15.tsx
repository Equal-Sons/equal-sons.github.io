import AboutFive from "../components/about/about-five"
import AwardAreaThree from "../components/award/award-area-three"
import BlogOne from "../components/blog/blog-one"
import CtaTwo from "../components/cta/cta-two"
import FeatureEight from "../components/features/feature-eight"
import HeroBannerFifteen from "../components/hero-banner/hero-banner-fifteen"
import PortfolioFifteen from "../components/portfolio/portfolio-fifteen"
import SEOCom from "../components/seo"
import TestimonialFour from "../components/testimonial/testimonial-four"
import FooterThree from "../layout/footer/footer-three"
import HeaderSeven from "../layout/headers/header-seven"
import Wrapper from "../layout/wrapper"

const HomeFifteen = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Home Fifteen" />
            {/* seo title */}

            {/* header area start */}
            <HeaderSeven />
            {/* header area end */}

            {/* hero banner area start */}
            <HeroBannerFifteen />
            {/* hero banner area  end*/}

            {/* about area */}
            <AboutFive />
            {/* about area */}

            {/* feature area */}
            <FeatureEight />
            {/* feature area */}

            {/* fact area */}
            <PortfolioFifteen />
            {/* fact area */}

            {/* testimonial area */}
            <TestimonialFour />
            {/* testimonial area */}

            {/* award area start */}
            <AwardAreaThree />
            {/* award area end */}

            {/* blog area start */}
            <BlogOne />
            {/* blog area end */}

            {/* cta area start */}
            <CtaTwo />
            {/* cta area end */}

            {/* footer area */}
            <FooterThree />
            {/* footer area */}
        </Wrapper>
    )
}

export default HomeFifteen
