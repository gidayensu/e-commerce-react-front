import { AiOutlineHeart, AiOutlineShoppingCart,  } from "react-icons/ai";
import ProductsUI from "./products/ProductsUI.jsx";
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice.jsx";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProducts } from "../../util/http.js";
import ShopLoader from './ShopLoader.jsx';
import Error from '../common/Error.jsx';
import { clearFilters, filterByCategory, filterByPrice, filterBySearch} from "../../store/productFilterSlice.jsx";


function Products({ source }) {
  
  

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
    queryFn: ()=> fetchProducts({source})
  });

  
  
  if (isPending) {
    if (source) {
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
  displayedProducts = data.products;
} else {
  displayedProducts = products;
}




  return (
    
    <ProductsUI productsData={displayedProducts}/>
  );
}

export default Products;

