import { NavLink } from "react-router-dom";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/headers/header-three";
import Wrapper from "../layout/wrapper";

export default function NotFoundPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Not found" />
      {/* seo title */}

      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      <div className="error-wrapper text-center">
        <div className="container">
          <img
            className="mb-50"
            src="/assets/img/normal/404.png"
            alt="error"
          />
          <h2>Look Like You’re Lost</h2>
          <p className="sec-text mb-30">
            The link you followed probably broken or the page has been removed
          </p>
          <NavLink to="/" className="link-btn">
            <span className="link-effect">
              <span className="effect-1">back to home</span>
              <span className="effect-1">back to home</span>
            </span>
            <img
              src="/assets/img/icon/arrow-left-top.svg"
              alt="icon"
            />
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}