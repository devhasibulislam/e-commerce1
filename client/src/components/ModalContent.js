import React, { useState } from "react";
import { addToCart, checkInCart } from "../hooks/useCart";

const ModalContent = ({ product }) => {
  const [hideBtn, setHideBtn] = useState(false);

  function Initial({ children }) {
    return (
      <span className="text-slate-500 text-sm font-medium">{children}</span>
    );
  }

  return (
    <section className="p-6">
      <div className="mockup-window border rounded bg-neutral">
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-x-4 md:gap-x-4 gap-y-4 p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-[300px] h-[300px] object-cover mx-auto"
          />
          <div className="flex flex-col gap-y-2">
            <h1
              title={product.title}
              className="whitespace-nowrap overflow-hidden text-ellipsis w-96"
            >
              <Initial>Name</Initial>: {product.title}
            </h1>
            <p className="capitalize">
              <Initial>Category</Initial>: {product.category}
            </p>
            <p className="text-primary text-2xl font-bold">${product.price}</p>
            <p className="flex items-center">
              <Initial>Ratings</Initial>:{" "}
              {[...Array(Math.round(product.rating.rate)).keys()].map(
                (rating) => (
                  <span key={rating} className="text-[#ffd05f]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )
              )}
              <span className="text-sm">({product.rating.count})</span>
            </p>
            {!checkInCart(product.id) && (
              <button
                className={`btn btn-sm btn-primary w-fit px-4 rounded capitalize text-white ${
                  hideBtn && "hidden"
                }`}
                onClick={() => {
                  addToCart(product);
                  setHideBtn(true);
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalContent;
