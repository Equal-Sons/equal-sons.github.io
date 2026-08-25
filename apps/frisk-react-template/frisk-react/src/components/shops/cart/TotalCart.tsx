import { useSelector } from "react-redux";

const TotalCart = () => {
   const productItem = useSelector((state: any) => state.cart.cart);

   return (
      <>
         <span className="link-effect header-cart-text">
            <span className="effect-1">CART <span>({productItem.length})</span></span>
            <span className="effect-1">CART <span>({productItem.length})</span></span>
         </span>
      </>
   )
}

export default TotalCart
