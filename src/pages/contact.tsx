import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ContactInfo from "../components/contact/contact-info";
import MarqueeSlider from "../components/marquee-slider";
import FooterSeven from "../layout/footer/footer-seven";

export default function Contact() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title="Contact" />
			{/* seo title */}

			{/* header area start */}
			<Header />
			{/* header area end */}

			{/* breadcrumb start */}
			<BreadcrumbOne title="Contact" />
			{/* breadcrumb end */}

			{/* contact info */}
			<ContactInfo />
			{/* contact info */}

			{/* contact area */}
			{/* <ContactTwo /> */}
			{/* contact area */}

			{/* marquee slider */}
			<MarqueeSlider />
			{/* marquee slider */}

			{/* footer area */}
			<FooterSeven />
			{/* footer area */}
		</Wrapper>
	);
}
