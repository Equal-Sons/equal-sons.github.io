import { useSelector } from "react-redux";
import { useState, type ChangeEvent } from "react";
import { selectProducts, type Product } from "../../redux/features/productSlice";

interface ProductTopProps {
   startOffset: number;
   endOffset: number;
   totalItems: number;
   setProducts: (products: Product[]) => void;
}

const ShopTop = ({ startOffset, endOffset, totalItems, setProducts }: ProductTopProps) => {
   const allProducts = useSelector(selectProducts);
   const [selected, setSelected] = useState("");

   const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setSelected(value);

      let sortedProducts = [...allProducts];

      switch (value) {
         case "offer":
            // Sort by sale (products with sale first, descending by old price if needed)
            sortedProducts = sortedProducts
               .filter((item) => item.sale)
               .sort((a, b) => (b.old_price || 0) - (a.old_price || 0));
            break;

         case "rating":
            // Sort by rating (highest first)
            sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
            break;

         case "price-asc":
            // Sort by price ascending
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
            break;

         case "price-desc":
            // Sort by price descending
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
            break;

         default:
            sortedProducts = [...allProducts];
            break;
      }

      setProducts(sortedProducts);
   };

   return (
      <div className="shop-sort-bar">
         <div className="row justify-content-between align-items-center">
            <div className="col-sm-auto">
               <p className="woocommerce-result-count">
                  Showing {startOffset}-{endOffset} of {totalItems} results
               </p>
            </div>

            <div className="col-sm-auto">
               <form className="woocommerce-ordering" method="get">
                  <select onChange={selectHandler} value={selected} className="orderby">
                     <option value="">Default Sorting</option>
                     <option value="offer">Sort by Sale</option>
                     <option value="rating">Sort by Rating</option>
                     <option value="price-asc">Sort by Price: Low to High</option>
                     <option value="price-desc">Sort by Price: High to Low</option>
                  </select>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ShopTop;
