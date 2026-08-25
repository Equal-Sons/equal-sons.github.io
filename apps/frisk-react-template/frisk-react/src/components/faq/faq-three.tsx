import { useEffect, useState } from "react";
import type { IFaqDT } from "../../types/faq-d-t";
import FaqSingle from "./faq-single";

const faq_data: IFaqDT[] = [
  {
    id: 1,
    isShow: true,
    question: `Branding Design`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 2,
    question: `Illustration Modelling`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 3,
    question: `Website Development`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 4,
    question: `Digital Marketing`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 5,
    question: `Content Marketing`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
  {
    id: 6,
    question: `Social Advertising`,
    answer: `We design high quality websites that make users come back
            for more. A good website tells a story that will make
            users fully immerse themselves operating`,
  },
];

export default function FaqThree() {

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
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="accordion-area accordion" id="faqAccordion">
              {faqData.map((item, index) => (
                <FaqSingle
                  key={item.id}
                  item={item}
                  index={index}
                  toggleAnswer={toggleAnswer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
