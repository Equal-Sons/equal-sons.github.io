import { NavLink } from "react-router-dom";

type IProps = {
  title: string;
  subtitle: string;
};

export default function BreadcrumbTwo({title,subtitle}:IProps) {
  return (
    <div className="breadcumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                {title}
              </NavLink>
            </li>
            <li>{subtitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}