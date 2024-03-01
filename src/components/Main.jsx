import React, { useContext, useEffect, useState } from "react";
import './main.css';
// import './';
import { SWIGGY_DATA_URL } from "../utils/constant.js";
import ResCard, { withRatingsLabel } from "./ResCard.jsx";
import SearchBar from "./SearchBar.jsx";
import ResContext from "../context/ResContext.js";

const Main = () => {

  const resContext = useContext(ResContext);

  const { resData, setResData ,filteredListData,setFilteredListData} = resContext;

  const [searchVal, setSearchVal] = useState("");
  const [isNull, setIsNull] = useState(true);
  const ResturantCardSuper = withRatingsLabel(ResCard);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_DATA_URL);
    const json = await data.json();
    const gridListCard = json?.data?.cards.filter(
      (c) => c.card.card.id === "restaurant_grid_listing"
    );

    // setListData(
    //   gridListCard[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setResData(
      gridListCard[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListData(
      gridListCard[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setIsNull(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const searchHandler = () => {
  //   setFilteredListData(
  //     resData.filter((item) =>
  //       item.info.name.toLowerCase().includes(searchVal.toLowerCase())
  //     )
  //   );
  // };
  return (
    <div className="container">
      {isNull ? (
        <div className="loader">
          <h1>LOADING....</h1>
        </div>
      ) : (
        <>

          {filteredListData.map((resData) =>
            resData.info.avgRatingString > 4 ? (
              <ResturantCardSuper item={resData} key={resData.info.id} />
            ) : (
              <ResCard  key={resData.info.id} item={resData} />
            )
          )}
        </>
      )}
    </div>
  );
};

export default Main;
