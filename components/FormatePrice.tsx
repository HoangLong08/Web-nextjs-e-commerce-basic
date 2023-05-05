import React from "react";

type Amount = {
  amount: Number;
};

const FormatePrice = ({ amount }: Amount) => {
  const formatePrice = new Number(amount).toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 2,
  });
  return <span>{formatePrice}</span>;
};

export default FormatePrice;
