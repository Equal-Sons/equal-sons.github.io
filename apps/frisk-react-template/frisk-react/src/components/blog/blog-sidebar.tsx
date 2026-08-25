import blog_data from "../../data/blog-data";

export default function BlogSidebar () {
  const recent_blogs = blog_data.filter(b => b.page === 'blog-list').slice(-3);
  return (
    <aside className="blog__sidebar">
        <div className="sidebar__widget sidebar__widget-two">
            <div className="sidebar__search">
                <form action="#">
                    <input type="text" placeholder="Search . . ."/>
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <path d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
        <div className="sidebar__widget">
            <h4 className="sidebar__widget-title">Categories</h4>
            <div className="sidebar__cat-list">
                <ul className="list-wrap">
                    <li>
                        <a href="#">Archive (3)</a>
                    </li>
                    <li>
                        <a href="#">Branding (6)</a>
                    </li>
                    <li>
                        <a href="#">Company (2)</a>
                    </li>
                    <li>
                        <a href="#">Design (1)</a>
                    </li>
                    <li>
                        <a href="#">Business (4)</a>
                    </li>
                    <li>
                        <a href="#">Modern (1)</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="sidebar__widget">
            <h4 className="sidebar__widget-title">Recent Posts</h4>
            <div className="sidebar__post-list">
              {recent_blogs.map(b => (
                <div key={b.id} className="sidebar__post-item">
                    <div className="sidebar__post-thumb">
                        <a href="blog-details.html">
                          <img src={b.image} alt="img"/>
                        </a>
                    </div>
                    <div className="sidebar__post-content">
                        <h5 className="title">
                          <a href="blog-details.html">{b.title.slice(0,15)}..</a>
                        </h5>
                        <span className="date">
                          <i className="flaticon-time"></i>{b.date}
                        </span>
                    </div>
                </div>
              ))}
            </div>
        </div>
        <div className="sidebar__widget">
            <h4 className="sidebar__widget-title">Tags</h4>
            <div className="sidebar__tag-list">
                <ul className="list-wrap">
                    <li><a href="#">Agency</a></li>
                    <li><a href="#">Awards</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Brand</a></li>
                    <li><a href="#">Contemporary</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Modern</a></li>
                </ul>
            </div>
        </div>
    </aside>
  )
}