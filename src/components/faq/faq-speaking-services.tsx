import type { IFaqDT } from "../../types/faq-d-t";
import FaqSingle from "./faq-single";

const faq_data: IFaqDT[] = [
	{
		id: "product-strategy",
		isShow: true,
		question: "Product Positioning & Market Strategy",
		answer: `For businesses looking to bring a product to life—or refine their go-to-market approach.    
    Clear, compelling product positioning.
    Crafting GTM plans that resonate with your audience.
    Helping teams align around a strategic vision.`,
	},
	{
		id: "facilitation-negotiation-mediation",
		question: "Facilitation & Mediation",
		answer: `When conversations matter, we help teams, leaders, and organizations navigate them effectively.
    Conflict resolution & decision-making support.  
    Product & organizational alignment sessions.`,
	},
	{
		id: "public-speaking-workshops",
		question: "Public Speaking & Workshops",
		answer: `From conference keynotes to intimate workshops—we deliver insights that drive change.    
    Engaging, high-impact presentations.  
    Bringing complex concepts to life for any audience.  
    Tailored sessions for businesses, teams & communities.`,
	},
];

export default function FaqSpeakingServices() {
	return (
		<div className="faq-area-1 space overflow-hidden">
			<div className="container">
				<div className="row justify-content-center">
					<h3 className="mb-5 w-100 text-center">
						Product Strategy and Speaking
					</h3>
					<div className="col-xl-8">
						<div className="accordion-area accordion" id="faqAccordion">
							{faq_data.map((elm, i) => (
								<FaqSingle
									key={elm.id}
									item={elm}
									index={i}
									parent="speaking"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
