import { NavLink } from 'react-router-dom';

const AboutOne = () => {
  return (
    <div className="about-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated "
        style={{
          top: "-100px",
          left: "0px",
          bottom: "140px",
          visibility: "visible",
        }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
      >
        <img
          src="/assets/img/normal/about_1-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap ">
                <div className="title-area mb-0">
                  <h2 className="sec-title">
                    Unlock Revenue Growth for Your Business
                  </h2>
                  <p className="sec-text mt-35">
                    If you ask our clients what it’s like working with 36,
                    they’ll talk about how much we care about their success. For
                    us, real relationships fuel real success. We love building
                    brands
                  </p>
                  <p className="sec-text mt-30">
                    We are a creative agency working with brands building
                    insightful strategy, creating unique designs and crafting
                    value
                  </p>
                  <div className="btn-wrap mt-50">
                    <NavLink to="/about" className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">ABOUT US</span>
                        <span className="effect-1">ABOUT US</span>
                      </span>
                      <img
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;