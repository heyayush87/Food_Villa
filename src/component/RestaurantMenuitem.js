import React from "react";
import Foodlist from "./Foodlist";

const RestMenuitem = ({ item, showitem, setshowindex, dummy }) => {
  const handleclick = () => {
    setshowindex(!showitem);
  };

  return (
    <>
      <div
        className="w-full max-w-xl mx-auto my-5 shadow-xl pb-5 bg-slate-100 flex justify-between items-center font-bold cursor-pointer px-4 py-3 transition hover:bg-slate-200 min-w-0"
        onClick={handleclick}
      >
        <span className="truncate">
          {item?.title || "Loading..."} ({item?.itemCards?.length || 0})
        </span>
        <span>⬇️</span>
      </div>

      {showitem &&
        Object.values(item?.itemCards).map((items, index) => (
          <Foodlist key={index} item={items?.card?.info} />
        ))}
    </>
  );
};
export default RestMenuitem;
