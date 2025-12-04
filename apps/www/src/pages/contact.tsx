import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/headers/header";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ContactInfo from "../components/contact/contact-info";
import FooterSeven from "../layout/footer/footer-seven";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title="Contact - Equal Sons" />
			{/* seo title */}

			{/* header area start */}
			<Header />
			{/* header area end */}

			{/* breadcrumb start */}
			<BreadcrumbOne
				title="Let's build something."
				subtitle="Have a project in mind? A strategy question? An audience waiting?"
			/>
			{/* breadcrumb end */}

			{/* Intro Text */}
			<div className="space-top">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="title-area text-center mb-50">
								<p className="sec-text">
									We'd love to hear what you're working on. Whether you need
									technical expertise, strategic guidance, or help getting your
									message out there. Let's talk about what's next.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* contact info */}
			<ContactInfo />
			{/* contact info */}

			{/* contact area */}
			<ContactForm />
			{/* contact area */}

			{/* footer area */}
			<FooterSeven />
			{/* footer area */}
		</Wrapper>
	);
}
