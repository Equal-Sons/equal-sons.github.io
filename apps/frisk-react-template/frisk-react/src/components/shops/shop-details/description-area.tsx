import { Link } from 'react-router-dom';
import { useState } from "react";

const tab_title: string[] = ["Description", "Information", "Reviews",]

const DescriptionArea = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <ul className="nav product-tab-style1" id="productTab" role="tablist">
                {tab_title.map((tab, index) => (
                    <li key={index} className="nav-item" role="presentation">
                        <a onClick={() => handleTabClick(index)} className={`nav-link th-btn ${activeTab === index ? "active" : ""}`} style={{cursor:"pointer"}}>{tab}</a>
                    </li>
                ))}
            </ul>
            <div className="tab-content" id="productTabContent">
                <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p>One of the key features of cotton T-shirts is their versatility. They  can be worn on their own or layered under jackets, sweaters, or other  clothing items. Cotton is highly breathable and absorbs moisture, making  cotton T-shirts comfortable to wear in various weather conditions. The  fabric allows air circulation, preventing the wearer from feeling too  hot or sweaty.</p>
                </div>
                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="info" role="tabpanel" aria-labelledby="info-tab">
                    <table className="woocommerce-table">
                        <tbody>
                            <tr>
                                <th>Brand</th>
                                <td>Jakuna</td>
                            </tr>
                            <tr>
                                <th>Color</th>
                                <td>Yellow</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>400 gm</td>
                            </tr>
                            <tr>
                                <th>Battery</th>
                                <td>Lithium</td>
                            </tr>
                            <tr>
                                <th>Material</th>
                                <td>Wood</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <div className="woocommerce-Reviews mb-25">
                        <div className="comments-wrap">
                            <div className="latest-comments">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="comments-box">
                                            <div className="comments-avatar">
                                                <img src="/assets/img/blog/comment01.png" alt="img" />
                                            </div>
                                            <div className="comments-text">
                                                <div className="avatar-name">
                                                    <span className="date">March 26, 2024</span>
                                                    <h6 className="name">Parker Strong</h6>
                                                </div>
                                                <p>But in order that you may see whence all this born error of those who accuse pleasure and praise pain will open the whole matter explain</p>
                                                <Link to="/blog-details" className="link-btn">
                                                    <span className="link-effect">
                                                        <span className="effect-1">REPLY</span>
                                                        <span className="effect-1">REPLY</span>
                                                    </span>
                                                    <img src="/assets/img/icon/arrow-left-top.svg" alt="icon" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="comment-respond">
                            <h3 className="comment-reply-title">Leave a Reply</h3>
                            <form onSubmit={(e) => e.preventDefault()} className="comment-form">
                                <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control style-border" name="name" id="name" placeholder="Full name*" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email address*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Write your comment *" id="contactForm" className="form-control style-border style2"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn col-12">
                                    <button type="submit" className="tg-btn mt-25">
                                        <span className="link-effect">
                                            <span className="effect-1">POST COMMENT</span>
                                            <span className="effect-1">POST COMMENT</span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescriptionArea
