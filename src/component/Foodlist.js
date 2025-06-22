import { IMG_URL } from "../Constant";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";

const Foodlist = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(additem(item));
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 flex flex-col sm:flex-row justify-between gap-4 border-b border-gray-200 pb-4 px-2 sm:px-4">
      {/* Left Section - Name, Price, Description */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-base sm:text-lg">
            {item?.name}
          </span>
          <span className="text-sm sm:text-base text-gray-700">
            ₹{item?.price ? item.price / 100 : item?.defaultPrice / 100}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2 sm:mb-0">
          {item?.description}
        </p>
      </div>

      {/* Right Section - Image and Add Button */}
      <div className="w-full sm:w-40 flex flex-col items-center gap-2">
        {item?.imageId && (
          <div className="w-full h-28 overflow-hidden rounded-md shadow">
            <img
              src={IMG_URL + item.imageId}
              alt={item?.name || "Food Image"}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <button
          onClick={handleAddItem}
          className="w-24 sm:w-auto text-xs sm:text-sm bg-slate-200 hover:bg-slate-300 font-medium px-3 py-1 rounded shadow"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default Foodlist;
