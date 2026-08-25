import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IFaqDT {
    id: number;
    isShow?: boolean;
    date: string;
    question: string;
    answer: string;
    meta: string;
}

const faq_data: IFaqDT[] = [
    {
        id: 1,
        isShow: true,
        question: `The Role of Ai in Climate Action and Environmental Sustainability`,
        date: "March 26, 2025",
        meta: "Neural Networks",
        answer: "/assets/img/blog/blog_accordion1_1.jpg",
    },
    {
        id: 2,
        isShow: true,
        question: `How Natural Language Processing is Shaping Modern Communication`,
        date: "March 26, 2025",
        meta: "Technology",
        answer: "/assets/img/blog/blog_accordion1_1.jpg",
    },
    {
        id: 3,
        isShow: true,
        question: `How Natural Language Processing is Revolutionizing Text Analysis`,
        date: "March 26, 2025",
        meta: "AI Solutions",
        answer: "/assets/img/blog/blog_accordion1_1.jpg",
    },
    {
        id: 4,
        isShow: true,
        question: `How Can I Get Started With Artificial Intelligence for My Business?`,
        date: "March 26, 2025",
        meta: "Machine Learning",
        answer: "/assets/img/blog/blog_accordion1_1.jpg",
    },
];

const FaqFive = () => {

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
        <section className="blog-area space">
            <div className="container container3">
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-6 col-lg-8">
                        <div className="title-area text-center">
                            <h2 className="sec-title">Artificial Intelligence, Insights Innovations and Impact</h2>
                        </div>
                    </div>
                </div>
                <div className="accordion-area accordion blog-accordion" id="faqAccordion">
                    {faqData.map((item) => (
                        <div key={item.id} className={`accordion-card blog-card-accordion ${item.isShow ? "active" : ""}`}>
                            <div className="accordion-header" id="collapse-item-1">
                                <button onClick={() => toggleAnswer(item.id)} className={`accordion-button  ${item.isShow ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                    <span className="blog-date-wrap">
                                        <span className="blog-date">{item.date}</span>
                                    </span>
                                    <span className="blog-content">
                                        <h4 className="blog-title">{item.question}</h4>
                                        <span className="blog-meta">{item.meta}</span>
                                    </span>
                                    <span className="btn-wrap">
                                        <span className="link-btn">
                                            <span className="link-effect">
                                                <span className="effect-1">READ MORE</span>
                                                <span className="effect-1">READ MORE</span>
                                            </span>
                                            <img src="assets/img/icon/arrow-left-top.svg" alt="icon"/>
                                        </span>
                                    </span>
                                </button>
                            </div>
                            <div id="collapse-1" className={`accordion-collapse collapse ${item.isShow ? "show" : ""}`} aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <Link to="/blog-details" className="blog-img">
                                        <img src={item.answer} alt="img"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="btn-wrap mt-50 justify-content-center">
                    <Link to="/blog" className="tg-btn">
                        <span className="link-effect">
                            <span className="effect-1">VIEW ALL ARTICLES</span>
                            <span className="effect-1">VIEW ALL ARTICLES</span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FaqFive
