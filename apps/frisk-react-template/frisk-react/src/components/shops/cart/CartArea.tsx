import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import type { RootState } from "../../redux/store";
import UseCartInfo from "../../../hooks/useCartInfo";
import { addToCart, decrease_quantity, hydrateCart, remove_cart_product, type CartProduct } from "../../redux/features/cartSlice";

const CartArea = () => {

   const dispatch = useDispatch();
   const cartItems = useSelector((state: RootState) => state.cart.cart);
   const { total } = UseCartInfo();
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
      dispatch(hydrateCart());
   }, [dispatch]);

   if (!isClient) return <div className="text-center py-5">Loading cart...</div>;

   return (
      <>
         <div className="cart-wrapper space-top space-extra-bottom">
            <div className="container">
               {cartItems.length === 0 ? (
                  <div className="mb-30">
                     <div className="empty_bag text-center">
                        <p className="py-3">Your Bag is Empty</p>
                        <Link to={"/shop"}>
                           <button className="tg-btn">Go To Shop</button>
                        </Link>
                     </div>
                  </div>
               ) : (
                  <>
                     <form onSubmit={(e) => e.preventDefault()} className="woocommerce-cart-form">
                        <table className="cart_table">
                           <thead>
                              <tr>
                                 <th colSpan={3} className="cart-col-productname">PRODUCT</th>
                                 <th className="cart-col-price">PRICE</th>
                                 <th className="cart-col-quantity">QUANTITY</th>
                                 <th className="cart-col-total">SUBTOTAL</th>
                              </tr>
                           </thead>
                           <tbody>
                              {cartItems.map((item: CartProduct) => (
                                 <tr className="cart_item">
                                    <td data-title="Remove">
                                       <a style={{ cursor: "pointer" }} onClick={() => dispatch(remove_cart_product(item))} className="remove"><i className="fas fa-times"></i></a>
                                    </td>
                                    <td data-title="Product">
                                       <Link className="cart-productimage" to={`/shop-details/${item.id}`}>
                                          <img
                                             src={item.thumb}
                                             alt={item.title}
                                             width={100}
                                             height={108}
                                          />
                                       </Link>
                                    </td>
                                    <td data-title="Name">
                                       <Link className="cart-productname" to={`/shop-details/${item.id}`}>{item.title}</Link>
                                    </td>
                                    <td data-title="Price">
                                       <span className="amount"><bdi><span>€</span>{item.price}</bdi></span>
                                    </td>
                                    <td data-title="Quantity">
                                       <div className="quantity">
                                          <span className="title">Quantity</span>
                                          <button onClick={() => dispatch(decrease_quantity(item))} className="quantity-minus qty-btn"><i className="fas fa-minus"></i></button>
                                          <input type="number" className="qty-input" value={item.quantity} readOnly />
                                          <button onClick={() => dispatch(addToCart(item))} className="quantity-plus qty-btn"><i className="fas fa-plus"></i></button>
                                       </div>
                                    </td>
                                    <td data-title="Total">
                                       <span className="amount"><bdi><span>€</span>{(item.price * item.quantity).toFixed(2)}</bdi></span>
                                    </td>

                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </form>
                     <div className="row gy-30 justify-content-between">
                        <div className="col-xl-4 col-lg-6">
                           <div className="cart-coupon">
                              <input type="text" className="form-control" placeholder="Coupon Code..." />
                              <button type="submit" className="tg-btn">
                                 <span className="link-effect">
                                    <span className="effect-1">APPLY</span>
                                    <span className="effect-1">APPLY</span>
                                 </span>
                              </button>
                           </div>
                        </div>
                        <div className="col-auto">
                           <button type="submit" className="tg-btn">
                              <span className="link-effect">
                                 <span className="effect-1">UPDATE CART</span>
                                 <span className="effect-1">UPDATE CART</span>
                              </span>
                           </button>
                        </div>
                     </div>
                     <div className="row justify-content-end">
                        <div className="col-12">
                           <h3 className="fw-semibold summary-title mt-90 mb-2">Cart Totals</h3>
                           <table className="cart_totals">
                              <tbody>
                                 <tr>
                                    <td>SUBTOTAL</td>
                                    <td data-title="Cart Subtotal">
                                       <span className="amount"><bdi><span>€</span>{total.toFixed(2)}</bdi></span>
                                    </td>
                                 </tr>
                              </tbody>
                              <tfoot>
                                 <tr className="order-total">
                                    <td>TOTAL</td>
                                    <td data-title="Total">
                                       <strong><span className="amount"><bdi><span>€</span>{total.toFixed(2)}</bdi></span></strong>
                                    </td>
                                 </tr>
                              </tfoot>
                           </table>
                           <div className="wc-proceed-to-checkout mb-30">
                              <Link to="/checkout" className="tg-btn">
                                 <span className="link-effect">
                                    <span className="effect-1">PROCEED TO CHECKOUT</span>
                                    <span className="effect-1">PROCEED TO CHECKOUT</span>
                                 </span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </>
               )}
            </div>
         </div>
      </>
   )
}

export default CartArea
