import { useEffect, useState } from "react";

import { SWIGGY_RES_DATA_URL } from "../utils/constant.js";

const useFetch = (resId) => {
  const [resData, setResData] = useState([]);
  const [menuData, setMenuData] = useState([]);

  const fetchData = async () => {
    try {
      let url = `${SWIGGY_RES_DATA_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`;
      const data = await fetch(url);
      const json = await data.json();

      setResData(json.data.cards[2].card.card.info);

      const category =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setMenuData(category);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { resData, menuData };
};

export default useFetch;
