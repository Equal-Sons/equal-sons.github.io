import { IFaqDT } from '../../types/faq-d-t';

type IProps = {
  item:IFaqDT;
  index:number;
  style_2?:boolean;
  parent?:string;
}
const FaqSingle = ({item,index,style_2,parent='faqAccordion'}:IProps) => {
  return (
    <div className={`accordion-card ${style_2?'style2':''} active`}>
    <div
      className="accordion-header"
      id={`collapse-item-${item.id}`}
    >
      <button
        className={`accordion-button ${
          item.isShow ? "" : "collapsed"
        } `}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse-${item.id}`}
        aria-expanded="true"
        aria-controls={`collapse-${item.id}`}
      >
        {" "}
        <span className="faq-number">
          {index.toString.length > 1 ? index : "0" + (index + 1)}
        </span>{" "}
        {item.question}
      </button>
    </div>
    <div
      id={`collapse-${item.id}`}
      className={`accordion-collapse collapse ${
        item.isShow ? "show" : ""
      } `}
      aria-labelledby={`collapse-item-${item.id}`}
      data-bs-parent={`#${parent}`}
    >
      <div className="accordion-body">
        <p className="faq-text">{item.answer}</p>
      </div>
    </div>
  </div>
  );
};

export default FaqSingle;