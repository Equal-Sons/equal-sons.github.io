import { useDispatch } from "react-redux";
import UseProducts from "../../../hooks/useProducts";
import { addToCart } from "../../redux/features/cartSlice";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const RelatedProduct = () => {

    const { products } = UseProducts();

    const dispatch = useDispatch();

    const handleAddToCart = (item: any) => {
        dispatch(addToCart(item));
    };

    const setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className="space-top">
            <h3 className="fw-semibold mb-30 mt-n2">Related Products</h3>
            <Slider {...setting} className="row global-carousel">
                {products.map((item) => (
                    <div key={item.id} className="col-sm-6 sliderItem">
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
            </Slider>
        </div>
    )
}

export default RelatedProduct
