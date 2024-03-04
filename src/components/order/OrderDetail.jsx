import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem  } from "../../store/store.jsx";

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


    
    return (
        <div>
        {/* <h1 className="font-bold text-2xl">{items.length > 1 ? "Products" : "Product"}</h1> */}
        {
            items.map(item=>{
                return(
                <div>
                <div className="grid grid-cols-3 w-80">
                    <div className="h-20">
                    <img className="h-20"  src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <p className="-ml-8">{item.name}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        
                        <div className="border-2 w-14 flex justify-between items-center">
                <button
                  onClick={() => cartItemsClickHandler(item.itemId, false)}
                  className="border-2 w-4"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => cartItemsClickHandler(item.itemId, true)}
                  className="border-2 w-4"
                >
                  +
                </button>
              </div>
              <span className="font-bold">{`GHS ${item.totalPrice}`}</span>
                    </div>
                    
                </div>
                
                </div>
                );
            })
            
        
        
        }
        <div className="flex font-bold justify-between">
                    <span>Sub-total:</span>
                    <span className="text-sky-700">{`GHS ${totalPrice}`}</span>
        </div>
        <div className="flex font-bold justify-between">
                    <span>Shipping (Flat Rate):</span>
                    <span className="text-sky-700">{`GHS ${shippingRate}`}</span>
        </div>
        <div className="flex font-bold justify-between">
                    <span>Total Price:</span>
                    <span className="text-sky-700">{`GHS ${totalPrice + shippingRate}`}</span>
        </div>
    </div>
    );
}

export default OrderDetails;

