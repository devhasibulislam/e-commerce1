import React from "react";

const ArrivalsCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white p-4 rounded border hover:border-primary"
      id="arrival-card"
    >
      <img
        src={product.image}
        alt={product.title}
        className="rounded h-[282px] w-[282px] object-cover mx-auto mb-4"
      />
      <p className="text-slate-500 font-medium mb-2" title={product.title}>
        {product.title.length > 20
          ? product.title.slice(0, 20) + " ..."
          : product.title}
      </p>
      <p className="text-primary text-base font-semibold">${product.price}</p>
    </div>
  );
};

export default ArrivalsCard;
