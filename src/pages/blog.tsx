import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import BlogListArea from "../components/blog/blog-list-area";
import MarqueeSlider from "../components/marquee-slider";


export default function Blog() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Blog" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {/* breadcrumb start */}
      <BreadcrumbOne title="Blog" bg="/assets/img/bg/breadcumb-bg1-8.jpg" />
      {/* breadcrumb end */}

      {/* blog list area */}
      <BlogListArea />
      {/* blog list area */}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}