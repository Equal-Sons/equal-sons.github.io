
import Socials from "../../components/social";
import { links_one, links_two } from "../../data/footer-link-data";


export default function FooterSix() {
  return (
    <footer className="footer-wrapper footer-layout6 overflow-hidden bg-smoke">
      <div className="container">
        <div className="footer-menu-area">
          <div className="row gy-3 justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <ul className="footer-menu-list">
                {links_one.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      <span className="link-effect">
                        <span className="effect-1">{link.text}</span>
                        <span className="effect-1">{link.text}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xxl-6 col-lg-5 text-lg-end">
              <ul className="footer-menu-list">
                {links_two.map((link) => (
                  <li key={link.id}>
                    <a href={link.href}>
                      <span className="link-effect">
                        <span className="effect-1">{link.text}</span>
                        <span className="effect-1">{link.text}</span>
                      </span>
                    </a>
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
}
