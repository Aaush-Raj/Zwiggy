import React from "react";
import SearchBar from "./SearchBar";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

  const cartItems = useSelector((store)=>store.cart.items)
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        <Link to={'/'} className="text-white font-bold text-xl">ZWIGGY</Link>

        <SearchBar />

        {/* Cart Icon */}
        <Link to={'/cart'} className="flex items-center">
          <IoFastFoodOutline className="text-white text-4xl" />

          <span className="text-white rounded-md p-1 font-bold border-2 m-1">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
