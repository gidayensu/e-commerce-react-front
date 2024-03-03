import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/store";
import { Link } from "react-router-dom";
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
              <h3 className="md:text-3xl text-2xl text-sky-700 font-bold">{`GHS ${productPrice}`}</h3>
              <div className="border-t border-solid border-gray-300"></div>
              <div className="overflow-hidden text-elipsis">
              
                <p className="">{`${product.description}`}</p>
              </div>
              <div className="flex md:justify-start md:items-start  items-center gap-4 md:gap-0 flex-nowrap md:grid md:grid-cols-2">
                <div className="flex border justify-center items-center gap-4 border-gray-400 h-12 w-32">
                  <button onClick={incrementHandler}>+</button>
                  <p>{productQuantity}</p>
                  <button onClick={decrementHandler}>-</button>
                </div>

                <div>
                  <button className="bg-sky-600 hover:bg-sky-700 rounded-sm text-white h-12 w-52 md:w-96" onClick={()=>addToCartHandler(
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
