import React from "react";

interface BannerProps {
  title: string;
  des: string;
  btnText: string;
}

const BannerText = ({ title, des, btnText }: BannerProps) => {
  return (
    <div className="absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-sm leading-5">{des}</p>
      <button className="bg-white text-sm text-black font-semibold rounded-full w-24 h-8 border-[1px] border-black">
        {btnText}
      </button>
    </div>
  );
};

export default BannerText;
