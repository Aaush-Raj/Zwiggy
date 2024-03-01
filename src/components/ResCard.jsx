import React from "react";
import { Link } from "react-router-dom";
import { SWIGGY_RES_IMG_URL } from "../utils/constant.js";

const ResCard = (item) => {
  return (
    <div data-testid='resCards' className="">
      <Link to={"/resturant/" + item.item.info.id} key={item.item.info.id}>
        <div className="w-64 h-72 m-4 rounded overflow-hidden shadow-lg flex flex-col cursor-pointer transition-transform transform hover:scale-105">
          <div className="h-40 overflow-hidden">
            <img
              src={`${SWIGGY_RES_IMG_URL}${item.item.info.cloudinaryImageId}`}
              className="object-cover h-full w-full"
              alt=""
            />
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              {item.item.info.name}
            </h3>
            <p className="text-sm mb-2">
              {item.item.info.cuisines.map((cuisine) => cuisine).join(", ")}
            </p>
            <p className="text-sm">
              {item.item.info.areaName} {item.item.info.locality}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const withRatingsLabel = (ResCard) => {
  return (props) => {
    return (
      <div className="superResCard">
        <div className="relative">
        <label className="font-extralight absolute bold bg-black text-yellow-400 z-50 right-4 p-1 pl-2  transition-transform transform hover:scale-105">
          Super Resturant
        </label>
        <ResCard {...props} />
        </div>
      </div>
    );
  };
};

export default ResCard;
