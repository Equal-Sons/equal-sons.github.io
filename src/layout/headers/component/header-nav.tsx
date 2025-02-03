import { NavLink, useLocation } from "react-router-dom";
import menu_data from "../../../data/menu-data";
import { ISubItems,IMenuDT } from "../../../types/menu-d-t";

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
        </li>
      ))}
    </>
  );
}

