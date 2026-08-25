import BreadcrumbThree from "../components/breadcrumb/breadcrumb-three"
import MarqueeSlider from "../components/marquee-slider"
import SEOCom from "../components/seo"
import CheckoutArea from "../components/shops/checkout/checkout-area"
import FooterEight from "../layout/footer/footer-eight"
import HeaderEleven from "../layout/headers/HeaderEleven"
import Wrapper from "../layout/wrapper"

const Checkout = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Checkout" />
            {/* seo title */}

            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            {/* breadcrumb start */}
            <BreadcrumbThree title="Checkout" />
            {/* breadcrumb end */}

            {/* service area */}
            <CheckoutArea />
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

export default Checkout
