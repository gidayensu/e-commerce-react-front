import {Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { scrollToTop } from "../common/ScrollToTop";

function ProductSwiper({ products }) {
  
  const shuffleProducts = (data) => {
    const productsArray = [...data];
    for (let i = productsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [productsArray[i], productsArray[j]] = [productsArray[j], productsArray[i]];
    }
    return productsArray;
  };

  // Shuffling the data array
  const shuffledProducts = shuffleProducts(products);
  console.log(shuffledProducts);

  const screenWidth = window.innerWidth;
  

  return (
    <Swiper
      slidesPerView={screenWidth <= 640 ? 2 : screenWidth >= 768 ? 3: 4}
      spaceBetween={screenWidth > 360 ? 30 : 10}
      navigation={true}
      modules={[Pagination, Navigation]}
      
      >
      {shuffledProducts.map((product) => {
        const productPrice = Math.ceil(product.price);
        return (
          
          <SwiperSlide key={product.id} className="shadow-2xl">
            <div className="flex flex-col items-center justify-center">
              <div className=" card card-compact lg:w-60 bg-base-100  h-54 cursor-pointer">
                <Link onClick={scrollToTop} relative="path" to={`/shop/product/${product.id}`}>
                  <img src={product.image} alt={product.title} className="h-40 "/>
                </Link>
              </div>
              <div className="bg-white w-inherit h-20 ml-5">
                <Link onClick={scrollToTop} relative="path" to={`/shop/product/${product.id}`}>
                  <p className="line-clamp-2 text-bold">{product.title}</p>
                </Link>
                <p className="text-sky-700 font-bold">{`GHS ${productPrice}`}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ProductSwiper;