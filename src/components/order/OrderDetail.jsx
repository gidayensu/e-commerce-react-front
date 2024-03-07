import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem  } from "../../store/cartSlice.jsx";
import { BsTrash3Fill } from "react-icons/bs";

function OrderDetails () {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const clearCartHandler = ()=> {
    dispatch(clearCart())
  }

  const shippingRate = 20;

  const cartItemsClickHandler = (id, isIncrement) => {
    const action = isIncrement ? addItem : removeItem;
    dispatch(action({ id }));
    
    };

const calculationClass = "grid grid-rows-3 w-72 gap-1 font-bold";
    
    return (
        <div>
        <p className="font-bold mb-2 text-2xl">Order Details</p>
        {
            items.map(item=>{
                return(
                <div>
                <div className="flex gap-4 w-72 border p-4 rounded-lg mb-5 bg-gray-50 border-gray-300">
                    <img className="h-14 md:h-16"  src={item.image} alt={item.name} />
                    <div className="col-span-2 w-32 flex flex-col  items-start">
                        <p className="text-sm line-clamp-2">{item.name}</p>
                        <span className="font-bold text-left">{`GHS ${item.totalPrice}`}</span>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        
                        <div className=" w-14 flex justify-between items-center">
                <button
                  onClick={() => cartItemsClickHandler(item.itemId, false)}
                  className="text-2xl hover:font-bold w-4"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => cartItemsClickHandler(item.itemId, true)}
                  className="text-2xl hover:font-bold w-4"
                >
                  +
                </button>
              </div>
              <BsTrash3Fill/>
              <div>
                
              </div>
                    </div>
                    
                </div>
                
                </div>
                );
            })
            
        
        
        }
        <div className={calculationClass}>
        <div className="flex justify-between">
                    <span>Sub-total:</span>
                    <span className="text-primary">{`GHS ${totalPrice}`}</span>
        </div>
        <div className="flex justify-between">
                    <span>Shipping (Flat Rate):</span>
                    <span className="text-primary">{`GHS ${shippingRate}`}</span>
        </div >
        <div className="flex justify-between">
                    <span>Total Price:</span>
                    <span className="text-primary">{`GHS ${totalPrice + shippingRate}`}</span>
        </div>
        </div>
    </div>
    );
}

export default OrderDetails;

