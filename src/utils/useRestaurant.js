import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [ResDetails, setResDetails] = useState(null);
  const [error, setError] = useState(null);

  const fetchResDetails = async () => {
    try {
     
      const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.148636167537521&lng=77.61002194136381&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

      const proxyUrl = `https://young-term-4e4a.heyayush0709.workers.dev/?url=${encodeURIComponent(
        apiUrl
      )}`;

      const response = await fetch(proxyUrl);
      const json = await response.json();


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
