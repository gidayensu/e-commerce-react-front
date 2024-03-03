import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../util/http";
import ShopLoader from "./ShopLoader";
import ErrorComponent from "../common/Error";
import ProductSwiper from "./ProductSwiper";
import "swiper/css";
import "swiper/css/pagination";


function ProductCarousel({ featured }) {
  const { productId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts({ featured }),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20 mb-20">
        <ShopLoader number={2} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 mb-20">
        <ErrorComponent title={"product could not load"} message={"try again later"} />
      </div>
    );
  }

  const recommendedProducts = data.filter((product) => product.id != productId);

  return (
    <>
      <div className="hidden md:block mr-32 ml-32 mb-10">
        <ProductSwiper products={recommendedProducts} />
      </div>

      <div className="block md:hidden ml-5 mr-5">
        <ProductSwiper products={recommendedProducts} />
      </div>
    </>
  );
}
export default ProductCarousel;
