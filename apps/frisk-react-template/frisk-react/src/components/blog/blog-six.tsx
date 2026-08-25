import { NavLink } from 'react-router-dom';
import blog_data from '../../data/blog-data';

const BlogSix = () => {
  const blogs = blog_data.filter((elm) => elm.page === 'blog-one').slice(0, 3);
  return (
    <section className="blog-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Read Our Articles and News</h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {blogs.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="blog-card style4">
                <div className="blog-img">
                  <NavLink to={`/blog-details/${elm.id}`}>
                    <img
                      src={elm.image}
                      alt="blog image"
                    />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <NavLink className="blog-tag" to="/blog">{elm.category}</NavLink>
                  <h4 className="blog-title">
                    <NavLink to={`/blog-details/${elm.id}`}>
                      {elm.title}
                    </NavLink>
                  </h4>
                  <div className="post-meta-item blog-meta">
                    <a href="#">{elm.date}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSix;