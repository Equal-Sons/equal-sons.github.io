import CtaTwo from "../components/cta/cta-two"
import HeroBannerNine from "../components/hero-banner/hero-banner-nine"
import PortfolioNine from "../components/portfolio/portfolio-nine"
import SEOCom from "../components/seo"
import FooterThree from "../layout/footer/footer-three"
import HeaderThree from "../layout/headers/header-three"
import Wrapper from "../layout/wrapper"

const HomeNine = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Home Nine" />
            {/* seo title */}

            {/* header area start */}
            <HeaderThree />
            {/* header area end */}

            {/* hero banner area start */}
            <HeroBannerNine />
            {/* hero banner area end */}

            {/* portfolio area */}
            <PortfolioNine />
            {/* portfolio area */}

            {/* cta area start */}
            <CtaTwo />
            {/* cta area end */}

            {/* footer area */}
            <FooterThree />
            {/* footer area */}
        </Wrapper>
    )
}

export default HomeNine
