import {
  bannerImg,
  sliderImgFive,
  sliderImgFour,
  sliderImgOne,
  sliderImgThree,
  sliderImgTwo,
} from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import BannerText from "./BannerText";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ButtonPrimary from "./ButtonPrimary";

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:bg-transparent hover:text-white cursor-pointer duration-200 z-10"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:bg-transparent hover:text-white cursor-pointer duration-200 z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    // border-bottom-width: 1px;
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgOne}
              alt=""
            />
            <BannerText
              title="testing 1"
              des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
        corrupti."
              btnText="Mua ngay"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgTwo}
              alt=""
            />
            <BannerText
              title="testing 1"
              des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
        corrupti."
              btnText="Mua ngay"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgThree}
              alt=""
            />
            <BannerText
              title="testing 1"
              des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
        corrupti."
              btnText="Mua ngay"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFour}
              alt=""
            />
            <BannerText
              title="testing 1"
              des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
        corrupti."
              btnText="Mua ngay"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFive}
              alt=""
            />
            <BannerText
              title="testing 1"
              des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
        corrupti."
              btnText="Mua ngay"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">Testing</h2>
          <p className="text-base text-zinc-600 underline underline-offset-2">
            Xem tất cả
          </p>
        </div>
        <Image className="h-60 object-cover" src={bannerImg} alt="" />
        <ButtonPrimary btnText="Options" />
        <p className="text-lg text-black font-semibold"> Từ 10.000 đ</p>
        <p className="text-base text-gray-500 -mt-1">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default Banner;
