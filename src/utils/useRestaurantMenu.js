import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [resMenu, setResMenu] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchResDetails = async () => {
    try {
      setLoading(true);

      const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.148636167537521&lng=77.61002194136381&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

      const proxyUrl = `https://young-term-4e4a.heyayush0709.workers.dev/?url=${encodeURIComponent(
        apiUrl
      )}`;

      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(`Error fetching menu: ${response.status}`);
      }

      const json = await response.json();

      const menuCards = json?.data?.cards
        ?.find((c) => c?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setResMenu(menuCards || []);
    } catch (err) {
      console.error("Error fetching menu:", err);
    } finally {
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
