import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [ResDetails, setResDetails] = useState([]);

  const fetchResDetails = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9532395&lng=77.70156639999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();

      // console.log("API Response from restaurant:", json);
      setResDetails(json.data.cards[2]?.card?.card?.info || []);

      if (json?.data?.cards) {
      } else {
        console.warn("Unexpected data structure from API", json);
      }
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  useEffect(() => {
    fetchResDetails();
  }, []);
  return ResDetails;
};
export default useRestaurant;
