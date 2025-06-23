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

  const getdata = async () => {
    try {
      setLoading(true);

      const swiggyUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.148636167537521&lng=77.61002194136381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const proxyUrl = `https://young-term-4e4a.heyayush0709.workers.dev/?url=${encodeURIComponent(
        swiggyUrl
      )}`;

      const response = await fetch(proxyUrl);

      // Check if fetch was successful
      if (!response.ok || response.status === 0) {
        const text = await response.text();
        console.error("Proxy error response:", text);
        throw new Error(`HTTP error! status: ${response.status || "unknown"}`);
      }

      // Check content type
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Invalid JSON response:", text);
        throw new Error("Expected JSON but got non-JSON response");
      }

      const data = await response.json();

      // Find restaurants from cards[]
      const cards = data?.data?.cards || [];
      let restaurants = [];

      for (const card of cards) {
        const possibleRestaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (possibleRestaurants) {
          restaurants = possibleRestaurants;
          break;
        }
      }

      if (restaurants.length === 0) {
        console.warn("No restaurants found in data structure");
      }

      setRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant list:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    getdata();
  }, []);

  const isonline = useOnline();
  if (!isonline) {
    return (
      <h1 className="text-center mt-10 text-red-600 font-semibold text-xl">
        Offline - Your internet is not working
      </h1>
    );
  }

  if (loading) {
    return <TempShimmer variant="card" />;
  }

  return (
    <>
      <div className="p-3 bg-white my-1 flex flex-col sm:flex-row items-center gap-2 justify-center">
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
              className="w-full max-w-xs sm:w-[45%] md:w-[30%] lg:w-[22%] mb-4"
            >
              <Restaurant {...restaurant.info} />
            </Link>
          ))
        ) : (
          <h2 className="text-center text-gray-600 font-medium text-lg">
            No restaurants found
          </h2>
        )}
      </div>
    </>
  );
};

export default Body;
