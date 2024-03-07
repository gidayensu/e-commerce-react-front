import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice.jsx";
import ShopLoader from "../ShopLoader.jsx";
import ErrorComponent from "../../common/Error.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../../util/http.js";


function FeaturedProduct({ productId }) {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();



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

  const addToCartHandler = (id, title, image, price) => {
    dispatch(addItem({ id, title, image, price }));
  };

  
  return (
    <>
      {data.map((product) => {
        const productPrice = Math.ceil(product.price)
        const discountedPrice = Math.floor(productPrice - productPrice * (product.discountPercentage / 100))

        return (
          <main key={product.id} >
            
            <div className="mb-5 h-[450px] w-72 bg-white rounded-2xl border-2 border-primary">
            <div className="flex items-center justify-center mt-4">
                <img className="rounded-2xl h-36" src={product.thumbnail} alt={product.title} />
            </div>
              <h2 className="font-bold text-2xl ml-4 mt-3">{product.title}</h2>
              <div className="flex gap-3 ml-4 items-end mb-2">
                <h3 className=" text-2xl text-primary font-bold">{`GHS ${discountedPrice}`}</h3>
                <h3 className="line-through text-slate-500 font-bold">{`GHS ${productPrice}`}</h3>
              </div>
              <div className="border-t border-solid ml-4 border-gray-300"></div>
              <div className="flex flex-col ml-4 gap-3 text-sm">
                <p>{`${product.description}`}</p>
                <div className="border-t border-solid border-gray-300"></div>
                
                <div className="rating rating-md flex  gap-1 items-center">
                  {[...Array(5)].map((_, index) => (
                    <input key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={index === Math.floor(product.rating-1)} />
                    
                  ))}
                  <span>({product.stock} in stock)</span>
                </div>
              </div>
              <div className="flex md:items-center md:justify-normal items-center gap-4 md:gap-0 mt-5 flex-nowrap md:grid md:grid-cols-2 ">
                
              <button className="bg-amber-200 w-32 h-10 rounded-full text-sm ml-3 hover:bg-amber-300 font-bold" onClick={() => addToCartHandler(product.id, product.title, product.thumbnail, discountedPrice, productQuantity)}>BUY NOW</button>
                  <button className="bg-primary w-32 h-10 rounded-full text-sm mr-3 hover:bg-blue-800 text-white font-bold" onClick={() => addToCartHandler(product.id, product.title, product.thumbnail, discountedPrice, productQuantity)}>ADD TO CART</button>
                
              </div>
            </div>
          </main>
        );
      })}
    </>
  );
}

export default FeaturedProduct;
