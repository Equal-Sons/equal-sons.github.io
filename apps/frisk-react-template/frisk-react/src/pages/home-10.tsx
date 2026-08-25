import PortfolioTen from "../components/portfolio/portfolio-ten"
import SEOCom from "../components/seo"
import FooterTen from "../layout/footer/footer-ten"
import HeaderOne from "../layout/headers/header-one"
import Wrapper from "../layout/wrapper"

const HomeTen = () => {
    return (
        <Wrapper>

            {/* seo title */}
            <SEOCom title="Home Ten" />
            {/* seo title */}

            {/* header area start */}
                  <HeaderOne />
            {/* header area end */}

            {/* hero banner area start */}
            <PortfolioTen />
            {/* hero banner area end */}

            {/* footer area */}
            <FooterTen />
            {/* footer area */}
        </Wrapper>
    )
}

export default HomeTen
