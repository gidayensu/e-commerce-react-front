// import { fetchProducts } from "../../../util/http";
// import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { scrollToTop } from "../../common/ScrollToTop.js";
import { filterByCategory } from "../../../store/productFilterSlice.jsx";
import { useSelector, useDispatch } from "react-redux";

function CategoryUI({ categoryName, imageUrl }) {
  const dispatch = useDispatch();
  
  const { products } = useSelector(state=>state.products);
    
  const categoryFilterHandler = (category)=> {
    dispatch(
        filterByCategory({
          category,
          products
        })
    )
    scrollToTop();
  }
  //   let numberOfProducts = 0;
    
  
  //   const source = categoryName;
  // const {data, isPending, error} = useQuery({
  //   queryKey: ['categoryCounts'],
  //   queryFn: ()=> fetchProducts({source})
  // })

  // if (isPending) {
  //   return <span className="loading loading-ring loading-md"></span>
  // }

  // if (error) {
  //   return {message: error}
  // }
  
  // numberOfProducts = data.products.length

  

  return (
    <Link to="/shop" ><div  className="flex flex-col items-center" onClick={()=>categoryFilterHandler(categoryName)}>
      <div className="relative">
        <div className="group bg-slate-300 h-36 w-36  rounded-lg flex items-center justify-center overflow-hidden">
          <img className="object-cover rounded-xl h-36 w-auto transition-opacity duration-300 ease-in-out group-hover:brightness-50" src={imageUrl} alt={categoryName} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold">{categoryName}</p>
          </div>
        </div>
      </div>
      <p className="mt-3 inline font-bold">{categoryName}</p>
      {/* <p>{numberOfProducts} products</p> */}
    </div></Link>
  );
}

export default CategoryUI;
