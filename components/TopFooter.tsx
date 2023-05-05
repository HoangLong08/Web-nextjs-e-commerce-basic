import React from "react";

const TopFooter = () => {
  return (
    <div className="w-full bg-lightBlue">
      <div className="py-10 flex flex-col gap-4 justify-center items-center">
        <p className="font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
          soluta!
        </p>
        <button className="w-36 h-9 border-[1px] border-black bg-white rounded-full hover:border-[2px] transition-all duration-200">
          Phan hoi.
        </button>
      </div>
    </div>
  );
};

export default TopFooter;
