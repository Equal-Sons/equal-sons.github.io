import type { IFaqDT } from "../../types/faq-d-t";

type IProps = {
  item: IFaqDT;
  index: number;
  style_2?: boolean;
  parent?: string;
  toggleAnswer: (id: number) => void;
};

const FaqSingleTwo = ({
  item,
  toggleAnswer,
}: IProps) => {
  return (
    <div className={`accordion-card style2 ${item.isShow ? "active" : ""}`} >
      <div className="accordion-header" id={`heading-${item.id}`}>
        <button
          className={`accordion-button ${item.isShow ? "" : "collapsed"}`}
          type="button"
          onClick={() => toggleAnswer(item.id)}
        >
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

export default FaqSingleTwo;
