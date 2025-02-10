import { social_data } from "../../../data/socials";
import { IBlogDT } from "../../../types/blog-d-t";
import BlogSidebar from "../blog-sidebar";
import BlogDetailsCommentReplay from "./blog-details-comment-reply";
import BlogDetailsComments from "./blog-details-comments";

type IProps = {
  blog: IBlogDT;
}

export default function BlogDetailsArea({ blog }: IProps) {

  return (
    <section className="blog__details-area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog__details-wrap">
                <div className="blog__details-thumb">
                  <img
                    src={blog.image}
                    alt="img"
                  />
                </div>
                <div className="blog__details-content">
                  <div className="blog-post-meta">
                    <ul className="list-wrap">
                      <li>{blog.date}</li>
                      <li>
                        <a href="#">{blog.category}</a>
                      </li>
                      <li>
                        <a href="#">by Ashton Porter</a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="title">{blog.title}</h2>
                  <p>
                    BaseCreate is pleased to announce that it has been
                    commissioned by Leighton Asia reposition its brand. We will
                    help Leighton Asia evolve its brand strategy, and will be
                    responsible updating Leighton Asia’s brand identity,
                    website, and other collaterals.
                  </p>
                  <p>
                    For almost 50 years Leighton Asia, one of the region’s
                    largest and most respected construction companies, has been
                    progressively building for a better future by leveraging
                    international expertise with local intelligence. In that
                    time Leighton has delivered some of Asia’s prestigious
                    buildings and transformational infrastructure projects.
                  </p>
                  <blockquote>
                    <img
                      className="blockquote-icon"
                      src="/assets/img/icon/quote.svg"
                      alt="img"
                    />
                    <p>
                      “It’s a pleasure working with Bunker. They understood our
                      brand positioning guidelines and translated them
                      beautifully consistently into our on-going marketing
                      comms”
                    </p>
                  </blockquote>
                  <p>
                    Leighton Asia’s brand refreshment will help position the
                    company to meet the challenges of future, as it seeks to
                    lead the industry in technological innovation and
                    sustainable building practices to deliver long-lasting value
                    for its clients.
                  </p>
                  <div className="blog__details-inner">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="blog__details-inner-thumb">
                          <img
                            src="/assets/img/blog/blog_details02.jpg"
                            alt="blog single"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="blog__details-inner-thumb">
                          <img
                            src="/assets/img/blog/blog_details03.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    But in order that you may see whence all this born error of
                    those who accuse pleasure and praise pain, I will open the
                    whole matter, and explain the very things which were said by
                    that discoverer of truth and, as it were, the architect of a
                    happy life.
                  </p>
                  <p>
                    Always ready to push the boundaries, especially when it
                    comes to our own platform maximum analytical eye to create a
                    site that was visually engaging and also optimised
                  </p>
                  <div className="blog__details-bottom">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <div className="post-tags">
                          <ul className="list-wrap">
                            <li>
                              <a href="#">Marketing</a>
                            </li>
                            <li>
                              <a href="#">Brand</a>
                            </li>
                            <li>
                              <a href="#">Contemporary</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="post-share">
                          <h5 className="title">Share:</h5>
                          <div className="social-btn style3 justify-content-md-end">
                            {social_data.map((elm, i) => (
                              <a key={i} href={elm.href}>
                                <span className="link-effect">
                                  <span className="effect-1">
                                    <i className={elm.iconClass}></i>
                                  </span>
                                  <span className="effect-1">
                                    <i className={elm.iconClass}></i>
                                  </span>
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner__page-nav mt-20 mb-n1">
                    <a href="#" className="nav-btn">
                      <i className="fa fa-arrow-left"></i>
                      <span>
                        <span className="link-effect">
                          <span className="effect-1">Previous Post</span>
                          <span className="effect-1">Previous Post</span>
                        </span>
                      </span>
                    </a>
                    <a href="#" className="nav-btn">
                      <span>
                        <span className="link-effect">
                          <span className="effect-1">Next Post</span>
                          <span className="effect-1">Next Post</span>
                        </span>
                      </span>
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="blog__avatar-wrap">
                  <div className="blog__avatar-img">
                    <a href="#">
                      <img
                        src="/assets/img/blog/blog_avatar01.png"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="blog__avatar-info">
                    <h4 className="name">
                      <a href="#">Ashton Porter</a>
                    </h4>
                    <p>
                      But in order that you may see whence all this born error
                      of those who accuse pleasure and praise pain will open the
                      whole matter explain the very things which were said by
                      that
                    </p>
                  </div>
                </div>
                {/* blog comments */}
                <BlogDetailsComments />
                {/* blog comments */}

                {/* comment reply */}
                <BlogDetailsCommentReplay />
                {/* comment reply */}
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
}