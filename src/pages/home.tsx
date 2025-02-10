import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import HeroBanner from "../components/hero-banner/hero-banner";
import TeamOne from "../components/team/team-one";
import CtaFour from "../components/cta/cta-four";
import WhyArea from "../components/why/why-area";
import Approach from "../components/about/approach";
import FooterSeven from "../layout/footer/footer-seven";

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
