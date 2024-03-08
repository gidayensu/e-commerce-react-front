import {  useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice.jsx";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { clearFilters, filterByCategory, filterByPrice, filterBySearch} from "../../store/productFilterSlice.jsx";

import PaginatedProducts from "./products/PaginatedProducts.jsx";

function Products({ source }) {



  const { products } = useSelector((state)=>state.products);

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
  

//setting products to be displayed





  return (
    
    <PaginatedProducts itemsPerPage={10}/>
  );
}

export default Products;

