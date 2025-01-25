import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, info, to, text,img,placeholder }) => {
  return (
    <>
      <div className=" rounded-lg p-6 min-w-[330px] lg:min-w-[400px] flex flex-col gap-4 items-center shadow-md shadow-[#0d1a29]">
        <div className="border-2 border-[#0d1a29] h-[300px] w-full rounded-md">
          <img src={img} alt={placeholder} className="object-cover object-center w-full rounded-md"/>
        </div>
        <div className="flex flex-col gap-1 items-center text-center">
          <p className="uppercase font-semibold text-[#0d1a29] text-xl">{name}</p>
          <p className="text-gray-600">{info}</p>
          <button className="border-2 px-6 capitalize py-2 rounded-lg bg-[#0d1a29] text-white hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-white hover:border-[#0d1a29] font-semibold hover:text-[#0d1a29]">
            <Link to={to}>{text}</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
