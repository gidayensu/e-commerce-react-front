import ProductCarousel from "./ProductCarousel.jsx";
import ShopLoader from "../ShopLoader.jsx";
import ErrorComponent from "../../common/Error.jsx";
import { fetchProducts } from "../../../util/http.js";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

function RelatedProducts ( ) {
    const {productCategory } = useSelector(state=>state.singleProduct);
    
    const source = productCategory;
    
    const { data, isLoading, error } = useQuery({
        queryKey: ["category-products", productCategory],
        queryFn: () => fetchProducts({ source }),
      });
    
      if (isLoading) {
        return(
        <div className="flex justify-center mt-20 mb-20">
        <ShopLoader number={4}/>;
        </div>)
      }
    
      if (error) {
        return (
          <div className="mt-20 mb-20">
          <ErrorComponent
            title={"product could not load"}
            message={"try again later"}
             />
             </div>
        );
      }

      function randomProducts() {
        const productsData = data.products;
        let count = 5;
        productsData.length < 5 ? count = productsData.length: '';
        const shuffled = productsData.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      }
      
    return (
        <ProductCarousel productsData={randomProducts()}/>
    );
}

export default RelatedProducts;