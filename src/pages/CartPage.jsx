import { Link } from "react-router-dom";
import OrderDetail from "../components/order/OrderDetail.jsx";
import { useSelector } from "react-redux";
import Breadcrumbs from "../components/common/Breadcrumbs.jsx";
import { scrollToTop } from "../components/common/ScrollToTop.js";


function CartPage () {

    const { items } = useSelector((state) => state.cart);
    scrollToTop()
    
    if(items.length==0)   {
        return (
            <>
           <Breadcrumbs />
            
            <div className="flex flex-col justify-center items-center gap-4">
            <img className = "w-32 h-auto md:w-64" src="https://www.mittalstamp.com/empty%20cart%20icon.svg" alt="empty cart" />
            <p className=" font-bold text-center">
              No Items. Add Items to Cart
            </p>
            <Link to="/shop" className="btn btn-primary">Return to Shop</Link>
            </div>
            </>
        )
    }

    return (
      <>
      <Breadcrumbs/>
      <div className="flex flex-col gap-5 justify-center items-center ">
          <OrderDetail />
          <Link to ="/shop/checkout" className="btn btn-primary bg-white border-primary border-2 text-primary rounded-full md:w-1/3 w-2/3 font-bold ">Checkout</Link>
          <Link to="/shop" className="btn btn-primary rounded-full md:w-1/3 w-2/3 font-bold ">Return to Shop</Link>
          
        
        </div>
      </>
    );
}

export default CartPage;