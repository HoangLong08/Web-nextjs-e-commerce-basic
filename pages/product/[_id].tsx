import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsInfoCircle } from "react-icons/bs";
import { ship1Img, ship2Img, ship3Img } from "@/public/assets/images";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shopperSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDetail = () => {
  const route = useRouter();
  // console.log("route: ", route);
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  console.log("product: ", product);

  useEffect(() => {
    setIsLoading(true);
    setProduct(route.query);
    setIsLoading(false);
  }, []);

  const _id = Number(product._id);

  return (
    <div className="w-full bg-white">
      <div className="max-w-contentContainer mx-auto flex items-center py-4">
        <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
          <img
            src={product.image}
            alt=""
            className="w-[80%] transform-origin-top-left cursor-move duration-500"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col gap-2">
          <p className="p-2 text-[#004f9a] text-sm font-semibold border border-gray-500 rounded-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, tempora.
          </p>
          <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-md">
                  Mua
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-md">
                  Quay lại
                </button>
              </div>
              <IoMdHeartEmpty className="text-gray-600 text-2xl" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm underline underline-offset-4">
                {product.brand}
              </p>
              <p className="text-xl font-semibold text-black">
                {product.title}
              </p>
              <p className="text-base text-zinc-500">{product.description}</p>
              <div className="flex gap-2 items-center text-xs mt-2">
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p>12</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="font-semibold text-2xl text-[#2a8703]">
                  {product.price} đ
                </p>
                <p className="text-sm text-zinc-500 line-through flex items-center gap-1">
                  {product.oldPrice} đ
                  <span>
                    <BsInfoCircle />
                  </span>
                </p>
              </div>
              <div className="border-b-[1px] border-b-zinc-300 pb-4">
                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        _id: _id,
                        title: product.title,
                        description: product.description,
                        image: product.image,
                        price: product.price,
                        oldPrice: product.oldPrice,
                        quantity: 1,
                        brand: product.brand,
                        category: product.category,
                      })
                    ) &&
                      toast.success(
                        `${product.title.substring(0, 20)} đã thêm vào giỏ hàng`
                      );
                  }}
                  className="w-209 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300 px-8"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div>
                <p className="text-base font-semibold">
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="w-full grid grid-cols-3 gap-4 text-xs">
                  <div
                    className="w-full border border-zinc-400 flex
                  flex-col items-center justify-center p-2 rounded-md"
                  >
                    <Image className="w-10" src={ship1Img} alt="" />
                    <p>Shipping</p>
                    <p>Nhanh</p>
                    <p>Miễn phí</p>
                  </div>
                  <div
                    className="w-full border border-zinc-400 flex
                  flex-col items-center justify-center p-2 rounded-md"
                  >
                    <Image className="w-10" src={ship2Img} alt="" />
                    <p>Shipping</p>
                    <p>Nhanh</p>
                    <p>Miễn phí</p>
                  </div>
                  <div
                    className="w-full border border-zinc-400 flex
                  flex-col items-center justify-center p-2 rounded-md"
                  >
                    <Image className="w-10" src={ship3Img} alt="" />
                    <p>Shipping</p>
                    <p>Nhanh</p>
                    <p>Miễn phí</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default ProductDetail;
