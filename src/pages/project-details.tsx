import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import MarqueeSlider from "../components/marquee-slider";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import ProjectDetailsArea from "../components/portfolio/project/project-details-area";


export default function ProjectDetails() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Portfolio details" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbTwo title="Portfolio" subtitle="Decentralized Platform" />
      {/* breadcrumb end */}

      {/* project details area */}
      <ProjectDetailsArea/>
      {/* project details area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}