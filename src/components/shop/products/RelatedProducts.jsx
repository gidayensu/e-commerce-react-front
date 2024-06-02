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
    return (
        <ProductCarousel productsData={data}/>
    );
}

export default RelatedProducts;