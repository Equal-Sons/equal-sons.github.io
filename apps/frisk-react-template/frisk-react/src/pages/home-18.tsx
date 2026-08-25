import CtaNine from "../components/cta/cta-nine"
import InstagramArea from "../components/cta/instagram-area"
import SubscribeArea from "../components/cta/subscribe-area"
import FeatureTen from "../components/features/feature-ten"
import FeatureThirteen from "../components/features/feature-thirteen"
import HeroBannerEighteen from "../components/hero-banner/hero-banner-eighteen"
import SEOCom from "../components/seo"
import ShopOne from "../components/shops/shop-one"
import TestimonialSix from "../components/testimonial/testimonial-six"
import FooterThirteen from "../layout/footer/footer-thirteen"
import HeaderTen from "../layout/headers/header-ten"
import Wrapper from "../layout/wrapper"

const HomeEighteen = () => {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home Eighteen" />
      {/* seo title */}

      {/* header area start */}
      <HeaderTen />
      {/* header area end */}

      {/* hero banner area start */}
      <HeroBannerEighteen />
      {/* hero banner area  end*/}

      {/* feature area */}
      <FeatureTen />
      {/* feature area */}

      {/* shop area */}
      <ShopOne />
      {/* shop area */}

      {/* subscribe area */}
      <SubscribeArea />
      {/* subscribe area */}

      {/* cta area */}
      <CtaNine />
      {/* cta area */}

      {/* testimonial area */}
      <TestimonialSix />
      {/* testimonial area */}

      {/* instagram area start */}
      <InstagramArea />
      {/* instagram area end */}

      {/* feature area start */}
      <FeatureThirteen />
      {/* feature area end */}

      {/* footer area */}
      <FooterThirteen />
      {/* footer area */}
    </Wrapper>
  )
}

export default HomeEighteen
