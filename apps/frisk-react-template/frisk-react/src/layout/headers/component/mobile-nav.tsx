import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { ISubItems } from "../../../types/menu-d-t";
import menu_data from "../../../data/menu-data-two";

function MobileNav() {

  const [activeMenu, setActiveMenu] = useState<[number, boolean]>([-1, false]);
  const { pathname } = useLocation();

  const isChildActive = (link: ISubItems) => {
    let isActive = false;
    if (
      link.link &&
      link.link.split("/")[1] === pathname?.split("/")[1]
    ) {
      isActive = true;
    } else if (link.subMenuItems) {
      link.subMenuItems.forEach((subLink) => {
        if (
          subLink.link &&
          subLink.link.split("/")[1] === pathname?.split("/")[1]
        ) {
          isActive = true;
        }
      });
    }
    return isActive;
  };

  return (
    <>
      {menu_data.map((elm, i) => (
        elm.mega_menu ? (
          <li key={i} className="active menu-item-has-children mega-menu-wrap">
            <a className={elm.link?.split("/")[1] === pathname?.split("/")[1] ? "activeMenu" : ""} href={elm.link!}>
              <span className="link-effect">
                <span className="effect-1">{elm.title}</span>
                <span className="effect-1">{elm.title}</span>
              </span>
            </a>
            <div className="menu-pages bg-title">
              <div className="row">
                {elm.mega_menu.map((mega_menu) => (
                  <div key={mega_menu.id} className="col-lg-3">
                    {mega_menu.menu_details.map((menu, i) => (
                      <a key={i} className="single-menu-page" href={menu.link}>
                        {menu.title} {menu.tag && <span className="menu-tag">{menu.tag}</span>}
                        <span className="menu-category">{menu.category}</span>
                      </a>
                    ))}
                  </div>
                ))}
                <div className="col-lg-3">
                  <div className="menu-banner-wrap">
                    <img src="/assets/img/normal/menu-banner.jpg" alt="img" />
                    <div className="menu-banner-content-wrap">
                      <h4 className="text-white">Start Your Creative Website Journey Today</h4>
                      <a href="https://themeforest.net/item/frisk-creative-agency-portfolio-template/49695408?s_rank=10" className="btn bg-theme text-title">
                        <span className="link-effect">
                          <span className="effect-1">Buy now</span>
                          <span className="effect-1">Buy now</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ) : (
          <li
            key={i}
            className={`${elm.subMenuItems
              ? "menu-item-has-children submenu-item-has-children"
              : ""
              } ${activeMenu[0] === i ? "active-class" : ""
              }`}
          >
            {elm.subMenuItems ? (
              <>
                <a
                  href="#"
                  onClick={() =>
                    setActiveMenu((pre) => {
                      return pre[0] === i ? [-1, false] : [i, false];
                    })
                  }
                  // className={isChildActive(elm.subMenuItems) ? "activeMenu" : ""}
                  className={elm.subMenuItems && elm.subMenuItems.some(subItem => isChildActive(subItem)) ? "activeMenu" : ""}
                >
                  {elm.title}
                  <span className="mean-expand-class"></span>
                </a>

                <ul
                  className="sub-menu submenu-class menu-open overflow-hidden"
                  style={
                    activeMenu[0] === i
                      ? { maxHeight: "700px" }
                      : { maxHeight: "0px" }
                  }
                >
                  {elm.subMenuItems.map((elm2, i2) => (
                    <li
                      key={i2}
                      className={`${elm2.subMenuItems
                        ? "menu-item-has-children submenu-item-has-children"
                        : ""
                        } ${activeMenu[1] ? "active-class" : ""
                        }`}
                    >
                      {elm2.subMenuItems ? (
                        <>
                          <a
                            href="#"
                            onClick={() => {
                              setActiveMenu((pre) => {
                                return pre[1] ? [pre[0], false] : [pre[0], true];
                              });
                            }}
                            // className={
                            //   isChildActive(elm2.subMenuItems)
                            //     ? "activeMenu2"
                            //     : ""
                            // }
                            className={elm2.subMenuItems && elm2.subMenuItems.some(subItem => isChildActive(subItem)) ? "activeMenu2" : ""}
                          >
                            {elm2.title}
                            <span className="mean-expand-class"></span>
                            <span className="mean-expand-class"></span>
                          </a>
                          <ul
                            className="sub-menu submenu-class overflow-hidden"
                            style={
                              activeMenu[1]
                                ? { maxHeight: "700px" }
                                : { maxHeight: "0px" }
                            }
                          >
                            {elm2.subMenuItems.map((elm3, i3) => (
                              <li key={i3}>
                                <a
                                  className={
                                    elm3.link?.split("/")[1] ===
                                      pathname?.split("/")[1]
                                      ? "activeMenu2"
                                      : ""
                                  }
                                  href={elm3.link!}
                                >
                                  {elm3.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <a
                          className={
                            elm2.link?.split("/")[1] === pathname?.split("/")[1]
                              ? "activeMenu2"
                              : ""
                          }
                          href={elm2.link!}
                        >
                          {elm2.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a
                className={
                  elm.link?.split("/")[1] === pathname?.split("/")[1]
                    ? "activeMenu"
                    : ""
                }
                href={elm.link!}
              >
                {elm.title}
              </a>
            )}
          </li>)
      ))}
    </>
  );
}

export default MobileNav;
