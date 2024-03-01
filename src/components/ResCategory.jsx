import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data,showIndex,setShowLists }) => {


    const toggleList = ()=>{
        setShowLists();
    }
  return (
    <div className="bg-gray-100 shadow-lg w-6/12 m-4 p-4 rounded-md cursor-pointer" >
      <div className=" flex justify-between" onClick={toggleList}>
        <span>
          {data.title}
          <span className="font-bold"> ( {data.itemCards.length} )</span>
        </span>

        <span>⬇️</span>

      </div>
      {showIndex && <ItemList items={data.itemCards} />}
      

    </div>
  );
};

export default ResCategory;
