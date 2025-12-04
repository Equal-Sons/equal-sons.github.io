import MobileMenuSocials from "./mobile-menu-socials";
import addGsap from "../../../../utils/addGsap";
import React, { useEffect } from "react";


type IProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SideMenu({ isOpen, setIsOpen }:IProps) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <a href="/">
                <img
                  src="/assets/img/logo-white.svg"
                  alt="Ovation"
                />
              </a>
            </div>
            <p className="about-text">
              We are digital agency that helps businesses develop immersive and
              engaging
            </p>
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
            <div className="social-btn style2">
              <MobileMenuSocials />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <a
            href="/contact"
            className="chat-btn gsap-magnetic"
          >
            Let's Talk with us
          </a>
        </div>
      </div>
    </div>
  );
}
