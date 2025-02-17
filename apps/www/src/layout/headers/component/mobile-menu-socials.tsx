import { social_data } from "../../../data/socials";

export default function MobileMenuSocials() {
  return (
    <>
      {social_data.map((link) => (
        <a key={link.id} href={link.href}>
          <span className="link-effect">
            <span className="effect-1">
              <i className={link.iconClass}></i>
            </span>
            <span className="effect-1">
              <i className={link.iconClass}></i>
            </span>
          </span>
        </a>
      ))}
    </>
  );
}
