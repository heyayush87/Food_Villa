import { useState, useEffect } from "react";
import TempShimmer from "./TempShimmer";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { RestaurantsList } from "../Constant";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log(RestaurantsList);

  async function getdata() {
    try {
      // HARDCORE RESTAURANT LIST DATA FROM CONSTANT FILE
      //RESTAURANTMENU DATA IS ALSO HARDCORE BUT WE CANT USE IT BCZ WE NEED DYNAMIC ID OF EACH RESTAURANT
      // LAST DATE I CHANGED MENU API IS 2 DECEMBER AND IN NEW API MENU IS AT CARDS[5]INSTEAD OF 4
      const restaurantsData =
        RestaurantsList?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;

      // console.log(restaurantsData);

      setRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const isonline = useOnline();
  if (!isonline) {
    return <h1>Offline - Your internet is not working</h1>;
  }

  return restaurants?.length === 0 ? (
    <TempShimmer />
  ) : (
    <>
      <div className="p-3 bg-white my-1">
        <input
          type="text"
          placeholder="Search"
          className="h-[35px] w-20 lg:w-[300px] md:w-52 sm:w-40 text-center text-lg border-2 border-[#818080] "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 m-1 bg-orange-600 hover:bg-orange-300 text-white rounded-md"
          onClick={() => {
            const data = filterdata(search, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Restaurant {...restaurant.info} />
            </Link>
          ))
        ) : (
          <h2>No restaurants found</h2>
        )}
      </div>
    </>
  );
};

export default Body;
