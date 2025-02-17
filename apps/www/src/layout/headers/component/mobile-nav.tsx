import { useState } from "react";
import { useLocation } from "react-router-dom";
import menu_data from "../../../data/menu-data";
import { ISubItems } from "../../../types/menu-d-t";

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
        <li
          key={i}
          className={`${
            elm.subMenuItems
              ? "menu-item-has-children submenu-item-has-children"
              : ""
          } ${
            activeMenu[0] === i ? "active-class" : ""
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
                    ? { maxHeight: "500px" }
                    : { maxHeight: "0px" }
                }
              >
                {elm.subMenuItems.map((elm2, i2) => (
                  <li
                    key={i2}
                    className={`${
                      elm2.subMenuItems
                        ? "menu-item-has-children submenu-item-has-children"
                        : ""
                    } ${
                      activeMenu[1] ? "active-class" : ""
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
                              ? { maxHeight: "500px" }
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
        </li>
      ))}
    </>
  );
}

export default MobileNav;
