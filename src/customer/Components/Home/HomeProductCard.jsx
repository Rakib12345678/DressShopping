import { useEffect, useState } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product,section }) => {
  const navigate = useNavigate();
  const [endpoint,setEndpoint] = useState("");
  useEffect(()=>{
    switch(section){
      case 0:{
        setEndpoint("men/clothing/mens_kurta");
        break;
      }
      case 1:{
      }
      case 2:{
        setEndpoint("women/clothing/saree");
        break;
      }
      case 3:{
        setEndpoint("women/clothing/women_dress")
        break;
      }
      case 4:
      case 5:{
        setEndpoint("women/clothing/kurtas")
        break;
      }
    }
  },[section])

  return (
    <div
      onClick={() => navigate(endpoint)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
