import type { IFaqDT } from "../../types/faq-d-t";
import FaqSingle from "./faq-single";

const faq_data: IFaqDT[] = [
	{
		id: "1",
		isShow: true,
		question: "Branding Design",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "2",
		question: "Illustration Modelling",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "3",
		question: "Website Development",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "4",
		question: "Digital Marketing",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "5",
		question: "Content Marketing",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "6",
		question: "Social Advertising",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
];

export default function FaqThree() {
	return (
		<div className="faq-area-1 space overflow-hidden">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8">
						<div className="accordion-area accordion" id="faqAccordion">
							{faq_data.map((elm, i) => (
								<FaqSingle key={i} item={elm} index={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
