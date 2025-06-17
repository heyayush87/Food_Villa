import { useState, useEffect } from "react";
import TempShimmer from "./TempShimmer";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getdata() {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/foodvilla-restaurants"
      );
      const Data = await response.json();
      const restaurantsData =
        Data?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;
      setRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const isonline = useOnline();
  if (!isonline) {
    return <h1>Offline - Your internet is not working</h1>;
  }
 
  if (loading) {
   
    return <TempShimmer variant="card" />;
  }

  return (
    <>
      <div className="p-3 bg-white my-1 flex flex-col sm:flex-row items-center gap-2">
        <input
          type="text"
          data-testid="searchinput"
          placeholder="Search"
          className="h-[35px] w-40 sm:w-52 md:w-72 lg:w-[300px] text-center text-lg border-2 border-[#818080]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 bg-orange-600 hover:bg-orange-300 text-white rounded-md"
          onClick={() => {
            const data = filterdata(search, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] mb-4"
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