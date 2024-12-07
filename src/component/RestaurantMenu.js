import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_URL } from "../Constant";
import TempShimmer from "./TempShimmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuitem from "./RestaurantMenuitem";

const RestaurantMenu = () => {
  const { id } = useParams();

  const ResDetails = useRestaurant(id);
  const resMenu = useRestaurantMenu(id);
  const dummydata = "dummy";

  const [showindex, setshowindex] = useState(null);

  return !ResDetails ? (
    <TempShimmer />
  ) : (
    <>
      <div className="text-center ">
        <div>
          <h1 className="font-bold my-6 text-2xl">{ResDetails.name}</h1>
        </div>

        <div className="text-center">
          <h1 className="font-bold">Menu</h1>
          {resMenu.map((item, index) => (
            <RestaurantMenuitem
              key={index}
              item={item?.card?.card}
              dummy={dummydata}
              showitem={index === showindex} // Determines if the current accordion is open
              setshowindex={
                () => setshowindex(index === showindex ? null : index) // Toggle logic: close if clicked again
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
