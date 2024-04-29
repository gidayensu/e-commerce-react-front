import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs.jsx";
import { scrollToTop } from "../components/common/ScrollToTop.js";
import OneProductLayout from "../components/shop/products/OneProductLayout.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../util/http.js";
import ShopLoader from "../components/shop/ShopLoader";
import ErrorComponent from "../components/common/Error";
import RelatedProducts from "../components/shop/products/RelatedProducts.jsx";
import { getProductData } from "../store/singleProductSlice.jsx";
import { useDispatch } from "react-redux";


function ProductPage() {
  scrollToTop()
  const dispatch = useDispatch();
  
  const { productId } = useParams();
  
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["item"],
    queryFn: () => fetchProduct({ productId }),
  });

  if (isLoading) {
    return(
    <div className="flex justify-center mt-20 mb-20">
    <ShopLoader number={1}/>;
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
    const productCategory = data[0].category;
    const productData = data;

    dispatch(getProductData({productData, productCategory}))
    
      
  
  return (
    <>
      <Breadcrumbs/>
      <OneProductLayout />
      <h2 className="font-semibold m-5 md:text-center md:mb-10">Related Products</h2>
      <div className="md:mx-32">
      <RelatedProducts productCategory = {productCategory}/>
      </div>
    </>
  )
}

export default ProductPage;
