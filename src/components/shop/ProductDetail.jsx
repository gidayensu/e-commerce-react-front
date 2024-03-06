import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

function ProductDetail({ productData }) {
  const [productQuantity, setProductQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();
  
  const addToCartHandler = (id, title, image, price, quantity) => {
    dispatch(
      addItem({
      id,
      title,
      image,
      price,
      quantity
    })
    );
  };

  const incrementHandler = ()=> {
    setProductQuantity(productQuantity+1);
  }

  const decrementHandler = ()=> {
    if(productQuantity >1){
    setProductQuantity(productQuantity-1);
  }
  }



 

  return (
    <>
      {productData.map((product) => {
        const productPrice = Math.ceil(product.price)
        const discountedPrice = (productPrice - productPrice * (product.discountPercentage / 100)).toFixed(2)
        
        return (
          <main
            key={product.id}
            className="flex flex-col m-6 md:m-0 md:grid md:grid-cols-2 md:mt-16 md:mb-36 mt-6 mb-6 gap-9"
          >
            <div className="flex justify-center items-center md:ml-64 md:w-1/2 md:border border-slate-300 rounded-3xl">

              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                cssMode={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                className="p-4 h-80 md:max-h-96 mySwiper2"
              >
                <div className="flex items-center justify-center text-center text-[11px] absolute bg-amber-200 rounded-sm w-10 mt-2 font-bold h-5 right-2 top-0 z-10">
                      <p>{`${product.discountPercentage}%`}</p>
                  </div>
                {product.images.map((image, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={image}
                        className="h-72 w-auto rounded-2xl"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex flex-col gap-2 md:mr-80 md:-ml-32">
              <h2 className="font-bold text-3xl md:text-4xl md:mt-0 mt-10">
                {product.title}
              </h2>
              <div className="flex gap-3 items-end">
                <h3 className="md:text-3xl text-2xl text-primary font-bold">{`GHS ${discountedPrice}`}</h3>
                <h3 className="md:text-3xl line-through text-slate-500 font-bold">{`GHS ${productPrice}`}</h3>
              </div>
              <div className="border-t border-solid border-gray-300"></div>
              <div className="flex flex-col gap-3 overflow-hidden text-elipsis">
                <p className="">{`${product.description}`}</p>
                <div className="border-t border-solid border-gray-300"></div>
                <div className="flex md:gap-10 gap-1 flex-col md:flex-row w-full">
                  <div className="flex gap-2 ">
                    <p className="font-bold">Brand:</p> <p className="underline cursor-pointer">{product.brand} </p>
                  </div> <span className="hidden md:block">|</span> 
                  <div className="flex gap-2">
                    <p className="font-bold">Category:</p> <p className="underline cursor-pointer">{product.category} </p>
                  </div>
                </div>
                <div className="rating flex mt-3 gap-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <span>({product.stock} in stock)</span>
                </div>
              </div>
              <div className="flex md:items-center md:justify-normal  items-center gap-4 md:gap-0 mt-5 flex-nowrap md:grid md:grid-cols-2 ">
                <div className="flex justify-center items-center gap-4 border-2 border-gray-400  h-12 w-32 rounded-full">
                  <button
                    onClick={incrementHandler}
                    className="hover:font-bold"
                  >
                    +
                  </button>
                  <p>{productQuantity}</p>
                  <button
                    className="hover:font-bold"
                    onClick={decrementHandler}
                  >
                    -
                  </button>
                </div>

                <div>
                  <button
                    className="bg-primary hover:bg-sky-700 rounded-full text-white h-12 w-52 md:w- md:-ml-28"
                    onClick={() =>
                      addToCartHandler(
                        product.id,
                        product.title,
                        product.thumbnail,
                        discountedPrice,
                        productQuantity
                      )
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </main>
        );
      })}
    </>
  );
}

export default ProductDetail;
