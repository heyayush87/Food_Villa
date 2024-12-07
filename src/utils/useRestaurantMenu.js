import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [resMenu, setResMenu] = useState([]);

  const fetchResDetails = async () => {
    //RESTAURANTMENU DATA IS ALSO HARDCORE BUT WE CANT USE IT BCZ WE NEED DYNAMIC ID OF EACH RESTAURANT
    // LAST DATE I CHANGED MENU API IS 2 DECEMBER AND IN NEW API MENU IS AT CARDS[5]INSTEAD OF 4
    try {
      const data = await fetch(
        " https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9532395&lng=77.70156639999999&restaurantId=237665&submitAction=ENTER"
      );
      if (!data.ok) {
        throw new Error(`from menu,${data.status}`);
      }
      const json = await data.json();
      // console.log("from restaurant MEnu APi", json);

      const category =
        json?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setResMenu(category || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResDetails();
  }, []);

  return resMenu;
};

export default useRestaurantMenu;
