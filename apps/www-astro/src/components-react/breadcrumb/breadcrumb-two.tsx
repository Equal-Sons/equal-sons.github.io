
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
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/blog">
                {title}
              </a>
            </li>
            <li>{subtitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}