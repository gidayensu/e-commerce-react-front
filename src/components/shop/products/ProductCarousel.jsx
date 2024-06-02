import { useParams } from "react-router-dom";
import ProductSwiper from "./ProductSwiper";
import "swiper/css";
import "swiper/css/pagination";


function ProductCarousel({ productsData }) {

  
  const { productId } = useParams();
  
  let recommendedProducts;
  
    if(productsData.products.length === 0 || productsData === undefined) {
      return <div>error loading  products carousel</div>
  } else {
    
    
    recommendedProducts = productsData.products.filter((product) => product.id != productId);
  }

  return (
    <>
      {recommendedProducts && 
      <div>
      <div className="hidden md:block mr-32 ml-32 mb-10">
        <ProductSwiper products={recommendedProducts} />
      </div>

      <div className="block md:hidden ml-5 mr-5">
        <ProductSwiper products={recommendedProducts} />
      </div>
      </div>}
    </>
  );
}
export default ProductCarousel;
