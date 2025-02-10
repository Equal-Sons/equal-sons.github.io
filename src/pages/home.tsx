import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import HeroBanner from "../components/hero-banner/hero-banner";
import Portfolio from "../components/portfolio/portfolio";
import TeamOne from "../components/team/team-one";
import ContactOne from "../components/contact/contact-one";
import BlogOne from "../components/blog/blog-one";
import CtaFour from "../components/cta/cta-four";
import FooterSix from "../layout/footer/footer-six";
import WhyArea from "../components/why/why-area";
import Approach from "../components/about/approach";
import FooterOne from "../layout/footer/footer-one";
import FooterTwo from "../layout/footer/footer-two";
import FooterThree from "../layout/footer/footer-three";
import FooterFour from "../layout/footer/footer-four";
import FooterFive from "../layout/footer/footer-five";
import FooterSeven from "../layout/footer/footer-seven";
import FooterEight from "../layout/footer/footer-eight";

export default function HomeSix() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom />
			{/* seo title */}

			{/* header area start */}
			<Header />
			{/* header area end */}

			{/* hero banner area start */}
			<HeroBanner />
			{/* hero banner area end */}

			{/* What we do */}
			<WhyArea />

			{/* Our approach area */}
			<Approach />

			{/* portfolio area start */}
			{/* <Portfolio /> */}
			{/* portfolio area end */}

			{/* team area */}
			<TeamOne />
			{/* team area */}

			{/* cta area */}
			<CtaFour />
			{/* cta area */}

			{/* footer area */}
			<FooterSeven />
			{/* footer area */}
		</Wrapper>
	);
}
