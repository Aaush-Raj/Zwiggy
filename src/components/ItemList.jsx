import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constant.js";

import { addToCart } from "../store/CartSlice.js";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ items ,isCartPage}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const cartAddHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 bg-white  border-b border-gray-400 shadow-md rounded-md text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className=" w-9/12">
            <div className=" py-2 ">
              <span className="font-semibold "> {item.card.info.name}</span>
              <span className="text-red-500 font-bold ">
                --₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 ">
            <img
              className="w-full"
              src={`${SWIGGY_IMG_URL}${item.card.info.imageId}`}
              alt=""
            />
          </div>
{!isCartPage &&
          <button
            onClick={() => {
              cartAddHandler(item);
            }}
            className="p-1 text-xs font-semibold bg-black text-white h-10 rounded -ml-10 shadow-md"
          >
            +Add
          </button>

          }
        </div>
      ))}
    </div>
  );
};

export default ItemList;
