import BreadcrumbThree from "../components/breadcrumb/breadcrumb-three"
import MarqueeSlider from "../components/marquee-slider"
import SEOCom from "../components/seo"
import CartArea from "../components/shops/cart/CartArea"
import FooterEight from "../layout/footer/footer-eight"
import HeaderEleven from "../layout/headers/HeaderEleven"
import Wrapper from "../layout/wrapper"

const Cart = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Cart" />
            {/* seo title */}

            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            {/* breadcrumb start */}
            <BreadcrumbThree title="My Cart" />
            {/* breadcrumb end */}

            {/* service area */}
            <CartArea />
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

export default Cart
