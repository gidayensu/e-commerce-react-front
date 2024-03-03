import { Link } from "react-router-dom";
import CheckoutForm from "../components/shop/CheckoutForm.jsx";
import OrderDetail from "../components/order/OrderDetail.jsx";
import { useSelector } from "react-redux";

function CheckoutPage () {
    const { items } = useSelector((state) => state.cart);

    if(items.length==0)   {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
            <img className = "w-32 h-auto md:w-64" src="https://www.mittalstamp.com/empty%20cart%20icon.svg" alt="empty cart" />
            <p className=" font-bold text-center">
              No Items. Add Items to Cart
            </p>
            <Link to="/shop" className="btn btn-primary">Return to Shop</Link>
            </div>
        )
    }

    return <div className="flex flex-col ml-10 mr-10 md:flex-row-reverse gap-4 md:mr-96 md:ml-96">
        <OrderDetail/>
        {/* <h1 className="font-bold text-2xl">Shipping Details</h1> */}
        <CheckoutForm/>
    </div>
}

export default CheckoutPage;