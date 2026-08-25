import { useNavigate, useParams } from "react-router-dom"
import MarqueeSlider from "../components/marquee-slider"
import SEOCom from "../components/seo"
import ShopDetailsArea from "../components/shops/shop-details/shop-details-area"
import HeaderEleven from "../layout/headers/HeaderEleven"
import Wrapper from "../layout/wrapper"
import UseProducts from "../hooks/useProducts"
import { useEffect } from "react"
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two"
import FooterEight from "../layout/footer/footer-eight"

const ShopDetails = () => {

    const { products } = UseProducts();
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(b => Number(b.id) === Number(id));

    useEffect(() => {
        if (!product) {
            navigate("/not-found");
        }
    }, [product, navigate]);

    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Shop Details" />
            {/* seo title */}

            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            {product && <>
                {/* breadcrumb start */}
                <BreadcrumbTwo title="Shop" subtitle={product.title} />
                {/* breadcrumb end */}

                {/* blog details area */}
                <ShopDetailsArea product={product} />
                {/* blog details area */}
            </>}

            {/* marquee slider */}
            <MarqueeSlider />
            {/* marquee slider */}

            {/* footer start */}
            <FooterEight />
            {/* footer end */}
        </Wrapper>

    )
}

export default ShopDetails
