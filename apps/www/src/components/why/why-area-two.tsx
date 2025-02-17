import CounterItem from '../counter/counter-item';

const counterData = [
  {
    id: 1,
    number: 347,
    title: "Successful Projects",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
  {
    id: 2,
    number: 139,
    title: "Satisfied Customers",
    text: "We are a creative agency brands building insightful strategy, creating unique designs helping",
  },
];

const WhyAreaTwo = () => {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ right: 0, top: "-100px", bottom: "140px" }}
      >
        <img
          src="/assets/img/normal/about_4-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="title-area mb-30">
                <h2 className="sec-title">
                  Empowering Your Businesses in the Digital Realm
                </h2>
              </div>
              <p>
                If you ask our clients what it’s like working with 36, they’ll
                talk about how much we care about their success. For us, real
                relationships fuel real success. We love building brands
              </p>
              <div className="about-counter-wrap mt-45">
                {counterData.map((elm, i) => (
                  <div key={i} className="counter-card counter-item">
                    <h3 className="counter-card_number">
                      <span className="counter-number">
                        <CounterItem min={0} max={elm.number} />
                      </span>
                      +
                    </h3>
                    <h4 className="counter-card_title">{elm.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAreaTwo;