import blog_data from '../../data/blog-data';
import BlogSingle from './blog-single';

type IProps = {
  style_3?: boolean;
}
const BlogOne = ({ style_3 }: IProps) => {
  const blogs = blog_data.filter((elm) => elm.page === 'blog-one').slice(0, 3);
  return (
    <section className="blog-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className={`sec-title ${style_3 ? 'text-smoke' : ''}`}>Read Our Articles and News</h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {blogs.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <BlogSingle item={elm} cardStyle={style_3?'style3':''} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogOne;