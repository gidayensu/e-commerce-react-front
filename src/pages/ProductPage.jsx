import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import ProductDetail from "../components/shop/ProductDetail.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../util/http.js";
import ShopLoader from "../components/shop/ShopLoader";
import ErrorComponent from "../components/common/Error";
import ProductCarousel from "../components/shop/ProductCarousel.jsx";

function ProductPage() {
  
  const { productId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product"],
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

  return (
    <>
     
      <ProductDetail productData={data} />
      <h2 className="font-semibold m-5 md:text-center md:mb-10">Recommended Products</h2>
      <div className="md:mx-32">
      <ProductCarousel source={"featured"}/>
      </div>
    </>
  )
}

export default ProductPage;
