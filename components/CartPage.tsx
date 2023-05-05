import {
  phoneImg,
  ship1Img,
  ship2Img,
  ship3Img,
  warningImg,
} from "@/public/assets/images";
import { StoreProduct } from "@/type";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormatePrice from "./FormatePrice";
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from "@/redux/shopperSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state: any) => state.shopperSlice.productData
  );

  const [warningMsg, setWarningMsg] = useState(false);
  const [totalOldPrice, setTotalOldPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    setWarningMsg(true);
    let oldPrice = 0;
    let savings = 0;
    let amt = 0;

    productData.map((item: StoreProduct) => {
      oldPrice += item.oldPrice * item.quantity;
      savings += item.oldPrice - item.price;
      amt += item.price * item.quantity;
      return;
    });
    setTotalOldPrice(oldPrice);
    setTotalSavings(savings);
    setTotalAmt(amt);
  }, []);

  return (
    <div className="w-full py-10">
      <div className="w-full flex gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-black">
            Giỏ hàng <span>{productData.length} sản phẩm</span>
          </h1>
          <div>
            <div className="text-xl font-bold flex items-center gap-2 mb-2">
              <Image className="w-10" src={phoneImg} alt="" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="mb-4  w-full grid grid-cols-3 gap-4 text-xs">
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image src={ship1Img} alt="" />
                <p>lorem</p>
                <p>Lorem, ipsum.</p>
              </div>
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image src={ship2Img} alt="" />
                <p>lorem</p>
                <p>Lorem, ipsum.</p>
              </div>
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image src={ship3Img} alt="" />
                <p>lorem</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div className="w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
                quia.
                <span className="text-black font-semibold">testing.com</span>
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-md">
                  Mua
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-md">
                  Quay lại
                </button>
              </div>
              <div>
                {productData.map((item: StoreProduct) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4"
                  >
                    <div className="w-3/4 flex items-center gap-2">
                      <Image
                        className="w-32"
                        src={item.image}
                        alt=""
                        height={500}
                        width={500}
                      />
                      <div>
                        <h2 className="text-base text-zinc-500">
                          {item.title}
                        </h2>
                        <p className="text-sm text-zinc-500">
                          {item.description}
                        </p>
                        <p className="text-sm text-zinc-500">{item.price}</p>
                        <p></p>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => {
                              dispatch(
                                deleteItem({
                                  id: item._id,
                                })
                              );
                            }}
                            className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-md"
                          >
                            Xóa
                          </button>
                          <div className="w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                            <button
                              onClick={() => {
                                dispatch(
                                  minusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    price: item.price,
                                    oldPrice: item.oldPrice,
                                    quantity: 1,
                                    brand: item.brand,
                                    category: item.category,
                                  })
                                );
                              }}
                              className=""
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => {
                                dispatch(
                                  plusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    price: item.price,
                                    oldPrice: item.oldPrice,
                                    quantity: 1,
                                    brand: item.brand,
                                    category: item.category,
                                  })
                                );
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 text-right flex flex-col items-end gap-1">
                      <p className="font-semibold text-xl text-[#2a8703]">
                        <FormatePrice amount={item.price * item.quantity} />
                      </p>
                      <p className="text-sm line-through text-zinc-500">
                        <FormatePrice amount={item.oldPrice * item.quantity} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  dispatch(resetCart());
                }}
                className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-300"
              >
                Xóa tất cả
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 mt-4 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-5">
          <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
            <button className="bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-300">
              Thanh toán
            </button>
            <p className="text-sm text-center text-red-500 font-semibold">
              Vui lòng đăng nhập để thanh toán
            </p>
            {warningMsg && (
              <div>
                <Image className="w-8" src={warningImg} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  quasi.
                </p>
              </div>
            )}
            <p className="text-sm text-center">
              Lorem, ipsum dolor.
              <span className="underline underline-offset-2 decoration-[1px]">
                Sign In
              </span>
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="text-sm flex justify-between">
                <p className="font-semibold">
                  Tổng số sản phẩm ( <span>{productData.length} )</span>
                </p>
                <p className="line-through">
                  <FormatePrice amount={totalOldPrice} />
                </p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold">Tổng</p>
                <p>
                  <FormatePrice amount={totalSavings} />
                </p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold">Thành tiền</p>
                <p>
                  <FormatePrice amount={totalAmt} />
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
