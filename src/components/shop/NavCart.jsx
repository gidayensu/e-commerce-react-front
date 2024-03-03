import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavCartItems from "./NavCartItems";

function Cart() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const totalItems = useSelector((state) => state.cart.totalItems);

  const drawerToggler = ()=> {
    setDrawerOpen(prevDrawerOpen=>!prevDrawerOpen);
  }

  return (
    <>
    <div className="relative ml-14 md:ml-0">
      <div className="group">
    <div className="drawer z-10 drawer-end">
    
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={()=>{}} />
            
  <div className="drawer-content">
    {/* Page content here */}
    <span className="bg-white absolute top-0 right-0 rounded-full h-5 w-5 text-center font-bold">
          {totalItems}
        </span>
    <label onClick = {drawerToggler} htmlFor="my-drawer-4"
          className="btn drawer-button text-gray-300 bg-transparent border-transparent hover:border-transparent hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
          
        >
          <AiOutlineShoppingCart />
        </label>
  </div>
   
  {drawerOpen && <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu p-4 w-80 min-h-full text-base-content bg-white">
         <h2 className="font-bold text-1xl">YOUR CART</h2>
         <button onClick = {drawerToggler} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
         <NavCartItems drawerToggler={drawerToggler}/>
    </ul>
  </div>}
</div>
    {/* <div className="relative ml-14 md:ml-0">
      
      <div className="group"> */}
        
        
        {/* <label htmlFor="my-drawer-4"
          className="btn drawer-button text-gray-300 bg-transparent border-transparent hover:border-transparent hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
          
        >
          <AiOutlineShoppingCart />
        </label> */}
        {/* <NavCartItems /> */}
      </div>
    </div>
    </>
  );
}

export default Cart;
