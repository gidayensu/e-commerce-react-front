import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from "react-redux";
import { addItem } from "../../store/store.jsx";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProducts } from "../../util/http.js";
import ShopLoader from './ShopLoader.jsx';
import Error from '../common/Error.jsx';
function Products({ featured }) {
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


  const { data, isPending, error,} = useQuery({
    queryKey: ['products'],
    queryFn: ()=> fetchProducts({featured})
  });

  if (isPending) {
    if (featured) {
      return <ShopLoader number={8} />;
    } else {
      return <ShopLoader number={20} />;
    }
  }

  if (error) {
    return <Error title={'Failed to load products'} message={error.info?.message || 'Failed to load products data, please try again'}/>;
}


  return (
    <>
     <main className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-2">
        {data.map((product) => {
          const productPrice = Math.ceil(product.price);
          return (
               <div key={product.id} className="relative group">
                <div className="lg:w-56 bg-base-100 shadow-md  h-64 cursor-pointer">
                  <Link to={`/shop/product/${product.id}`}>
                  <figure className="flex justify-center items-center h-40">
                    {!product.image && (
                      <span className="loading loading-ring loading-lg"></span>
                    )}
                    {product.image && (
                      <img
                        className="mt-5 h-full object-cover"
                        src={product.image}
                        alt={product.title}
                      />
                    )}
                  </figure>
                  </Link>
                  <div className="md:mx-5 mt-5 mx-2">
                    <h2 className="line-clamp-2 overflow-hidden text-ellipsis text-sm ">
                      {product.title}
                    </h2>
                    <h2 className="text-sky-800 font-bold">{`GHS ${productPrice}`}</h2>
                  </div>
                  <div>
                  <div className="md:flex gap-4 flex items-center justify-center absolute bottom-14 h-10 mb-4 lg:w-60 md:transition-opacity md:duration-500 md:opacity-0 md:group-hover:opacity-100">
                    <button
                      onClick={() =>
                        addToCartHandler(
                          product.id,
                          product.title,
                          productPrice,
                          product.image
                        )
                      }
                      className="bg-white text-2xl"
                    >
                      <span className="block">
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
    </>
  );
}

export default Products;
