import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [resMenu, setResMenu] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchResDetails = async () => {
    try {
      const data = await fetch(
        `https://food-villa-sj5t.onrender.com/api/foodvilla-menu?id=${id}`
      );

      if (!data.ok) {
        throw new Error(`Error fetching menu: ${data.status}`);
      }

      const json = await data.json();
      // console.log("API Response from menu:", json);

      // Dynamically find the menu section
      const menuCards = json?.data?.cards
        ?.find((c) => c?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setResMenu(menuCards || []);
      setLoading(false); // Set loading to false after fetching
    } catch (err) {
      console.error("Error fetching menu:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchResDetails();
  }, [id]); // Depend on `id` to fetch whenever restaurant changes

  return { resMenu, loading };
};

export default useRestaurantMenu;
