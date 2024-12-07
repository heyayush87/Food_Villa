import { useState, useEffect } from "react";
import { restmenu } from "../Constant";

const useRestaurant = (id) => {
  const [ResDetails, setResDetails] = useState([]);

  const fetchResDetails = async () => {
    try {
      const data = await fetch(restmenu);
      const json = await data.json();

      console.log("API Response from restaurant:", json);
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
