import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import Footer from "../layout/footer/footer-seven";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import MarqueeSlider from "../components/marquee-slider";
import FaqThree from "../components/faq/faq-three";
import ClientAreaTwo from "../components/clients/client-area-two";
import FaqTechServices from "../components/faq/faq-tech-services";
import FaqSpeakingServices from "../components/faq/faq-speaking-services";

export default function ServicePageThree() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title="Services" />
			{/* seo title */}

			{/* header area start */}
			<Header />
			{/* header area end */}

			{/* breadcrumb start */}
			<BreadcrumbOne title="Services" bg="/assets/img/bg/breadcumb-bg1-2.jpg" />
			{/* breadcrumb end */}

			{/* faq area */}
			<FaqTechServices />
			<FaqSpeakingServices />
			{/* faq area */}

			{/* client area */}
			{/* <ClientAreaTwo /> */}
			{/* client area */}

			{/* marquee slider */}
			<MarqueeSlider />
			{/* marquee slider */}

			{/* footer area */}
			<Footer />
			{/* footer area */}
		</Wrapper>
	);
}
