import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import type { RootState } from "../../redux/store";
import UseCartInfo from "../../../hooks/useCartInfo";
import { hydrateCart, remove_cart_product, type CartProduct } from "../../redux/features/cartSlice";

interface CartType {
    opencart: boolean;
    setOpenCart: (isActive: boolean) => void;
}

const HeaderCart = ({ opencart, setOpenCart }: CartType) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cart);
    const { total } = UseCartInfo();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        dispatch(hydrateCart());
    }, [dispatch]);

    if (!isClient) return null;

    return (
        <div className={`sidemenu-wrapper ${opencart ? "show" : ""}`}>
            <div className="sidemenu-content">
                <button
                    className="closeButton sideMenuCls"
                    onClick={() => setOpenCart(false)}
                >
                    <img src="/assets/img/icon/close.svg" alt="icon" />
                </button>

                <div className="widget woocommerce widget_shopping_cart">
                    <h3 className="widget_title">Shopping cart</h3>

                    <div className="widget_shopping_cart_content">
                        {cartItems.length === 0 ? (
                            <div className="mb-30 text-center">
                                <p className="py-3">Your Bag is Empty</p>
                                <Link to="/shop">
                                    <button className="tg-btn">Go To Shop</button>
                                </Link>
                            </div>
                        ) : (
                            <ul className="woocommerce-mini-cart cart_list product_list_widget">
                                {cartItems.map((item: CartProduct) => (
                                    <li key={item.id} className="woocommerce-mini-cart-item mini_cart_item">
                                        <a style={{ cursor: "pointer" }} onClick={() => dispatch(remove_cart_product(item))} className="remove remove_from_cart_button"><i className="fas fa-times"></i></a>
                                        <Link to={`/shop-details/${item.id}`}>
                                            <img src={item.thumb} alt={item.title} />
                                            {item.title}
                                        </Link>

                                        <span className="amount">€{item.price}</span>
                                        <span className="quantity">Qty: {item.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <p className="woocommerce-mini-cart__total total">
                            <strong>TOTAL</strong>
                            <span>€{total.toFixed(2)}</span>
                        </p>

                        <p className="buttons btn-wrap">
                            <Link to="/cart" className="btn style-white">VIEW CART</Link>
                            <Link to="/checkout" className="btn style2">CHECKOUT</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HeaderCart
