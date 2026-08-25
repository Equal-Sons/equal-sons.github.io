
const CheckoutForm = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="woocommerce-checkout">
            <div className="row gx-60 gy-60">
                <div className="col-lg-6">
                    <h2 className="h3 fw-semibold mt-n2 mb-40">Billing Details</h2>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label>FIRST NAME *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-md-12 form-group">
                            <label>LAST NAME *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-12 form-group">
                            <label>COMPANY NAME (OPTIONAL)</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-12 form-group">
                            <label>COUNTRY / REGION *</label>
                            <select className="form-select">
                                <option>United State (US)</option>
                                <option>United Kingdom (UK)</option>
                                <option>Equatorial Guinea (GQ)</option>
                                <option>Australia (AU)</option>
                                <option>Germany (DE)</option>
                            </select>
                        </div>
                        <div className="col-12 form-group">
                            <label>STREET ADDRESS *</label>
                            <input type="text" className="form-control" placeholder="House number and street name" />
                            <input type="text" className="form-control" placeholder="Apartment, suite, unit, etc. (optional)" />
                        </div>
                        <div className="col-12 form-group">
                            <label>TOWN / CITY *</label>
                            <select className="form-select">
                                <option>California</option>
                                <option>United Kingdom</option>
                                <option>Equatorial Guinea</option>
                                <option>Australia</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="col-12 form-group">
                            <label>ZIP CODE *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-12 form-group">
                            <label>PHONE *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-12 form-group">
                            <label>EMAIL ADDRESS *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>

                    </div>
                </div>
                <div className="col-lg-6">
                    <h2 className="h3 fw-semibold mt-n2 mb-40">Additional information</h2>
                    <div className="shipping_address">
                        <div className="row">
                            <div className="col-12 form-group">
                                <label className="mb-3">ORDER NOTES (OPTIONAL)</label>
                                <textarea name="message" placeholder="Notes about your order, e.g. special notes for delivery." className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CheckoutForm
