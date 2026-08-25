import { useEffect, useState } from "react";
import type { IFaqDT } from "../../types/faq-d-t";
import FaqSingleTwo from "./faq-single-two";

const faq_data: IFaqDT[] = [
    {
        id: 1,
        isShow: true,
        question: `Branding and Strategy`,
        answer: `We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating`,
    },
    {
        id: 2,
        question: `Analytics and Reporting`,
        answer: `We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating`,
    },
    {
        id: 3,
        question: `Website Development`,
        answer: `We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating`,
    },
    {
        id: 4,
        question: `Email Marketing`,
        answer: `We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating`,
    },
    {
        id: 5,
        question: `Pay Per Click Advertising`,
        answer: `We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating`,
    },
];

const FaqFour = () => {

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
        <div className="faq-area-3 space">
            <div className="container">
                <div className="row gy-30 justify-content-xl-between justify-content-center">
                    <div className="col-xl-4 col-lg-8">
                        <div className="sec_title_wrap">
                            <div className="title-area text-xl-start text-center mb-0">
                                <h2 className="sec-title">Unlock Your Brand’s Full Potential</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="accordion-area accordion" id="faqAccordion">
                            {faqData.map((item, index) => (
                                <FaqSingleTwo
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
    )
}

export default FaqFour
