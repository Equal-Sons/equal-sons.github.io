import { NavLink } from 'react-router-dom';
import { IBlogDT } from '../../types/blog-d-t';

type IProps = {
  elm: IBlogDT;
}

const BlogListItem = ({ elm }: IProps) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <NavLink to={`/blog-details/${elm.id}`}>
          <img
            src={elm.image}
            alt="img"
          />
        </NavLink>
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
        <h2 className="title">
          <NavLink to={`/blog-details/${elm.id}`}>
            {elm.title}
          </NavLink>
        </h2>
        <NavLink
          to={`/blog-details/${elm.id}`}
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
        </NavLink>
      </div>
    </div>
  );
};

export default BlogListItem;