

const contactInfo = [
  {
    iconSrc: "/assets/img/icon/phone.svg",
    title: "Contact with Us",

    text: "Good website tells a story that will make users fully immerse themselves operating",
    linkText: "+1 800 123 654 987",
    linkUrl: "tel:1800123654987",
  },
  {
    iconSrc: "/assets/img/icon/speech-bubble.svg",
    title: "Send a Message",

    text: "Good website tells a story that will make users fully immerse themselves operating",
    linkText: "frisk.agency@mail.com",
    linkUrl: "mailto:frisk.agency@mail.com",
  },
];

export default function ContactInfoTwo() {
  return (
    <div className="feature-area-1 space-bottom">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {contactInfo.map((card, index) => (
            <div key={index} className="col-xxl-6 col-xl-6">
              <div className="feature-card style-grid">
                <div className="feature-card-icon">
                  <img src={card.iconSrc} alt="icon" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">
                    <a href="#">{card.title}</a>
                  </h4>
                  <p className="feature-card-text">{card.text}</p>
                  <a href={card.linkUrl} className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">{card.linkText}</span>
                      <span className="effect-1">{card.linkText}</span>
                    </span>
                    <img
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}