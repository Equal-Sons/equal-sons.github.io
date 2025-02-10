import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import FooterEight from "../layout/footer/footer-eight";
import MarqueeSlider from "../components/marquee-slider";
import blog_data from "../data/blog-data";
import { useNavigate, useParams } from "react-router-dom";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import BlogDetailsArea from "../components/blog/details/blog-details-area";
import { useEffect } from "react";


export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blog_data.find(b => Number(b.id) === Number(id));

  useEffect(() => {
    if (!blog) {
      navigate("/not-found");
    }
  }, [blog, navigate]);

  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Blog" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      {blog && <>
        {/* breadcrumb start */}
        <BreadcrumbTwo title="Blog" subtitle={blog.title} />
        {/* breadcrumb end */}

        {/* blog details area */}
        <BlogDetailsArea blog={blog}/>
        {/* blog details area */}
      </>}

      {/* marquee slider */}
      <MarqueeSlider />
      {/* marquee slider */}

      {/* footer area */}
      <FooterEight />
      {/* footer area */}
    </Wrapper>
  )
}