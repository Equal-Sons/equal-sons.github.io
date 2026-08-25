import { useCallback, useState } from "react";
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import ShopSidebar from "./ShopSidebar";
import type { Product } from "../../redux/features/productSlice";
import { addToCart } from "../../redux/features/cartSlice";
import ShopTop from "./ShopTop";
import UseProducts from "../../../hooks/useProducts";

const ShopArea = () => {

    const dispatch = useDispatch();
    const { products, setProducts } = UseProducts();

    const itemsPerPage = 8;
    const [itemOffset, setItemOffset] = useState(0);
    const filteredProducts = products;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentItems = filteredProducts.slice(itemOffset, itemOffset + itemsPerPage);

    const startOffset = itemOffset + 1;
    const endOffset = Math.min(itemOffset + itemsPerPage, products.length);
    const totalItems = filteredProducts.length;

    const handlePageClick = ({ selected }: { selected: number }) => {
        const newOffset = selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    const handleAddToCart = useCallback(
        (item: Product) => {
            dispatch(addToCart(item));
        },
        [dispatch]
    );

    return (
        <section className="shop__area space">
            <div className="container">
                <div className="shop__inner-wrap">
                    <div className="row">
                        <div className="col-70">
                            <ShopTop
                                startOffset={startOffset}
                                endOffset={Math.min(endOffset, totalItems)}
                                totalItems={totalItems}
                                setProducts={setProducts}
                            />
                            <div className="row gy-60">
                                {currentItems.map((item: Product) => (
                                    <div key={item.id} className="col-sm-6">
                                        <div className="product-card">
                                            <div className="product-img">
                                                <img src={item.thumb} alt="img" />
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
                                                <span className="price">{item.old_price && <del>€{item.old_price}</del>}€{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination-wrap mt-80">
                                <nav className="Page navigation example">
                                    <ReactPaginate
                                        breakLabel="..."
                                        activeClassName="active"
                                        nextLabel={<i className="fas fa-arrow-right"></i>}
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        pageCount={totalPages}
                                        previousLabel={<i className="fas fa-arrow-left"></i>}
                                        renderOnZeroPageCount={null}
                                        className="pagination list-wrap"
                                    />
                                </nav>
                            </div>
                        </div>
                        <div className="col-30">
                            <ShopSidebar setProducts={setProducts} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopArea