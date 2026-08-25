import { useDispatch, useSelector } from "react-redux";
import DescriptionArea from "./description-area"
import RelatedProduct from "./related-product"
import { useCallback } from "react";
import type { Product } from "../../redux/features/productSlice";
import { addToCart, decrease_quantity } from "../../redux/features/cartSlice";
import type { RootState } from "../../redux/store";
import Slider from "react-slick";
import { useState } from "react";
import { Link } from "react-router-dom";

const productImages = [
    "/assets/img/product/product_details_1_1.jpg",
    "/assets/img/product/product_details_1_2.jpg",
    "/assets/img/product/product_details_1_3.jpg",
    "/assets/img/product/product_details_1_1.jpg",
    "/assets/img/product/product_details_1_2.jpg",
    "/assets/img/product/product_details_1_3.jpg",
];

type IProps = {
    product: Product;
}

const ShopDetailsArea = ({ product }: IProps) => {

    const productItem = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();

    const totalItems = productItem.find((d_item) => d_item?.id === product?.id)

    const handleAddToCart = useCallback(
        (item: Product) => {
            dispatch(addToCart(item));
        },
        [dispatch]
    );

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);

    const mainSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: nav2 ?? undefined,
    };

    const thumbSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: nav1 ?? undefined,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="shop__area space">
            <div className="container">
                <div className="row gx-60 gy-60">
                    <div className="col-xl-6">
                        <div className="product-big-img">
                            <Slider {...mainSettings} ref={setNav1} className="global-carousel product-thumb-slider"  >
                                {productImages.map((img, index) => (
                                    <div key={index} className="slide">
                                        <div className="img">
                                            <img src={img} alt="Product Image" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="tag">SALE</div>
                        </div>
                        <Slider {...thumbSettings} ref={setNav2} className="row global-carousel product-small-img">
                            {productImages.map((img, index) => (
                                <div key={index} className="col-lg-4 slide-thumb sliderItem">
                                    <div className="img">
                                        <img src={img} alt="Product Thumbnail" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="col-xl-6">
                        <div className="product-about">
                            <h2 className="product-title">{product.title}</h2>

                            <div className="product-rating">
                                <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{ width: "100%" }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span></div>
                                <Link to="#" className="woocommerce-review-link">(<span className="count">1</span> customer reviews)</Link>
                            </div>
                            <p className="price">{product.old_price && <del>€{product.old_price}</del>}€{product.price}</p>
                            <p className="text">Our tees are carefully cut and sewn by hand in Los Angeles,  California and enzyme washed for added softness. The tees are garment  dyed which creates subtle variations of color, making each tee truly  unique. Each tee is screen printed with water based ink which makes the  print</p>
                            <div className="actions">
                                <div className="quantity">
                                    <span className="title">Quantity</span>
                                    <button onClick={() => product ? dispatch(decrease_quantity(product)) : ""} className="quantity-minus qty-btn"><i className="fas fa-minus"></i></button>
                                    <input type="number" className="qty-input" value={totalItems?.quantity ?? 0} readOnly />
                                    <button onClick={() => product ? dispatch(addToCart(product)) : ""} className="quantity-plus qty-btn"><i className="fas fa-plus"></i></button>
                                </div>
                                <a onClick={() => product ? handleAddToCart(product) : ""} style={{ cursor: "pointer" }} className="tg-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">ADD TO CART</span>
                                        <span className="effect-1">ADD TO CART</span>
                                    </span>
                                </a>
                            </div>
                            <div className="product_meta">
                                <span className="sku_wrapper">SKU: <span className="sku">RO-15743</span></span>
                                <span className="posted_in">Category: <a href="/shop" rel="tag">T-SHIRTS</a></span>
                                <span>Tags: <span><a href="/shop">ART</a><a href="/shop">COLORS</a><a href="/shop">DESIGN</a></span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <DescriptionArea />
                <RelatedProduct />
            </div>
        </section>
    )
}

export default ShopDetailsArea
