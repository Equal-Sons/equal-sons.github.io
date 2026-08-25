import PortfolioEleven from "../components/portfolio/portfolio-eleven"
import SEOCom from "../components/seo"
import HeaderSeven from "../layout/headers/header-seven"
import Wrapper from "../layout/wrapper"

const HomeEleven = () => {
  return (
    <Wrapper>
      <div className="bg-title">
        {/* seo title */}
        <SEOCom title="Home Eleven" />
        {/* seo title */}

        {/* header area start */}
        <HeaderSeven />
        {/* header area end */}

        {/* portfolio area */}
        <PortfolioEleven />
        {/* portfolio area */}
      </div>
    </Wrapper>
  )
}

export default HomeEleven
