import { NavLink } from 'react-router-dom';
import Socials from '../../components/social';
import { links_one, links_two } from '../../data/footer-link-data';

const FooterOne = () => {
  return (
    <footer className="footer-wrapper footer-layout1 overflow-hidden bg-smoke">
      <div className="container">
        <div className="footer-top space">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h2 className="footer-top-title">Let’s Work Together</h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30">
                  We are digital agency that helps businesses develop immersive
                  and engaging user experiences
                </p>
                <NavLink to="/contact" className="btn">
                  <span className="link-effect">
                    <span className="effect-1">LET'S TALK WITH US</span>
                    <span className="effect-1">LET'S TALK WITH US</span>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu-area">
          <div className="row gy-3 justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <ul className="footer-menu-list">
              {links_one.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.href}>
                    <span className="link-effect">
                      <span className="effect-1">{link.text}</span>
                      <span className="effect-1">{link.text}</span>
                    </span>
                  </NavLink>
                </li>
              ))}
              </ul>
            </div>
            <div className="col-xxl-6 col-lg-5 text-lg-end">
              <ul className="footer-menu-list">
                {links_two.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.href}>
                      <span className="link-effect">
                        <span className="effect-1">{link.text}</span>
                        <span className="effect-1">{link.text}</span>
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="social-btn style3">
                <Socials />
              </div>
            </div>
            <div className="col-md-6 align-self-center text-lg-end">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://themeforest.net/user/themegenix/portfolio">
                  ThemeGenix
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;