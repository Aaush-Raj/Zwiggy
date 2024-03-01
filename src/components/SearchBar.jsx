import React, { useContext, useState } from "react";
import ResContext from "../context/ResContext";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");

  const resContext = useContext(ResContext);
  const { resData, setFilteredListData } = resContext;


  const searchHandler = () => {
    setFilteredListData(
      resData.filter((item) =>
        item.info.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  }

    return (
      <div className="flex items-center">
        <input
          type="text"
          name="search"
          className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
          placeholder="search resturant by name"
          onChange={(event) => setSearchVal(event.target.value)}
        />

        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    );
  };

export default SearchBar;
