// PRODUCT STRUCTURE
// 1.	Product id,
// 2.	Category
// 3.	Name
// 4.	Description
// 5.	Price
// 6.	Quantity Available
// 7.	Image
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
  
      {data.length === 0 && (<ShopLoader number={20} />
      )}
      <main className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-2">
        {data.map((product) => {
          const productPrice = Math.ceil(product.price);
          return (
            <div className="flex flex-col justify-center" key={product.id}>
              <div className="relative group">
                <div className="flex-grow card card-compact lg:w-60 bg-base-100 shadow-xl h-54 cursor-pointer">
                  <Link to={`/shop/product/${product.id}`}>
                  <figure className="h-40">
                    {!product.image && (
                      <span className="loading loading-ring loading-lg"></span>
                    )}
                    {product.image && (
                      <img
                        className="h-full object-cover"
                        src={product.image}
                        alt={product.title}
                      />
                    )}
                  </figure>
                  </Link>
                  <div className="card-body">
                    <h2 className="card-title line-clamp-2 overflow-hidden text-ellipsis text-sm">
                      {product.title}
                    </h2>
                    <h2 className="text-sky-800 font-bold">{`GHS ${productPrice}`}</h2>
                  </div>
                  <div className="md:flex md:gap-4 grid items-center justify-center absolute bottom-14 h-10  md:bg-white bg-sky-900 text-white md:text-black text-2xl mb-4 w-full md:transition-opacity md:duration-300 md:opacity-0 md:group-hover:opacity-100  ">
                    <button
                      onClick={() =>
                        addToCartHandler(
                          product.id,
                          product.title,
                          productPrice,
                          product.image
                        )
                      }
                      className="rounded-full hover:bg-sky-700 hover:text-white md:w-7 md:h-7 "
                    >
                      <span className="hidden md:block">
                        <AiOutlineShoppingCart />
                      </span>
                      <span className="md:hidden block text-sm">
                        Add to Cart
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
