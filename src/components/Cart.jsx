import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="bg-gray-100 shadow-lg w-6/12 mx-auto m-4 p-4 rounded-md cursor-pointer">
      <div className=" flex justify-between"></div>
      <ItemList items={cartItems} isCartPage={true}/>
    </div>
  );
};

export default Cart;
