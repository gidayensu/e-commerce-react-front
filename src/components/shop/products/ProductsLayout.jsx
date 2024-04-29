
import { Link } from "react-router-dom";
import ShopLoader from "../ShopLoader";


function ProductsLayout ({productsData}) {

    
  
    return (
    <>
    {productsData.length===0 && (<ShopLoader number={10}/>)}
     <main className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-2">
      

        {productsData.map((product) => {
          const {id, price, discountPercentage, title, thumbnail} = product
          const productPrice = Math.ceil(price)
          const discountedPrice = Math.floor(productPrice - (productPrice * (discountPercentage / 100)))
          return (
               <div key={id} className="relative group md:mb-4">
                <div className="lg:w-56 xl:w-52 bg-base-100 shadow-md rounded-lg cursor-pointer  md:h-52">
                  <div className="flex items-center justify-center text-center text-[11px] absolute bg-amber-200 font-semibold rounded-sm w-10 mt-2 h-4 md:right-3 xl:right-5 right-1">
                      <p>{`${discountPercentage}%`}</p>
                  </div>
                  <Link to={`/shop/product/${id}`}>
                  <figure className="flex justify-center items-center h-32 ">
                    {!thumbnail && (
                      <span className="loading loading-ring loading-lg"></span>
                    )}
                    {thumbnail && (
                      <img
                        className="h-full object-cover rounded-lg"
                        src={thumbnail}
                        alt={title}
                      />
                    )}
                  </figure>
                  </Link>
                  <div className="md:mx-5 mt-5 mx-2">
                    <h2 className="truncate overflow-hidden text-ellipsis text-sm ">
                      {title}
                    </h2>
                    <div className="flex gap-1 items-end">
                    <h2 className="text-[#246fc6] font-bold text-sm md:text-[18px]">{`GHS ${discountedPrice}`}</h2>
                    <h2 className="text-slate-500 text-[10px] line-through md:text-sm">{`GHS ${productPrice}`}</h2>
                    </div>
                  </div>
                  <div>
                
                  </div>
                </div>
              </div>
          
          );
        })}
      </main>
    </>)
}

export default ProductsLayout