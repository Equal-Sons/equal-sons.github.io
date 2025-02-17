import { NavLink } from "react-router-dom";
import blog_data from "../../data/blog-data";


export default function BlogThree() {
  const blogs = blog_data.filter((elm) => elm.page === 'blog-one').slice(0, 3);
  return (
    <section className="blog-area-3 space ">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-xl-5 position-relative ">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area">
                  <h2 className="sec-title">Read Our Articles and News</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7">
            <div className="blog-grid-static-wrap">
              {blogs.slice(0, 3).map((elm, i) => (
                <div key={i} className="blog-grid-static">
                  <div className="blog-grid">
                    <div className="blog-img">
                      <NavLink to={`/blog-details/${elm.id}`}>
                        <img
                          src={elm.image}
                          alt="blog image"
                        />
                      </NavLink>
                    </div>
                    <div className="blog-content">
                      <div className="post-meta-item blog-meta">
                        <a href="#">{elm.date}</a>
                        <a href="#">{elm.category}</a>
                      </div>
                      <h4 className="blog-title">
                        <NavLink to={`/blog-details/${elm.id}`}>
                          {elm.title}
                        </NavLink>
                      </h4>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
