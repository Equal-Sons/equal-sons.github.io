import { NavLink, useLocation } from "react-router-dom";
import menu_data from "../../../data/menu-data";
import type { IMenuDT, ISubItems } from "../../../types/menu-d-t";

export default function HeaderNav() {
  const { pathname } = useLocation();

  const isChildActive = (link: IMenuDT | ISubItems) => {
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
            <NavLink className={elm.link?.split("/")[1] === pathname?.split("/")[1] ? "activeMenu" : ""} to={elm.link!}>
              <span className="link-effect">
                <span className="effect-1">{elm.title}</span>
                <span className="effect-1">{elm.title}</span>
              </span>
            </NavLink>
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
                      <NavLink to="https://themeforest.net/item/frisk-creative-agency-portfolio-template/49695408?s_rank=10" className="btn bg-theme text-title">
                        <span className="link-effect">
                          <span className="effect-1">Buy now</span>
                          <span className="effect-1">Buy now</span>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ) : (
          <li
            key={i}
            className={elm.subMenuItems ? "menu-item-has-children" : ""}
          >
            {elm.subMenuItems ? (
              <>
                <a
                  href="#"
                  className={isChildActive(elm) ? "activeMenu" : ""}
                >
                  <span className="link-effect">
                    <span className="effect-1">{elm.title}</span>
                    <span className="effect-1">{elm.title}</span>
                  </span>
                </a>

                <ul className="sub-menu">
                  {elm.subMenuItems.map((elm2, i2) => (
                    <li
                      key={i2}
                      className={
                        elm2.subMenuItems ? "menu-item-has-children" : ""
                      }
                    >
                      {elm2.subMenuItems ? (
                        <>
                          <a
                            href="#"
                            className={isChildActive(elm2) ? "activeMenu" : ""}
                          >
                            {elm2.title}
                          </a>
                          <ul className="sub-menu">
                            {elm2.subMenuItems.map((elm3, i3) => (
                              <li key={i3}>
                                <NavLink
                                  className={
                                    elm3.link?.split("/")[1] ===
                                      pathname?.split("/")[1]
                                      ? "activeMenu"
                                      : ""
                                  }
                                  to={elm3.link!}
                                >
                                  {elm3.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavLink
                          className={
                            elm2.link?.split("/")[1] === pathname?.split("/")[1]
                              ? "activeMenu"
                              : ""
                          }
                          to={elm2.link!}
                        >
                          {elm2.label}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink
                className={
                  elm.link?.split("/")[1] === pathname?.split("/")[1]
                    ? "activeMenu"
                    : ""
                }
                to={elm.link!}
              >
                <span className="link-effect">
                  <span className="effect-1">{elm.title}</span>
                  <span className="effect-1">{elm.title}</span>
                </span>
              </NavLink>
            )}
          </li>)
      ))}
    </>
  );
}

