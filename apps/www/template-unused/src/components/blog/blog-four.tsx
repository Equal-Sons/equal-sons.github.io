import blog_data from "../../data/blog-data";
import BlogSingle from "./blog-single";

export default function BlogFour() {
  const blogs = blog_data.filter((elm) => elm.page === 'blog-one').slice(0, 3);
  return (
    <section className="blog-area space bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">
                Check Out My Latest Articles
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {blogs.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <BlogSingle item={elm} cardStyle="style3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
