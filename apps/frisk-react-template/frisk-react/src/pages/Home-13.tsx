import AboutThree from "../components/about/about-three"
import BlogSix from "../components/blog/blog-six"
import ClientAreaFour from "../components/clients/client-area-four"
import CtaTen from "../components/cta/cta-ten"
import FeatureEleven from "../components/features/feature-eleven"
import HeroBannerThirteen from "../components/hero-banner/hero-banner-thirteen"
import MarqueeSlider from "../components/marquee-slider"
import PortfolioThirteen from "../components/portfolio/portfolio-thirteen"
import SEOCom from "../components/seo"
import TestimonialSeven from "../components/testimonial/testimonial-seven"
import FooterFourteen from "../layout/footer/footer-fourteen"
import HeaderNine from "../layout/headers/header-nine"
import Wrapper from "../layout/wrapper"

const HomeThirteen = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Home Twelve" />
            {/* seo title */}

            {/* header area start */}
            <HeaderNine />
            {/* header area end */}

            {/* portfolio area */}
            <HeroBannerThirteen />
            {/* portfolio area */}

            {/* marquee slide */}
            <MarqueeSlider />
            {/* marquee slide */}

            {/* about area */}
            <AboutThree />
            {/* about area */}

            {/* client area start */}
            <ClientAreaFour />
            {/* client area end */}

            {/* portfolio area start */}
            <PortfolioThirteen />
            {/* portfolio area end */}

            {/* feature area start */}
            <FeatureEleven />
            {/* feature area end */}

            {/* testimonial area */}
            <TestimonialSeven />
            {/* testimonial area */}

            {/* blog area start */}
            <BlogSix />
            {/* blog area end */}

            {/* cta area start */}
            <CtaTen />
            {/* cta area end */}

            {/* footer area */}
            <FooterFourteen />
            {/* footer area */}
        </Wrapper>
    )
}

export default HomeThirteen 
