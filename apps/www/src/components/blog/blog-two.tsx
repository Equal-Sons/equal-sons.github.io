import blog_data from '../../data/blog-data';
import BlogSingle from './blog-single';

type IProps = {
  cls?:string;
}
const BlogTwo = ({cls=''}:IProps) => {
  const blogs = blog_data.filter((elm) => elm.page === 'blog-one').slice(0, 3);
  return (
    <section className={`blog-area space ${cls}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Read Our Articles and News</h2>
            </div>
          </div>
        </div>
        <div className="row gy-30 justify-content-center">
          {blogs.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <BlogSingle item={elm} cardStyle="style2" style_2={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;