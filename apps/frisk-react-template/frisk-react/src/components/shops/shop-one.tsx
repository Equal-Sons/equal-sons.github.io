import { useDispatch } from "react-redux";
import UseProducts from "../../hooks/useProducts";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";


const ShopOne = () => {

    const { products } = UseProducts();

    const dispatch = useDispatch();

    const handleAddToCart = (item: any) => {
        dispatch(addToCart(item));
    };

    return (
        <div className="space-bottom">
            <div className="custom-container">
                <div className="title-area text-center">
                    <h2 className="sec-title">Hand-Picked Daily</h2>
                </div>
                <div className="row gy-60">
                    {products.slice(0, 8).map((item) => (
                        <div key={item.id} className="col-xl-3 col-sm-6">
                            <div className="product-card">
                                <div className="product-img">
                                    <img src={item.thumb} alt="Product Image" />
                                    <div className="actions">
                                        <a onClick={() => handleAddToCart(item)} style={{ cursor: "pointer" }} className="tg-btn">
                                            <span className="link-effect">
                                                <span className="effect-1">ADD TO CART</span>
                                                <span className="effect-1">ADD TO CART</span>
                                            </span>
                                        </a>
                                    </div>
                                    {item.sale && <div className="tag">{item.sale}</div>}
                                </div>
                                <div className="product-content">
                                    <h3 className="product-title"><Link to={`/shop-details/${item.id}`}>{item.title}</Link></h3>
                                    <span className="price">{item.old_price && <del>€{item.old_price}</del>} €{item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopOne
