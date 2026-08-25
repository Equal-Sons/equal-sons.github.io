import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import CheckoutForm from "./checkout-form";
import UseCartInfo from "../../../hooks/useCartInfo";
import { hydrateCart } from "../../redux/features/cartSlice";
import type { RootState } from "../../redux/store";

const CheckoutArea = () => {

    const dispatch = useDispatch();
    const productItem = useSelector((state: RootState) => state.cart.cart);
    const { total } = UseCartInfo();

    // default selected payment method
    const [paymentMethod, setPaymentMethod] = useState<string>("cheque");

    useEffect(() => {
        dispatch(hydrateCart());
    }, [dispatch]);

    const notify = (e: React.FormEvent) => {
        e.preventDefault();

        if (productItem.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        toast.success(`Order placed using "${paymentMethod}" payment method`);
    };

    return (
        <div className="checkout-wrapper space-top space-extra-bottom">
            <div className="container">
                <CheckoutForm />
                <h3 className="fw-semibold mt-60 mb-35">Your Order</h3>
                <form className="woocommerce-cart-form">
                    <table className="cart_table mb-20">
                        <thead>
                            <tr>
                                <th className="cart-col-productname">PRODUCT</th>
                                <th className="cart-col-total">SUBTOTAL</th>
                            </tr>
                        </thead>

                        <tbody>
                            {productItem.length === 0 ? (
                                <tr>
                                    <td colSpan={2} className="text-center py-4">
                                        No products in cart
                                    </td>
                                </tr>
                            ) : (
                                productItem.map((item, index) => (
                                    <tr key={index} className="cart_item">
                                        <td data-title="Name">
                                            <span className="cart-productname">
                                                {item.title} <span>x{item.quantity}</span>
                                            </span>
                                        </td>
                                        <td data-title="Price">
                                            <span className="amount">
                                                <bdi>
                                                    <span>€</span>
                                                    {(item.price * item.quantity).toFixed(2)}
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>

                        <tfoot className="checkout-ordertable">
                            <tr className="cart-subtotal">
                                <th>SUBTOTAL</th>
                                <td>
                                    <span className="amount">
                                        <bdi>
                                            <span>€</span>
                                            {total.toFixed(2)}
                                        </bdi>
                                    </span>
                                </td>
                            </tr>

                            <tr className="order-total">
                                <th>TOTAL</th>
                                <td>
                                    <strong>
                                        <span className="amount">
                                            <bdi>
                                                <span>€</span>
                                                {total.toFixed(2)}
                                            </bdi>
                                        </span>
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
                <div className="mt-lg-3 mb-30">
                    <div className="woocommerce-checkout-payment">
                        <ul className="wc_payment_methods payment_methods methods">

                            {/* BANK TRANSFER */}
                            <li className="wc_payment_method">
                                <input
                                    type="radio"
                                    id="payment_bacs"
                                    name="payment_method"
                                    value="bacs"
                                    checked={paymentMethod === "bacs"}
                                    onChange={() => setPaymentMethod("bacs")}
                                />
                                <label htmlFor="payment_bacs">Direct Bank Transfer</label>

                                {paymentMethod === "bacs" && (
                                    <div className="payment_box">
                                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. </p>
                                    </div>
                                )}
                            </li>

                            {/* CASH ON DELIVERY */}
                            <li className="wc_payment_method">
                                <input
                                    type="radio"
                                    id="payment_cheque"
                                    name="payment_method"
                                    value="cheque"
                                    checked={paymentMethod === "cheque"}
                                    onChange={() => setPaymentMethod("cheque")}
                                />
                                <label htmlFor="payment_cheque">Cash on Delivery</label>

                                {paymentMethod === "cheque" && (
                                    <div className="payment_box payment_method_cheque">
                                        <h5>Pay with cash upon delivery.</h5>
                                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                    </div>
                                )}
                            </li>

                            {/* CREDIT CARD */}
                            <li className="wc_payment_method">
                                <input
                                    type="radio"
                                    id="payment_cod"
                                    name="payment_method"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={() => setPaymentMethod("cod")}
                                />
                                <label htmlFor="payment_cod">Credit Card</label>

                                {paymentMethod === "cod" && (
                                    <div className="payment_box payment_method_cod">
                                        <p>Pay with credit cart.</p>
                                    </div>
                                )}
                            </li>

                            {/* PAYPAL */}
                            <li className="wc_payment_method">
                                <input
                                    type="radio"
                                    id="payment_paypal"
                                    name="payment_method"
                                    value="paypal"
                                    checked={paymentMethod === "paypal"}
                                    onChange={() => setPaymentMethod("paypal")}
                                />
                                <label htmlFor="payment_paypal">PayPal</label>

                                {paymentMethod === "paypal" && (
                                    <div className="payment_box payment_method_paypal">
                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                    </div>
                                )}
                            </li>
                        </ul>

                        <div className="form-row place-order">
                            <button onClick={notify} type="submit" className="tg-btn">
                                <span className="link-effect">
                                    <span className="effect-1">PLACE ORDER</span>
                                    <span className="effect-1">PLACE ORDER</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutArea
