import CounterItem from '../counter/counter-item';

const counterData = [
  {
    id: 1,
    number: 26,
    title: "Years of Experience",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
  {
    id: 2,
    number: 347,
    title: "Successful Projects",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
  {
    id: 3,
    number: 139,
    title: "Satisfied Customers",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
]

type IProps = {
  space?:string;
}
const FactsOne = ({space='space-bottom'}:IProps) => {
  return (
    <div className={`counter-area-1 ${space} overflow-hidden`}>
      <div className="container">
        <div className="row gy-40 align-items-center justify-content-lg-between justify-content-center">
          {counterData.map((elm, i) => (
            <div
              key={i}
              className="col-xl-auto col-lg-4 col-md-6 counter-divider"
            >
              <div className="counter-card">
                <h3 className="counter-card_number">
                  <span className="counter-number">
                    <CounterItem min={0} max={elm.number} />
                  </span>
                  +
                </h3>
                <h4 className="counter-card_title">{elm.title}</h4>
                <p className="counter-card_text">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactsOne;