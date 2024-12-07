import { useDispatch, useSelector } from "react-redux";
import Foodlist from "./Foodlist";
import { clearcart } from "../utils/cartslice";

const Cart = () => {
  const Cartitems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearcart());
  };
  return (
    <div className="text-center font-bold justify-between">
      <h1>Cart</h1>
      <button
        onClick={handleclearcart}
        className="p-2 m-2 rounded-2xl  bg-black text-white"
      >
        clearcart
      </button>
      <div>
        {Cartitems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          Cartitems.map((item, index) => <Foodlist key={index} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
