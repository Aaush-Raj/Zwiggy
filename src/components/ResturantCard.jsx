import { useState } from "react";
import "./resCard.css";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import ResCategory from "./ResCategory.jsx";

const ResturantCard = () => {
  let { resId } = useParams();

  const { resData, menuData } = useFetch(resId);
  const [showLists, setShowLists] = useState(0);

  // Destructuring within the return statement
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwoMessage,
    areaName,
    totalRatingsString,
    feeDetails,
    sla,
  } = resData;

  return (
    <div className="Rescontainer m-5">
      <div className="resturantCard">
        <div className="resDetails">
          <h2 className="font-bold">{name}</h2>
          <p>
            {cuisines && cuisines.length > 0
              ? cuisines.join(", ")
              : "No cuisines available"}
          </p>
          <p>
            {areaName}, {sla && sla.lastMileTravelString}
          </p>
          <h5>{feeDetails && feeDetails.message}</h5>
        </div>
        <div className="border-gray-400 shadow-lg h-auto p-5 rounded-md">
          <h2 className="font-bold">⭐{avgRatingString}</h2>
          <hr />
          <p>{totalRatingsString}</p>
        </div>
      </div>

      {menuData &&
        menuData.map((category, index) => (
          
          <ResCategory
            key={category?.card?.card?.title}
            data={category.card.card}
            showIndex={index == showLists ? true : false}
            setShowLists={() =>
              setShowLists(showLists === index ? null : index)
            }
          />
        ))}
    </div>
  );
};

export default ResturantCard;
