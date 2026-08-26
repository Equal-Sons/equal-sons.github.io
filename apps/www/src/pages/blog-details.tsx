import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header";
import FooterSeven from "../layout/footer/footer-seven";
import MarqueeSlider from "../components/marquee-slider";
import { getAdjacentPosts, getBlogPost } from "../data/blog-posts";
import { useNavigate, useParams } from "react-router-dom";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import BlogDetailsArea from "../components/blog/details/blog-details-area";
import { useEffect } from "react";

export default function BlogDetails() {
	const { slug } = useParams();
	const navigate = useNavigate();
	const blog = slug ? getBlogPost(slug) : undefined;

	useEffect(() => {
		if (!blog) {
			navigate("/not-found");
		}
	}, [blog, navigate]);

	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title={blog?.title ?? "Blog"} />
			{/* seo title */}

			{/* header area start */}
			<HeaderThree />
			{/* header area end */}

			{blog && (
				<>
					{/* breadcrumb start */}
					<BreadcrumbOne title={blog.title} />
					{/* breadcrumb end */}

					{/* blog details area */}
					<BlogDetailsArea blog={blog} adjacentPosts={getAdjacentPosts(blog)} />
					{/* blog details area */}
				</>
			)}

			{/* marquee slider */}
			<MarqueeSlider />
			{/* marquee slider */}

			{/* footer area */}
			<FooterSeven />
			{/* footer area */}
		</Wrapper>
	);
}
