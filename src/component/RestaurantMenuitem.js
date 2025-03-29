import React from "react";
import Foodlist from "./Foodlist";

const RestMenuitem = ({ item, showitem, setshowindex, dummy }) => {
  // console.log("food item", item.itemCards);
  // console.log(dummy);

  const handleclick = () => {
    // console.log("clicked");
    setshowindex(!showitem);
  };

  return (
    <>
      <div
        className="w-6/12  mx-auto my-5 shadow-xl pb-5 bg-slate-100  flex justify-between font-bold cursor-pointer"
        onClick={handleclick}
      >
        <span>
          {item?.title || "Loading..."} ({item?.itemCards?.length || 0})
        </span>

        <span>⬇️ </span>
      </div>

      {showitem &&
        Object.values(item?.itemCards).map((items, index) => (
          <Foodlist key={index} item={items?.card?.info} />
        ))}
    </>
  );
};
export default RestMenuitem;
