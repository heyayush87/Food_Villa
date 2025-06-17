import { useParams } from "react-router-dom";
import { useState } from "react";
import TempShimmer from "./TempShimmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuitem from "./RestaurantMenuitem";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { ResDetails, error } = useRestaurant(id);
  const { resMenu, loading } = useRestaurantMenu(id);
  const [showindex, setshowindex] = useState(null);
 

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (loading) {
    return <TempShimmer variant="menu" />;
  }

  return (
    <div className="max-w-2xl mx-auto px-2 py-4 text-center">
      {/* Restaurant Name */}
      <h1 className="font-bold my-6 text-2xl sm:text-3xl">
        {ResDetails?.name || "Loading..."}
      </h1>

      {/* Restaurant Menu */}
      <h2 className="font-bold text-lg sm:text-xl mb-4">Menu</h2>

      <div className="flex flex-col gap-4">
        {resMenu && resMenu.length > 0 ? (
          resMenu.map((item, index) => (
            <RestaurantMenuitem
              key={index}
              item={item?.card?.card}
              showitem={index === showindex}
              setshowindex={() =>
                setshowindex(index === showindex ? null : index)
              }
            />
          ))
        ) : (
          <p className="text-gray-500">
            Use CORS Extension because I am using Swiggy live API
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
