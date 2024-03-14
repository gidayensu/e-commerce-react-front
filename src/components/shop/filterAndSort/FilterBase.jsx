import { IoIosInformationCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { filterByPrice, filterByCategory, filterBySearch, clearFilters } from "../../../store/productFilterSlice.jsx";
import { useState } from "react";
import { HIGHEST_PRICE } from "../../../store/productFilterSlice.jsx";

function FilterBase () {
    const [minPrice, setMinPrice]  = useState(0);
    const [maxPrice, setMaxPrice] = useState(HIGHEST_PRICE);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const { categoryCounts, category:selectedCategory, filtered } = useSelector(state=>state.filter);
    
    const { products } = useSelector(state=>state.products);
    const { categories } = useSelector(state=>state.categories);

  

    const dispatch = useDispatch();

    const numberMaxPrice = parseFloat(maxPrice)
    const numberMinPrice = parseFloat(minPrice);    
  

  //filtering using redux
  const clearFiltersHandler = ()=> {
    dispatch(clearFilters())
  }

  const categoryFilterHandler = (category)=> {
    dispatch(
        filterByCategory({
          category,
          products
        })
    )
  }

  const maxPriceHandler = (event) => setMaxPrice(event.target.value);
  const minPriceHandler = (event) => setMinPrice(event.target.value);

  const priceFilterHandler = ()=> {

    dispatch(
      filterByPrice({
        minPrice: numberMinPrice,
        maxPrice: numberMaxPrice,
        products
    }))
  }

  const searchFilterHandler = (event, products)=> {
    const eventData = event.target.value;
    dispatch(filterBySearch({
      eventData,
      products
    }))
  }

  //more or less categories
  const toggleShowAllCategories = () =>  setShowAllCategories(!showAllCategories);

   
    // const filterClass = "-ml-4 md:-ml-0 w-80 md:w-60 h-9 flex items-center";

    
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 cursor-pointer">

        {categories.slice(0, showAllCategories ? categories.length : 4).map((category, index) => {
      const filterClass =
        selectedCategory === category ? "bg-primary text-white w-44 rounded-sm" : ""; 
      return (
        <span
          key={index}
          className={filterClass}
          onClick={() => categoryFilterHandler(category)}
        >
          <p className="ml-5">
            {category} ({categoryCounts[category] ? categoryCounts[category] : 0})
          </p>
        </span>
      );
    })}
    {categories.length > 4 && (
      <span className="cursor-pointer text-primary" onClick={toggleShowAllCategories}>
        {showAllCategories ? `Show less` : `Show all ${categories.length}`}
      </span>
    )}
  </div>
        <span className="mt-5 font-bold">PRICE RANGE</span>
        <div className="flex gap-3 items-center">
          <span className="grid">
            <label htmlFor="" className="text-[11px]" >
              
              
              Minimum Price
            </label>
            <input
              type="text"
              className="w-24 h-12 border rounded-md text-sm" onChange={minPriceHandler}
            />
          </span>
          <p>-</p>
          <span className="grid">
            <label htmlFor="" className="text-[11px]">
              
              MaximumPrice
            </label>
            <input
              type="text"
              className="w-24 h-12 border rounded-md text-sm"
              onChange={maxPriceHandler}
            />
          </span>
        </div>
        
        <button className={`${ numberMinPrice > numberMaxPrice || numberMinPrice === 0 ? 'btn-disabled bg-gray-400': 'bg-primary'} w-56 h-8 rounded-md text-white text-[12px] `}
        onClick={priceFilterHandler}>
          Apply Filter
          
        </button>
        
        {numberMinPrice > numberMaxPrice  && 
        <div className="text-red-400 text-[12px] grid grid-cols-4 border-2 border-red-300 rounded-lg w-56 h-16 p-2 font-bold bg-red-100">
          <IoIosInformationCircleOutline className="text-2xl"/>
          <p className="col-span-3 -ml-4">Maximum price should be higher than minimum price </p>
        </div>}

        {filtered && <button className="bg-amber-300 w-56 h-8 rounded-md text-black text-[12px]" onClick={clearFiltersHandler}> Clear Filter </button>}
      </div>
    );
}

export default FilterBase;