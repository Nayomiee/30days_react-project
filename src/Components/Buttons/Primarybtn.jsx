import React from "react";

const Primarybtn = ({ button }) => {
  return (
    <>
      <button className="border-2 px-6 capitalize py-2 rounded-lg hover:bg-[#0d1a29] hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out">
        {button}
      </button>
    </>
  );
};

export default Primarybtn;
