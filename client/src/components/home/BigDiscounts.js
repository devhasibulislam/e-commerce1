import React from "react";
import useProduct from "../../hooks/useProduct";
import Carousel from "./Carousel";
import CategoryHeader from "./CategoryHeader";

const BigDiscounts = () => {
  const products = useProduct();

  return (
    <section className="bg-neutral py-12">
      <div className="container mx-auto">
        {/* category header */}
        <CategoryHeader
          categoryIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-accent"
            >
              <path
                fillRule="evenodd"
                d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
                clipRule="evenodd"
              />
            </svg>
          }
          categoryName={"Big Discounts"}
          categorySlug={"big-discounts"}
        />

        {/* gap between two section */}
        <div className="my-8"></div>

        {/* display products */}
        <Carousel visibility={5} cards={products} view={"bigDiscount"} />
      </div>
    </section>
  );
};

export default BigDiscounts;
