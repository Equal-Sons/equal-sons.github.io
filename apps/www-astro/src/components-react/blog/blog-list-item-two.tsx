import { IBlogDT } from '../../types/blog-d-t';

type IProps = {
  elm: IBlogDT;
}

export default function BlogListItemTwo({ elm }: IProps) {
  return (
    <div className="blog-post-item-two">
      <div className="blog-post-thumb">
        <a href={`/blog-details/${elm.id}`}>
          <img
            src={elm.image}
            alt="img"
          />
        </a>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>{elm.date}</li>
            <li>
              <a href="#">{elm.category}</a>
            </li>
          </ul>
        </div>
        <h4 className="title">
          <a href={`/blog-details/${elm.id}`}>
            {elm.title}
          </a>
        </h4>
        <a
          href={`/blog-details/${elm.id}`}
          className="link-btn"
        >
          <span className="link-effect">
            <span className="effect-1">READ MORE</span>
            <span className="effect-1">READ MORE</span>
          </span>
          <img
            src="/assets/img/icon/arrow-left-top.svg"
            alt="icon"
          />
        </a>
      </div>
    </div>
  )
}