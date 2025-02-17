import { NavLink } from 'react-router-dom';
import { IBlogDT } from '../../types/blog-d-t';

type IProps = {
  item: IBlogDT;
  style_2?:boolean;
  cardStyle?:string;
}
const BlogSingle = ({ item,style_2,cardStyle='' }: IProps) => {
  return (
    <div className={`blog-card ${cardStyle}`}>
      <div className="blog-img">
        <NavLink to={`/blog-details/${item.id}`}>
          <img
            src={style_2 ? item.image2 : item.image}
            alt="blog image"
          />
        </NavLink>
      </div>
      <div className="blog-content">
        <div className="post-meta-item blog-meta">
          <a href="#">{item.date}</a>
          <a href="#">{item.category}</a>
        </div>
        <h4 className="blog-title">
          <NavLink to={`/blog-details/${item.id}`}>
            {item.title}
          </NavLink>
        </h4>
        <NavLink
          to={`/blog-details/${item.id}`}
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

export default BlogSingle;