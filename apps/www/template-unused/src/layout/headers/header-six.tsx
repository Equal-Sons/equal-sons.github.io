import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSticky } from "../../hooks/useSticky";
import useDocument from "../../hooks/useDocument";
import MobileNav from "./component/mobile-nav";
import MobileMenuSocials from "./component/mobile-menu-socials";
import DarkMenu from "./component/dark-menu";

export default function HeaderSix() {
  const [darkMenuOpen, setDarkMenuOpen] = useState(false);
  const { isScrolled } = useSticky();
  const {mobileMenuOpen,setMobileMenuOpen} = useDocument();
  return (
    <>
      <DarkMenu setDarkMenuOpen={setDarkMenuOpen} darkMenuOpen={darkMenuOpen} />
      <div
        className={`mobile-menu-wrapper ${mobileMenuOpen ? "body-visible" : ""} `}
      >
        <div className="mobile-menu-area">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <NavLink to="/">
              <img
                src="/assets/img/logo.svg"
                alt="Ovation"
              />
            </NavLink>
          </div>
          <div className="mobile-menu">
            <ul>
              <MobileNav />
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>27 Division St, New York,</h6>
            <h6>NY 10002, USA</h6>
          </div>
          <div className="sidebar-wrap">
            <h6>
              <a href="tel:1800123654987">+1 800 123 654 987 </a>
            </h6>
            <h6>
              <a href="mailto:frisk.agency@mail.com">frisk.agency@mail.com</a>
            </h6>
          </div>
          <div className="social-btn style3">
            <MobileMenuSocials />
          </div>
        </div>
      </div>
      <header className="nav-header header-layout2">
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""} `}>
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <NavLink to="/">
                      <img
                        src="/assets/img/logo-white-sm.svg"
                        alt="logo"
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="header-button">
                    <a
                      className="btn link-btn2 d-none d-lg-inline-flex"
                      href="/assets/cv.pdf"
                      download
                    >
                      <img
                        src="/assets/img/icon/download.svg"
                        alt="img"
                      />
                      <span className="link-effect">
                        <span className="effect-1">DOWNLOAD MY CV</span>
                        <span className="effect-1">DOWNLOAD MY CV</span>
                      </span>
                    </a>
                    <button
                      type="button"
                      className="sidebar-btn menu-toggle2 d-none d-lg-block"
                      onClick={() => setDarkMenuOpen(true)}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="menu-toggle sidebar-btn d-block d-lg-none"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
