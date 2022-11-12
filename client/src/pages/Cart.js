import React, { useEffect, useState } from "react";
import { getFromCart, removeFromCart } from "../hooks/useCart";
import Image from "../hooks/useImage";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    const prods = getFromCart();
    setProducts(prods);
    let sum = 0;
    const prices = prods.map((prod) => (sum += prod.price));
    setTotalPrice(prices);
  }, [products]);

  return (
    <>
      <Navbar />
      <section className="bg-neutral">
        <div className="container mx-auto">
          <div className="py-12">
            <div className="flex lg:flex-row flex-col lg:gap-x-8 gap-y-8">
              <div className="flex flex-col gap-y-4 lg:w-2/3 w-full">
                {products?.map((product, index) => (
                  <div
                    key={index}
                    className="flex justify-between bg-white p-4 rounded shadow"
                  >
                    {/* brief */}
                    <div className="flex gap-x-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        height="140px"
                        width="140px"
                      />
                      <div className="flex flex-col justify-between">
                        <h1
                          className="lg:text-3xl md:text-2xl text-xl overflow-hidden whitespace-nowrap text-ellipsis lg:w-96 md:w-96 w-40"
                          title={product.title}
                        >
                          {product.title}
                        </h1>
                        <p className="text-slate-500 text-sm flex flex-col">
                          <span>Base price: ${product.price}</span>
                          <span>Quantity: 1</span>
                          <span className="text-primary font-medium text-lg">
                            ${product.price}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* action */}
                    <div className="flex flex-col justify-between">
                      <button
                        className="btn btn-sm btn-primary btn-circle ml-auto shadow"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                          />
                        </svg>
                      </button>
                      <div className="flex gap-x-2">
                        <span className="btn btn-sm btn-secondary btn-circle text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <span className="btn btn-sm btn-outline">1</span>
                        <span className="btn btn-sm btn-secondary btn-circle text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white h-fit lg:w-2/5 w-full shadow rounded p-4">
                Total price: $<span className="text-primary font-semibold">{totalPrice[totalPrice.length - 1]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
