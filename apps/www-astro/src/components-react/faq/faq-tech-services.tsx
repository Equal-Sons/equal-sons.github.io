import type { IFaqDT } from "../../types/faq-d-t";
import FaqSingle from "./faq-single";

const faq_data: IFaqDT[] = [
	{
		id: "fractional-cto",
		isShow: true,
		question: "Fractional CTO & Technology Strategy",
		answer: `For companies that need a seasoned technology leader—without the full-time commitment.    
    Advisory & hands-on leadership to scale your tech.  
    Architecting & optimizing enterprise applications.  
    Guiding technical decision-making for long-term growth.`,
	},
	{
		id: "enterprise-application-api-development",
		question: "Enterprise Application & API Development",
		answer: `Building the scalable software that powers your business.    
    End-to-end application architecture & development.
    Custom APIs to connect and streamline your systems.  
    Secure, high-performance solutions tailored to your needs.`,
	},
	{
		id: "web-development",
		question: "Web Development",
		answer: `Web development is part of what we do—but not the whole picture.    
    Custom websites that serve real business needs.
    Built with scalability and technical precision. 
    Often part of a broader digital strategy.`,
	},
];

export default function FaqTechServices() {
	return (
		<div className="faq-area-1 space overflow-hidden">
			<div className="container">
				<div className="row justify-content-center">
					<h3 className="mb-5 w-100 text-center">Technology</h3>
					<div className="col-xl-8">
						<div className="accordion-area accordion" id="faqAccordion">
							{faq_data.map((elm, i) => (
								<FaqSingle key={elm.id} item={elm} index={i} parent="tech" />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
