import { useEffect, useState } from "react";
import menu_data from "../../../../data/menu-data";
import type { ISubItems, IMenuDT } from "../../../../types/menu-d-t";

export default function HeaderNav() {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

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
                              <a
                                className={
                                  elm3.link?.split("/")[1] ===
                                  pathname?.split("/")[1]
                                    ? "activeMenu"
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
                            ? "activeMenu"
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
              <span className="link-effect">
                <span className="effect-1">{elm.title}</span>
                <span className="effect-1">{elm.title}</span>
              </span>
            </a>
          )}
        </li>
      ))}
    </>
  );
}

