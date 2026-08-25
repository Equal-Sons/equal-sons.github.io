import { useEffect, useState } from "react";
import type { IFaqDT } from "../../types/faq-d-t";
import FaqSingle from "./faq-single";

const faq_data = [
  {
    id: 1,
    isShow: true,
    question: `Will you be updating the program?`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 2,
    question: `What happens to my data if I cancel?`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 3,
    question: `How I can optimize voice search?`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 4,
    question: `If I have questions, where can I find answers?`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
];

type IProps = {
  space?: string;
}

const FaqTwo = ({ space = 'space-bottom' }: IProps) => {

  const [faqData, setFaqData] = useState<IFaqDT[]>([]);

  useEffect(() => {
    const updatedData = faq_data.map((item, index) => ({
      ...item,
      isShow: index === 0,
    }));
    setFaqData(updatedData);
  }, []);

  const toggleAnswer = (faqId: number) => {
    setFaqData((prev) =>
      prev.map((faq) => ({
        ...faq,
        isShow: faq.id === faqId ? !faq.isShow : false,
      }))
    );
  };

  return (
    <div className={`faq-area-2 ${space} overflow-hidden`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="accordion-area accordion" id="faqAccordion2">
              {faqData.map((item, index) => (
                <FaqSingle
                  key={item.id}
                  item={item}
                  index={index}
                  toggleAnswer={toggleAnswer}
                   style_2={true}
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