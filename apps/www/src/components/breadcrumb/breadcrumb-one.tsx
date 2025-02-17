type IProps = {
  title: string;
  bg?: string;
};

export default function BreadcrumbOne({
  title,
  bg = "/assets/img/bg/breadcumb-bg1-6.jpg",
}: IProps) {
  return (
    <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
        </div>
      </div>
    </div>
  );
}
