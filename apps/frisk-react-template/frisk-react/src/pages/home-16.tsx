import AboutSix from "../components/about/about-six"
import ClientArea from "../components/clients/client-area"
import ContactThree from "../components/contact/contact-three"
import CtaEight from "../components/cta/cta-eight"
import FeatureFourteen from "../components/features/feature-fourteen"
import HeroBannerSixteen from "../components/hero-banner/hero-banner-sixteen"
import PortfolioSixteen from "../components/portfolio/portfolio-sixteen"
import SEOCom from "../components/seo"
import TeamFour from "../components/team/team-four"
import VideoAreaThree from "../components/video/video-area-three"
import FooterEleven from "../layout/footer/footer-eleven"
import HeaderTwelve from "../layout/headers/header-twelve"
import Wrapper from "../layout/wrapper"

const HomeSixteen = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Home Sixteen" />
            {/* seo title */}

            {/* header area start */}
            <HeaderTwelve />
            {/* header area end */}

            {/* hero banner area start */}
            <HeroBannerSixteen />
            {/* hero banner area  end*/}

            {/* about area */}
            <AboutSix />
            {/* about area */}

            {/* portfolio area */}
            <PortfolioSixteen />
            {/* portfolio area */}

            {/* feature area */}
            <FeatureFourteen />
            {/* feature area */}

            {/* client area start */}
            <ClientArea space2={true} />
            {/* client area end */}

            {/* team area start */}
            <TeamFour />
            {/* team area end */}

            {/* video area start */}
            <VideoAreaThree />
            {/* video area end */}

            {/* contact area */}
            <ContactThree />
            {/* contact area */}

            {/* cta area start */}
            <CtaEight />
            {/* cta area end */}

            {/* footer area */}
            <FooterEleven />
            {/* footer area */}
        </Wrapper>
    )
}

export default HomeSixteen
