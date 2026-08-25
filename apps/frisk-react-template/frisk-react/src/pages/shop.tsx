import BreadcrumbThree from "../components/breadcrumb/breadcrumb-three"
import MarqueeSlider from "../components/marquee-slider"
import SEOCom from "../components/seo"
import ShopArea from "../components/shops/shop/ShopArea"
import FooterEight from "../layout/footer/footer-eight"
import HeaderEleven from "../layout/headers/HeaderEleven"
import Wrapper from "../layout/wrapper"

const Shop = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Shop" />
            {/* seo title */}

            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            {/* breadcrumb start */}
            <BreadcrumbThree title="Shop" />
            {/* breadcrumb end */}

            {/* service area */}
            <ShopArea />
            {/* service area */}

            {/* marquee slider */}
            <MarqueeSlider />
            {/* marquee slider */}

            {/* footer start */}
            <FooterEight />
            {/* footer end */}
        </Wrapper>
    )
}

export default Shop
