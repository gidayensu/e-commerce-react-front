import { addItem } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
function ProductsUI ({productsData}) {

    const dispatch = useDispatch();
  
  const addToCartHandler = (id, title, price, image) => {
      dispatch(
      addItem({
        id,
        title,
        price,
        image,
      })
    );
    toast.success(`"${title}" has been added to your cart`, {
      position: "top-center"
    });
    
      
  };
    return (
    <>
    {productsData.length===0 && (<div>No Products found</div>)}
     <main className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-2">
      

        {productsData.map((product) => {
          
          const productPrice = Math.ceil(product.price);
          const discountedPrice = Math.floor(productPrice - productPrice * (product.discountPercentage / 100))
          return (
               <div key={product.id} className="relative group md:mb-4">
                <div className="lg:w-56 xl:w-52 bg-base-100 shadow-md rounded-lg cursor-pointer  md:h-52">
                  <div className="flex items-center justify-center text-center text-[11px] absolute bg-amber-200 font-semibold rounded-sm w-10 mt-2 h-4 md:right-3 right-1">
                      <p>{`${product.discountPercentage}%`}</p>
                  </div>
                  <Link to={`/shop/product/${product.id}`}>
                  <figure className="flex justify-center items-center h-32 ">
                    {!product.thumbnail && (
                      <span className="loading loading-ring loading-lg"></span>
                    )}
                    {product.thumbnail && (
                      <img
                        className="h-full object-cover rounded-lg"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    )}
                  </figure>
                  </Link>
                  <div className="md:mx-5 mt-5 mx-2">
                    <h2 className="truncate overflow-hidden text-ellipsis text-sm ">
                      {product.title}
                    </h2>
                    <div className="flex gap-1 items-end">
                    <h2 className="text-[#246fc6] font-bold text-sm md:text-[18px]">{`GHS ${productPrice}`}</h2>
                    <h2 className="text-slate-500 text-[10px] line-through md:text-sm">{`GHS ${productPrice}`}</h2>
                    </div>
                  </div>
                  <div>
                  <div className="md:flex gap-4 flex items-center justify-center absolute bottom-14 h-10 mb-4 lg:w-60 md:transition-opacity md:duration-500 md:opacity-0 md:group-hover:opacity-100">
                    <button
                      onClick={() =>
                        addToCartHandler(
                          product.id,
                          product.title,
                          discountedPrice,
                          product.thumbnail
                        )
                      }
                      className="bg-white text-2xl"
                    >
                      <span className="hidden md:block">
                        <AiOutlineShoppingCart />
                      </span>
                                        </button>
                    <button className="hidden md:block">
                      <AiOutlineHeart />
                    </button>
                  </div>
                  </div>
                </div>
              </div>
          
          );
        })}
      </main>
    </>)
}

export default ProductsUI