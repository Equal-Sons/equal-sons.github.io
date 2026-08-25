import type { IFaqDT } from "../../types/faq-d-t";

type IProps = {
  item: IFaqDT;
  index: number;
  style_2?: boolean;
  parent?: string;
  toggleAnswer: (id: number) => void;
};

const FaqSingle = ({
  item,
  toggleAnswer,
  index,
  style_2
}: IProps) => {
  return (
    <div
      className={`accordion-card ${style_2 ? "style2" : ""} ${item.isShow ? "active" : ""
        }`}
    >
      <div className="accordion-header" id={`heading-${item.id}`}>
        <button
          className={`accordion-button ${item.isShow ? "" : "collapsed"}`}
          type="button"
          onClick={() => toggleAnswer(item.id)}
        >
          <span className="faq-number">
            {index.toString().length > 1 ? index + 1 : `0${index + 1}`}
          </span>
          {item.question}
        </button>
      </div>

      <div
        id={`collapse-${item.id}`}
        className={`accordion-collapse collapse ${item.isShow ? "show" : ""
          }`}
      >
        <div className="accordion-body">
          <p className="faq-text">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSingle;
