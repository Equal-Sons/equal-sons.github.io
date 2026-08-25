import AboutSeven from "../components/about/about-seven"
import ClientAreaFive from "../components/clients/client-area-five"
import FaqFive from "../components/faq/faq-five"
import FeatureNine from "../components/features/feature-nine"
import HeroBannerSeventeen from "../components/hero-banner/hero-banner-seventeen"
import PortfolioSeventeen from "../components/portfolio/portfolio-seventeen"
import SEOCom from "../components/seo"
import ServiceAreaThree from "../components/service/service-area-3"
import TestimonialFive from "../components/testimonial/testimonial-five"
import FooterTwelve from "../layout/footer/footer-twelve"
import HeaderOne from "../layout/headers/header-one"
import Wrapper from "../layout/wrapper"

const HomeSeventeen = () => {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home Seventeen" />
      {/* seo title */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerSeventeen />
      {/* hero banner area  end*/}

      {/* feature area */}kj
      <FeatureNine />
      {/* feature area */}

      {/* service area */}
      <ServiceAreaThree />
      {/* service area */}

      {/* about area */}
      <AboutSeven />
      {/* about area */}

      {/* portfolio area */}
      <PortfolioSeventeen />
      {/* portfolio area */}

      {/* testimonial area */}
      <TestimonialFive />
      {/* testimonial area */}

      {/* client area start */}
      <ClientAreaFive />
      {/* client area end */}

      {/* blog area start */}
      <FaqFive />
      {/* blog area end */}

      {/* footer area */}
      <FooterTwelve />
      {/* footer area */}
    </Wrapper>
  )
}

export default HomeSeventeen
