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
    <div className="max-w-3xl mx-auto px-2 py-4">
      <h1 className="text-center text-2xl font-bold mb-4">Cart</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <button
          onClick={handleclearcart}
          className="p-2 rounded-2xl bg-black text-white w-full sm:w-auto"
        >
          Clear Cart
        </button>
        <span className="text-lg font-semibold">
          {Cartitems.length} item{Cartitems.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {Cartitems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          Cartitems.map((item, index) => <Foodlist key={index} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
