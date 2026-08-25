
const SubscribeArea = () => {
    return (
        <div className="overflow-hidden space-bottom">
            <div className="container container3">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="title-area text-center mb-30">
                            <h2 className="sec-title">Get 25% Off Your Next Purchase</h2>
                            <p className="sec-text">Enjoy this exclusive discount. Valid for a limited time only!</p>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
                            <div className="form-group mb-0">
                                <input className="form-control" type="email" placeholder="Your email here" />
                            </div>
                            <button type="submit" className="btn"><img src="/assets/img/icon/arrow-left-top.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeArea
