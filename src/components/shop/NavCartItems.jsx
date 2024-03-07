import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem, clearCart } from "../../store/cartSlice.jsx";

function CartItems({drawerToggler}) {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clearCartHandler = ()=> {
    dispatch(clearCart())
  }

  const cartItemsClickHandler = (id, isIncrement) => {
    const action = isIncrement ? addItem : removeItem;
    dispatch(action({ id }));
    
    };

  return (          
    <main className='mt-10'>
    {items.map((item) => (
        <section className='mb-5' key={item.itemId}>
          <div className="w-full grid grid-cols-4 gap-1 justify-start">
            <div className="flex items-start">
              <img className="w-16 h-auto" src={item.image} alt={item.name} />
            </div>
            <div className='col-span-3'>
            <div className="truncate">
              {item.name}
            </div>
            <div className="">
              <div className="w-40 flex justify-between items-center col-span-2">
                <button
                  onClick={() => cartItemsClickHandler(item.itemId, false)}
                  className=" w-4 text-2xl"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => cartItemsClickHandler(item.itemId, true)}
                  className="text-2xl w-4"
                >
                  +
                </button>
                <p className='ml-5 font-bold'>{`GHS ${item.totalPrice}`}</p>  
              </div>
              <button className='bg-gray-900 rounded-md text-[11px] text-white h-7 w-16'> remove</button>  
              </div>
              
            </div>
          </div>
          <div></div>
        </section>
      ))}
      <div className="w-full mt-8">
        {totalPrice === 0 ? (
          <div className="flex flex-col justify-center items-center gap-4">
          <img className = "w-32 h-auto md:w-64" src="https://www.mittalstamp.com/empty%20cart%20icon.svg" alt="empty cart" />
          <p className=" font-bold text-center">
            No Items. Add Items to Cart
          </p>
          <Link to="shop"><button onClick={drawerToggler} className="btn btn-primary">Return to Shop</button></Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="font-bold text-center">{`Total: GHS ${totalPrice}`}</p>
            <button onClick={clearCartHandler} className="p-1 border-2 hover:border-gray-950 border-gray-700 text-black font-bold rounded-full">VIEW CART</button>
            
            <Link to="/shop/checkout"><button onClick={drawerToggler} className="p-1 w-full h-8 bg-primary text-white font-bold rounded-full">CHECKOUT</button></Link>
          </div>
        )}
      </div>

      </main>
  
  );
}

export default CartItems;
