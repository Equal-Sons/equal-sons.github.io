import blog_data from "../../data/blog-data";
import usePagination from "../../hooks/usePagination";
import { IBlogDT } from "../../types/blog-d-t";
import Pagination from "../pagination";
import BlogSidebar from "./blog-sidebar";
import BlogListItemTwo from './blog-list-item-two';

const BlogTwoColArea = () => {
  const blogs = blog_data.filter(b => b.page === 'blog-list');
  const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(blogs, 4);
  return (
    <section className="blog__area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog-post-wrap">
                <div className="row gy-30 gutter-24">
                  {currentItems.map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <BlogListItemTwo key={elm.id} elm={elm} />
                    </div>
                  ))}
                </div>
                {/* pagination area */}
                <div className="pagination-wrap mt-50">
                  <nav aria-label="Page navigation example">
                    <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
                  </nav>
                </div>
                {/* pagination area */}
              </div>
            </div>
            <div className="col-30">
              {/* blog sidebar */}
              <BlogSidebar />
              {/* blog sidebar */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTwoColArea;