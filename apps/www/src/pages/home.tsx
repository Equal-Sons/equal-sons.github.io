import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import HeroBanner from "../components/hero-banner/hero-banner";
import CtaFour from "../components/cta/cta-four";
import PillarsPreview from "../components/pillars/pillars-preview";
import Approach from "../components/about/approach";
import WorkShowcase from "../components/work/work-showcase";
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

			{/* Three Pillars Preview */}
			<PillarsPreview />

			{/* Our approach area */}
			<Approach />

			{/* Work showcase area */}
			<WorkShowcase />
			{/* Work showcase area */}

			{/* cta area */}
			<CtaFour />
			{/* cta area */}

			{/* footer area */}
			<FooterSeven />
			{/* footer area */}
		</Wrapper>
	);
}
