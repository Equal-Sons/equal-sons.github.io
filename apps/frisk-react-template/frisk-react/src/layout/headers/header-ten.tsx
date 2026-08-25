import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSticky } from "../../hooks/useSticky";
import useDocument from "../../hooks/useDocument";
import SideMenu from "./component/side-menu";
import MobileNav from "./component/mobile-nav";
import MobileMenuSocials from "./component/mobile-menu-socials";
import HeaderNav from "./component/header-nav";
import SearchPopup from "../../components/popup/search-popup";
import HeaderCart from "../../components/shops/cart/HeaderCart";
import TotalCart from "../../components/shops/cart/TotalCart";

export default function HeaderTen() {

    const [isOpen, setIsOpen] = useState(false);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const { isScrolled } = useSticky();
    const { mobileMenuOpen, setMobileMenuOpen } = useDocument();

    return (
        <>
            <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Mobile Menu */}

            <div
                className={`mobile-menu-wrapper ${mobileMenuOpen ? "body-visible" : ""
                    } `}
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

            <header className="nav-header header-layout1 header-layout4 bg-white">
                <div className="header-top text-center bg-title">
                    <div className="container container3">
                        <p className="header-text text-white">Sign up for 15% off, free shipping over $100, and free returns on every order.</p>
                    </div>
                </div>
                <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""} `}>
                    <div className="menu-area">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <NavLink to="/">
                                            <img
                                                src="/assets/img/logo.svg"
                                                alt="logo"
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            {" "}
                                            <HeaderNav />
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={() => setIsOpen(true)} type="button" className="header-cart sideMenuToggler">
                                            <img src="/assets/img/icon/shopping-cart.svg" alt="img" />
                                            <span className="link-effect header-cart-text">
                                                <span className="effect-1">CART <span>(02)</span></span>
                                                <span className="effect-1">CART <span>(02)</span></span>
                                            </span>
                                        </button>
                                        <button
                                            onClick={() => setMobileMenuOpen(true)}
                                            type="button"
                                            className="menu-toggle sidebar-btn"
                                        >
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <div className="header-button">
                                        <button onClick={() => setOpenCart(true)} type="button" className="header-cart sideMenuToggler">
                                            <img src="/assets/img/icon/shopping-cart.svg" alt="img" />
                                            <TotalCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* search popup */}
            <SearchPopup />
            {/* search popup */}

            {/* header cart */}
            <HeaderCart opencart={openCart} setOpenCart={setOpenCart} />
            {/* header cart */}
        </>
    );
}
