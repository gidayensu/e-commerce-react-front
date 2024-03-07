import {Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
  

  const screenWidth = window.innerWidth;
  

  return (
    <Swiper
      slidesPerView={screenWidth <= 640 ? 2 : screenWidth <= 768 ? 3: 4}
      spaceBetween={screenWidth > 360 ? 30 : 10}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]
      }
      pagination={{clickable: true}}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
      >
      {shuffledProducts.map((product) => {
        const productPrice = Math.ceil(product.price);
        return (
          
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center justify-center ">
              <div className="card card-compact lg:w-60 bg-base-100 w-40 h-52 cursor-pointer ">
                <Link className = "flex items-center justify-center" onClick={scrollToTop} relative="path" to={`/shop/product/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} className="h-32 rounded-lg"/>
                </Link>
              
              <div className="lgw-inherit h-20 ml-5">
                <Link onClick={scrollToTop} relative="path" to={`/shop/product/${product.id}`}>
                  <p className="truncate text-bold">{product.title}</p>
                </Link>
                <p className="text-sky-700 font-bold">{`GHS ${productPrice}`}</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ProductSwiper;