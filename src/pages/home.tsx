import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/headers/header-one";
import HeroOne from "../components/hero-banner/hero-banner-one";
import AboutOne from "../components/about/about-one";
import FaqOne from "../components/faq/faq-one";
import PortfolioOne from "../components/portfolio/portfolio-one";
import TeamOne from "../components/team/team-one";
import TestimonialOne from "../components/testimonial/testimonial-one";
import BlogOne from "../components/blog/blog-one";
import FooterOne from "../layout/footer/footer-one";


const Home = () => {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home one" />
      {/* seo title */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* hero area start */}
      <HeroOne />
      {/* hero area end */}

      {/* about area start */}
      <AboutOne />
      {/* about area end */}

      {/* faq area start */}
      <FaqOne />
      {/* faq area end */}

      {/* portfolio area start */}
      <PortfolioOne />
      {/* portfolio area end */}

      {/* team area start */}
      <TeamOne />
      {/* team area end */}

      {/* testimonial area start */}
      <TestimonialOne />
      {/* testimonial area end */}

      {/* blog area start */}
      <BlogOne />
      {/* blog area end */}

      {/* footer area start */}
      <FooterOne />
      {/* footer area end */}
    </Wrapper>
  );
};

export default Home;