
const ContactThree = () => {
    return (
        <div className="contact-area-2 space">
            <div className="container">
                <div className="row gy-40 justify-content-between">
                    <div className="col-lg-5">
                        <div className="title-area">
                            <h2 className="sec-title">Feel Free to Ask Anything</h2>
                        </div>
                        <div className="contact-card">
                            <h4 className="box-title">Office:</h4>
                            <p className="box-text">27 Division St, New York, NY 10002, USA</p>
                        </div>
                        <div className="contact-card">
                            <h4 className="box-title">Contact:</h4>
                            <p className="box-text">+1 800 123 654 987</p>
                            <p className="box-text">frisk.agency@mail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form-wrap">

                            <form onSubmit={(e) => e.preventDefault()} method="POST" className="contact-form ajax-contact">
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
                                            <input type="text" className="form-control style-border" name="website" id="website" placeholder="Website link" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="How Can We Help You*" id="contactForm" className="form-control style-border"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn col-12">
                                    <button type="submit" className="tg-btn mt-20">
                                        <span className="link-effect">
                                            <span className="effect-1">SEND MESSAGE</span>
                                            <span className="effect-1">SEND MESSAGE</span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactThree
