import React from "react";

const ArrivalsCard = ({ product, reduction }) => {
  const discount = (Math.random() * (55 - 12) + 12).toFixed(0);

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
      <p className="text-slate-500 font-medium mb-2 whitespace-nowrap overflow-hidden text-ellipsis" title={product.title}>
        {product.title}
      </p>
      <p className="text-primary text-base font-semibold flex gap-x-2">
        ${(product.price - (product.price * discount) / 100).toFixed(2)}
        {reduction === true && (
          <del className="text-slate-500">{product.price}</del>
        )}
      </p>
    </div>
  );
};

export default ArrivalsCard;
