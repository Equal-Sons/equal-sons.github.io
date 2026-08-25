import { NavLink } from "react-router-dom";
import service_data from "../../data/service-data";


export default function ServiceAreaOne() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {service_data.map((elm, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <img src={elm.iconSrc} alt="icon" />
                </div>
                <h4 className="feature-card-title">
                  <a href="#">{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <NavLink
                  to={`/service-details`}
                  className="link-btn"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW DETAILS</span>
                    <span className="effect-1">VIEW DETAILS</span>
                  </span>
                  <img
                    src="/assets/img/icon/arrow-left-top.svg"
                    alt="icon"
                  />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
