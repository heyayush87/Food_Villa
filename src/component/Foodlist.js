import { IMG_URL } from "../Constant";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";
const Foodlist = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(additem(item));
  };

  return (
    <>
      <div className="w-6/12 mx-auto my-5 flex justify-between">
        <div>
          <span className="font-semibold">{item?.name}</span>
          <span className="pl-2">
            ₹ {item?.price ? item.price / 100 : item?.defaultPrice / 100}
          </span>
        </div>
        <div className="w-3/12">
          <div className="absolute">
            <button
              className="p-0 bg-slate-300 shadow-sm "
              onClick={() => handleAddItem(item)}
            >
              Add+
            </button>
          </div>
          <img
            src={item?.imageId ? IMG_URL + item.imageId : "fallback_image_url"}
            alt={item?.name || "Food Image"}
            className="w-22"
          />
        </div>
      </div>
      <div>
        <div className="w-6/12 mx-auto my-5 flex justify-between p-2 m-2 border-gray-200 border-b-2">
          <span>{item?.description}</span>
        </div>
      </div>
    </>
  );
};

export default Foodlist;
