import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaBan } from "react-icons/fa";
import { addItem } from "../../store/cartSlice.jsx";
import { filterByCategory } from "../../store/productFilterSlice.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import toast, {Toaster} from 'react-hot-toast';
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";


function ProductDetail() {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);
  const { products } = useSelector((state)=> state.products);

  const categoryFilterHandler = (category)=> {
    dispatch(
      filterByCategory({
        category, products
      })
    )
  }
  let productStock = 0;
  
  const { productData } = useSelector((state) => state.singleProduct);

  const addToCartHandler = (id, title, image, price, quantity, stock) => {
    dispatch(addItem({ id, title, image, price, quantity, stock }));
    toast(`${quantity}x ${title} added`, {
      duration: 4000,
      position: 'bottom-center',
      style: {
        background: '#194d33',
        color: '#fff'
      },
      icon: <IoIosCheckmarkCircle className="text-2xl"/>,
    });
    
  };

  const updateProductQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      
      setProductQuantity(newQuantity);
    }
  };

  const incrementHandler = () => {
    updateProductQuantity(productQuantity + 1)
  };

  const decrementHandler = () => updateProductQuantity(productQuantity - 1);

  return (
    <>
      {productData.map((product) => {
        const productPrice = Math.ceil(product.price);
        const discountedPrice = Math.floor(
          productPrice - productPrice * (product.discountPercentage / 100)
        );
        productStock = product.stock;
        if(items[0]) {
          const currentProduct = items.find(item=>item.itemId === product.id);
          currentProduct ? productStock = currentProduct.stock : productStock
        }
        return (
          
          
          <main
            key={product.id}
            className="flex flex-col m-6 md:m-0 md:grid md:grid-cols-2 md:mt-16 md:mb-36 mt-6 mb-6 gap-9"
          >
          
            <div className="flex justify-center items-center xl:ml-64 md:ml-44 md:w-1/2 md:border border-slate-300 rounded-3xl">
            
              <Swiper
                cssMode={true}
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="p-4 h-80 md:max-h-96 mySwiper2"
              >
                <div className="flex items-center justify-center text-center text-[11px] absolute bg-amber-200 rounded-sm w-10 mt-2 font-bold h-5 right-2 top-0 z-10">
                  <p>{`${product.discountPercentage}%`}</p>
                </div>
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={image}
                      className="h-72 w-auto rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex flex-col gap-2 md:mr-80 md:-ml-32">
              <h2 className="font-bold text-3xl md:text-4xl md:mt-10">
                {product.title}
              </h2>
              <div className="flex gap-3 items-end">
                <h3 className="md:text-3xl text-2xl text-primary font-bold">{`GHS ${discountedPrice}`}</h3>
                <h3 className="md:text-3xl line-through text-slate-500 font-bold">{`GHS ${productPrice}`}</h3>
              </div>
              <div className="border-t border-solid border-gray-300"></div>
              <div className="flex flex-col gap-3 overflow-hidden text-elipsis">
                <p>{`${product.description}`}</p>
                <div className="border-t border-solid border-gray-300"></div>
                <div className="flex md:gap-10 gap-1 flex-col md:flex-row w-full">
                  <div className="flex gap-2 ">
                    <p className="font-bold">Brand:</p>{" "}
                    <p>{product.brand} </p>
                  </div>{" "}
                  <span className="hidden md:block">|</span>
                  <div className="flex gap-2">
                    <p className="font-bold">Category:</p>{" "}
                    <Link to="/shop" className="underline cursor-pointer" onClick={()=>categoryFilterHandler(product.category)}>
                      {product.category}
                    </Link>
                  </div>
                </div>
                <div className="rating flex mt-3 gap-1">
                  {[...Array(5)].map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked={index === Math.floor(product.rating - 1)}
                      readOnly
                    />
                  ))}
                  
                  
                  <span>({productStock} in stock)</span>
                </div>
              </div>
              <div className="flex md:items-center md:justify-normal items-center gap-4 md:gap-0 mt-5 flex-nowrap md:grid md:grid-cols-2 ">
                <div className="flex justify-center items-center gap-4 border-2 border-gray-400 h-12 w-32 rounded-full">
                  <button
                    onClick={decrementHandler}
                    className="hover:font-bold"
                  >
                    -
                  </button>

                  <p>{productQuantity}</p>
                  <button
                    onClick={incrementHandler}
                    className="hover:font-bold"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className={`${productStock === 0 || productQuantity > productStock ? 'btn-disabled bg-slate-200 text-slate-400 cursor-not-allowed' : ''} btn-primary bg-primary rounded-full  h-12 w-52 md:w- xl:-ml-28 md:-ml-16`}
                    onClick={() =>
                      addToCartHandler(
                        product.id,
                        product.title,
                        product.thumbnail,
                        discountedPrice,
                        productQuantity,
                        productStock
                      )
                    }
                  >
                    Add to Cart
                  </button>
                    
                  <Toaster/>
                  
                </div>
                
              </div>
              {productStock === 0 &&
                  <div className="h-18  mt-5 text-white flex gap-2 items-start justify-center w-72 md:w-96 bg-red-500 p-2 rounded-md "> 
                  <FaBan />
                  <p className="text-sm">Product out of stock</p>
                  </div>
                    }
                  
              {
                      productQuantity > productStock && productStock !== 0 && 
                      <div className="h-18  mt-5 text-white flex gap-2 items-start justify-center w-72 md:w-96 bg-red-500 p-2 rounded-md "> 
                      <FaBan/>
                      <p className="text-sm">Selected quantity greater than products in stock</p>
                      </div>
                    }
            </div>
            
          </main>
        );
      })}
    </>
  );
}

export default ProductDetail;
