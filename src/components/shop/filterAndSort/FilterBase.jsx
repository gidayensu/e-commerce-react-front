import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByPrice, filterByCategory, filterBySearch, clearFilters } from "../../../store/productFilterSlice.jsx";


function FilterBase () {
    
    const { categoryCounts } = useSelector(state=>state.filter);
    const { products } = useSelector(state=>state.products);
    const { categories } = useSelector(state=>state.categories);

    const [clickedCategory, setClickedCategory] = useState(null);

    


    


    const dispatch = useDispatch();

    
  

  //filtering using redux
  const clearFiltersHandler = ()=> {
    dispatch(clearFilters())
  }

  const categoryFilterHandler = (category)=> {
    setClickedCategory(category);
    dispatch(
        filterByCategory({
          category,
          products
        })
    )
  }

  const priceFilterHandler = (minPrice, maxPrice)=> {
    dispatch(
      filterByPrice({
        minPrice,
        maxPrice,
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


   
    const filterClass = "-ml-4 md:-ml-0 w-80 md:w-60 h-9 flex items-center";

    
    return(
        <div className="flex flex-col gap-4">
                           
                            
                           <div className="flex flex-col gap-1 cursor-pointer">
            {categories.map((category, index) => {
                const filterClass = clickedCategory === category ? "bg-primary text-white w-44 rounded-sm" : ""; // Apply blue color if the category is selected
                return (
                    <span key={index} className={filterClass} onClick={() => categoryFilterHandler(category)}>
                        <p className="ml-5">
                            {category} ({categoryCounts[category] ? categoryCounts[category] : 0})
                        </p>
                    </span>
                );
            })}
        </div>
                            <span className="mt-5 font-bold">PRICE RANGE</span>
                            <div className="flex gap-3 items-center">
                                <span className="grid">
                                    <label htmlFor="" className="text-[11px]"> Minimum Price</label>
                                    <input type="text" className="w-24 h-12 border rounded-md text-sm" />
                                </span>
                                <p>-</p>
                                <span className="grid">
                                    <label htmlFor="" className="text-[11px]"> MaximumPrice</label>
                                    <input type="text" className="w-24 h-12 border rounded-md text-sm" />
                                </span>
                            </div>
                            <button className="bg-primary w-56 h-8 rounded-md text-white text-[12px]">Apply Filter</button>
                        </div>
    )
}

export default FilterBase;