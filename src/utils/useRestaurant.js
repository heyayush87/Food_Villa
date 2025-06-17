import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [ResDetails, setResDetails] = useState(null);
  const [error, setError] = useState(null);

  const fetchResDetails = async () => {
    try {
      const data = await fetch(
        `https://food-villa-sj5t.onrender.com/api/foodvilla-menu?id=${id}`
      );
      const json = await data.json();

      if (!json?.data?.cards) {
        setError("No restaurant data found.");
        setResDetails(null);
        return;
      }

      setResDetails(json.data.cards[2]?.card?.card?.info || null);
    } catch (error) {
      setError("Error fetching restaurant details.");
      setResDetails(null);
    }
  };

  useEffect(() => {
    fetchResDetails();
  }, [id]);

  return { ResDetails, error };
};

export default useRestaurant;
