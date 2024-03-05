import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/store";

function ProductDetail({ productData }) {
  const [productQuantity, setProductQuantity] = useState(1);
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
        return (
          <main
            key={product.id}
            className="flex flex-col m-6 md:m-0 md:grid md:grid-cols-2 md:mt-16 md:mb-36 mt-6 mb-6"
          >
            <div className="flex justify-center items-start md:ml-64 md:w-1/2 md:border border-slate-300">
              <img
                src={product.image}
                alt={product.title}
                className="p-4 h-80 md:max-h-96"
              />
            </div>
            <div className="flex flex-col gap-2 md:mr-80 md:-ml-32">
              <h2 className="font-bold text-3xl md:text-4xl md:mt-0 mt-10">
                {product.title}
              </h2>
              <h3 className="md:text-3xl text-2xl text-primary font-bold">{`GHS ${productPrice}`}</h3>
              <div className="border-t border-solid border-gray-300"></div>
              <div className="overflow-hidden text-elipsis">
              
                <p className="">{`${product.description}`}</p>
                <div className="rating flex mt-3 gap-1">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <span>(224 Verified ratings)</span>
                </div>
              </div>
              <div className="flex md:justify-start md:items-start  items-center gap-4 md:gap-0 flex-nowrap md:grid md:grid-cols-2 ">
                <div className="flex justify-center items-center gap-4 border-2 border-gray-400  h-12 w-32 rounded-full">
                  <button onClick={incrementHandler} className="hover:font-bold">+</button>
                  <p>{productQuantity}</p>
                  <button className="hover:font-bold" onClick={decrementHandler}>-</button>
                </div>

                <div>
                  <button className="bg-primary hover:bg-sky-700 rounded-full text-white h-12 w-52 md:w-96" onClick={()=>addToCartHandler(
                    product.id, 
                    product.title, 
                    product.image,
                    productPrice,
                    productQuantity
                     )}>
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
