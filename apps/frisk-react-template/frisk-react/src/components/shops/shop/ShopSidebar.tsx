import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useSelector } from "react-redux";
import PriceRange from "./PriceRange";
import { selectProducts, type Product } from "../../redux/features/productSlice";
import shop_data from "../../../data/shop-data";
import Socials from "../../social";

interface ShopSidebarProps {
   setProducts: (products: Product[]) => void;
}

interface FilterCriteria {
   category: string;
   search: string;
}

const tags: string[] = ["Agency", "Awards", "Marketing", "Brand", "Contemporary", "Design", "Education", "Business", "Modern",];

const ShopSidebar = ({ setProducts }: ShopSidebarProps) => {

   const [categorySelected, setCategorySelected] = useState("");
   const [searchTerm, setSearchTerm] = useState("");

   const allProducts = useSelector(selectProducts);

   const categoryFilter = allProducts.map((product) => product.category);

   const allCategory = ["All Category", ...new Set(categoryFilter)];

   // Category filter
   const handleCategory = (category: string) => {
      setCategorySelected((prev) => (prev === category ? "" : category));
      filterProducts({
         category: category === categorySelected ? "" : category,
         search: searchTerm,
      });
   };


   // 🔹 Search filter
   const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      filterProducts({
         category: categorySelected,
         search: value,
      });
   };

   const handleSearchSubmit = (e: FormEvent) => {
      e.preventDefault();
      filterProducts({
         category: categorySelected,
         search: searchTerm,
      });
   };

   const filterProducts = ({ category, search }: FilterCriteria) => {
      let filteredProducts = allProducts;

      if (category && category !== "All Category") {
         filteredProducts = filteredProducts.filter(
            (product) => product.category === category
         );
      }

      if (search) {
         const lowerSearch = search.toLowerCase();
         filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(lowerSearch)
         );
      }

      setProducts(filteredProducts);
   };

   // 🔹 Price filter
   const maxPrice = shop_data.reduce((max, item) => {
      return item.price > max ? item.price : max;
   }, 0);

   const [priceValue, setPriceValue] = useState([0, maxPrice]);

   useEffect(() => {
      const filterPrice = allProducts.filter(
         (j) => j.price >= priceValue[0] && j.price <= priceValue[1]
      );
      setProducts(filterPrice);
   }, [priceValue, allProducts, setProducts]);

   const handleChanges = (val: number[]) => {
      setPriceValue(val);
   };


   return (
      <aside className="shop__sidebar">
         <div className="sidebar__widget sidebar__widget-two">
            <div className="sidebar__search">
               <form onSubmit={handleSearchSubmit}>
                  <input
                     type="text"
                     placeholder="Search . . ."
                     value={searchTerm}
                     onChange={handleSearchChange}
                  />
                  <button type="submit">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                        <path d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>
               </form>
            </div>
         </div>
         <div className="sidebar__widget">
            <h4 className="sidebar__widget-title">Categories</h4>
            <div className="sidebar__cat-list">
               <ul className="list-wrap">
                  {allCategory.map((category, i) => (
                     <li key={i} onClick={() => handleCategory(category)}>
                        <a onClick={() => handleCategory(category)} style={{ cursor: "pointer" }}>{category}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className="sidebar__widget">
            <h4 className="sidebar__widget-title">Filter by Price</h4>
            <div className="widget_price_filter">
               <div className="price_slider_wrapper">
                  <div id="slider-range2" className="price_slider">
                     <PriceRange
                        MAX={maxPrice}
                        MIN={0}
                        STEP={1}
                        values={priceValue}
                        handleChanges={handleChanges}
                     />
                  </div>
                  <div onChange={() => handleChanges} className="price_label" style={{ marginTop: "20px" }}>
                     Price: <span className="from">${priceValue[0]}</span> —
                     <span className="to">${priceValue[1]}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="sidebar__widget">
            <h4 className="sidebar__widget-title">Tags</h4>
            <div className="sidebar__tag-list">
               <ul className="list-wrap">
                  {tags.map((tag, i) => (
                     <li key={i}><a href="#">{tag}</a></li>
                  ))}
               </ul>
            </div>
         </div>
         <div className="sidebar__widget">
            <h4 className="sidebar__widget-title mb-20">Share</h4>
            <div className="social-btn style3">
               <Socials />
            </div>
         </div>
      </aside>
   )
}

export default ShopSidebar
