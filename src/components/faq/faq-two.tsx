import FaqSingle from "./faq-single";

const faq_data = [
	{
		id: "1",
		isShow: true,
		question: "Will you be updating the program?",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "2",
		question: "What happens to my data if I cancel?",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "3",
		question: "How I can optimize voice search?",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
	{
		id: "4",
		question: "If I have questions, where can I find answers?",
		answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
	},
];

type IProps = {
	space?: string;
};

const FaqTwo = ({ space = "space-bottom" }: IProps) => {
	return (
		<div className={`faq-area-2 ${space} overflow-hidden`}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8">
						<div className="accordion-area accordion" id="faqAccordion2">
							{faq_data.map((elm, i) => (
								<FaqSingle
									key={i}
									item={elm}
									index={i}
									style_2={true}
									parent="faqAccordion2"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqTwo;
