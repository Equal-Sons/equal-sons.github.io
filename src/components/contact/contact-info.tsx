import { NavLink } from "react-router-dom";

const contactInfo = [
  {
    iconSrc: "/assets/img/icon/location-pin-alt.svg",
    title: "Headquarters",
    address: "27 Division St, New York,",
    city: "NY 10002, USA",
    linkUrl: "https://maps.google.com",
    linkText: "Get direction",
  },
  {
    iconSrc: "/assets/img/icon/speech-bubble.svg",
    title: "Email Address",
    email: "frisk.agency@mail.com",
    email2: "frisk.agency@mail.com",
    linkUrl: "mailto:frisk.agency@mail.com",

    linkText: "Send message",
  },
  {
    iconSrc: "/assets/img/icon/phone.svg",
    title: "Phone Number",
    phoneNumber1: "+1 800 123 654 987",
    phoneNumber2: "+1 800 223 984 002",
    linkUrl: "tel:1800123654987",
    linkText: "Call anytime",
  },
];

const ContactInfo = () => {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {contactInfo.map((info, i) => (
            <div className="col-xl-4 col-md-6">
              <div key={i} className="feature-card">
                <div className="feature-card-icon">
                  <img src={info.iconSrc} alt="icon" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">
                    <NavLink to="/project">{info.title}</NavLink>
                  </h4>
                  {info.address && (
                    <p className="feature-card-text mb-0">{info.address}</p>
                  )}
                  {info.city && (
                    <p className="feature-card-text">{info.city}</p>
                  )}
                  {info.email && (
                    <p className="feature-card-text mb-0">{info.email}</p>
                  )}
                  {info.email2 && (
                    <p className="feature-card-text">{info.email2}</p>
                  )}
                  {info.phoneNumber1 && (
                    <p className="feature-card-text mb-0">
                      {info.phoneNumber1}
                    </p>
                  )}
                  {info.phoneNumber2 && (
                    <p className="feature-card-text">{info.phoneNumber2}</p>
                  )}
                  <a href={info.linkUrl} className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">{info.linkText}</span>
                      <span className="effect-1">{info.linkText}</span>
                    </span>
                    <img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;