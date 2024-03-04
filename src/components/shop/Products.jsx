import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/store.jsx";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProducts } from "../../util/http.js";
import ShopLoader from './ShopLoader.jsx';
import Error from '../common/Error.jsx';
import { clearFilters, filterByCategory, filterByPrice, filterBySearch} from "../../store/store.jsx";


function Products({ featured }) {
  
  

  //using products from redux state
  const { products } = useSelector((state)=>state.filter)

  //add to cart handler

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

  //filtering using redux
  const clearFiltersHandler = ()=> {
    dispatch(clearFilters())
  }

  const categoryFilterHandler = (category, data)=> {
    dispatch(
        filterByCategory({
          category,
          data
        })
    )
  }

  const priceFilterHandler = (minPrice, maxPrice, data)=> {
    dispatch(
      filterByPrice({
        minPrice,
        maxPrice,
        data
    }))
  }

  const searchFilterHandler = (event, data)=> {
    const eventData = event.target.value;
    dispatch(filterBySearch({
      eventData,
      data
    }))
  }

//fetching data
  const  { data, isPending, error,} = useQuery({
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

//setting products to be displayed
let displayedProducts = []
if(products.length === 0) {
  displayedProducts = data;
} else {
  displayedProducts = products;
}
//filters
// const allProducts = () => {
//   setDataToBeDisplayed(data)
// }
// const filterProductsBySearch = (event)=> {
//   const regex = new RegExp(event.target.value, 'i')
//   (data.filter((item) => regex.test(item.title)));}


// const filterProductsByCategory = (category) => {
//   if(dataToBeDisplayed.length !== 0) {
//     setDataToBeDisplayed(dataToBeDisplayed.filter((item) => item.category === category))  
//   } else {
//   if(data){
//   setDataToBeDisplayed(data.filter((item) => item.category === category));}
// };
// }

// const filterProductsByPrice = (minprice, maxprice) => {
//     if(dataToBeDisplayed.length !== 0) {
//       setDataToBeDisplayed(dataToBeDisplayed.filter((item)=> item.price <= maxprice && item.price >= minprice)) 
//   } else {
  
//   if(data) {
//     setDataToBeDisplayed(data.filter((item)=> item.price <= maxprice && item.price >= minprice))
//   }}
// }




  return (
    <>
    
    
    <input type="text" className="border w-full border-black" placeholder="search" onChange={(event)=>{searchFilterHandler(event, data)}} />
    
    <div className="flex rounded-md w-full h-8 shadow-md border-2 border-black text-sm text-center p-1 my-4 cursor-pointer">
    <button  className="border-r-2 rounded-l-md border-black w-1/4 hover:bg-slate-200" onClick={()=>priceFilterHandler(0, 1000000000, data)
      }> All</button>
      <button  className="border-r-2 rounded-l-md border-black w-1/4 hover:bg-slate-200" onClick={()=>priceFilterHandler(0, 100, data)}> GHS 0 - 100</button>
      <button className="border-r-2 border-black w-1/4 hover:bg-slate-200" onClick={()=> priceFilterHandler(100, 499, data)
      }>GHS 100 - 499 </button>
      <button className="border-r-2  border-black w-1/4 hover:bg-slate-200" onClick={()=>priceFilterHandler(500, 1000, data)}> GHS 500 - GHS 1000 </button>
      <button className=" rounded-r-md border-black w-1/4 hover:bg-slate-200" onClick={()=>priceFilterHandler(10001, 1000000, data)}> GHS 1001+ </button>
      
    </div>
    
    
    <div className="flex rounded-md w-full h-8 shadow-md border-2 border-black text-sm text-center p-1 my-4 cursor-pointer">
    <button  className="border-r-2 rounded-l-md border-black w-1/4 hover:bg-slate-200" onClick={()=>categoryFilterHandler('', data)}> All</button>
      <button  className="border-r-2 rounded-l-md border-black w-1/4 hover:bg-slate-200" onClick={()=>
        categoryFilterHandler("men's clothing", data)
      }> Men's Clothing</button>
      <button className="border-r-2 border-black w-1/4 hover:bg-slate-200" onClick={()=> categoryFilterHandler("jewelery", data)
      }>jewelery </button>
      <button className="border-r-2  border-black w-1/4 hover:bg-slate-200"
      onClick={()=>categoryFilterHandler("electronics", data)}> Electronics </button>
      <button className=" rounded-r-md border-black w-1/4 hover:bg-slate-200" onClick={()=>categoryFilterHandler("women's clothing", data)}> Women's Clothing </button>
      
    </div>
    {displayedProducts.length===0 && (<div>No Products found</div>)}
     <main className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-2">
      

        {displayedProducts.map((product) => {
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

