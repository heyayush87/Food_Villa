import { useParams } from "react-router-dom";
import { useState } from "react";
import TempShimmer from "./TempShimmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuitem from "./RestaurantMenuitem";

const RestaurantMenu = () => {
  const { id } = useParams();
  const ResDetails = useRestaurant(id);
  const { resMenu, loading } = useRestaurantMenu(id); // Destructure menu & loading state
  const [showindex, setshowindex] = useState(null);

  // If menu is still loading, show shimmer effect
  if (loading) {
    return <TempShimmer />;
  }

  return (
    <div className="text-center">
      {/* Restaurant Name */}
      <h1 className="font-bold my-6 text-2xl">
        {ResDetails?.name || "Loading..."}
      </h1>

      {/* Restaurant Menu */}
      <h1 className="font-bold">Menu</h1>

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
        <p>Use CORS Extension Bcz i am usimng swiggy live api</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
