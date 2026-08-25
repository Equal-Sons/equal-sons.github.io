

const steps = [
  {
    id: 1,
    number: "Step 1",
    title: "Strategic Approach",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
  {
    id: 2,
    number: "Step 2",
    title: "Collaboration is Key",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
  {
    id: 3,
    number: "Step 3",
    title: "End to End Delivery",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
];

export default function FeatureFour() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title text-smoke">Three Step Process</h2>
        </div>
        <div className="row gx-0 gy-40">
          {steps.map((step) => (
            <div key={step.id} className="col-lg-4">
              <div className="process-card">
                <div className="process-card-number">{step.number}</div>
                <h4 className="process-card-title">{step.title}</h4>
                <p className="process-card-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
