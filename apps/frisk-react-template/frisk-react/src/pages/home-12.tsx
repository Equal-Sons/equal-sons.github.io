import PortfolioTwelve from "../components/portfolio/portfolio-twelve"
import SEOCom from "../components/seo"
import HeaderFive from "../layout/headers/header-five"
import Wrapper from "../layout/wrapper"

const HomeTwelve = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Home Twelve" />
            {/* seo title */}

            {/* header area start */}
            <HeaderFive />
            {/* header area end */}

            {/* portfolio area */}
            <PortfolioTwelve />
            {/* portfolio area */}
        </Wrapper>
    )
}

export default HomeTwelve
