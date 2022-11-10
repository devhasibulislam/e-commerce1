import React from "react";
import useCategory from "../../hooks/useCategory";
import CategoryHeader from "./CategoryHeader";
import Carousel from "./Carousel";

const FlashDeals = () => {
  /* revealing all products */
  const products = useCategory();

  return (
    <section className="bg-neutral py-12">
      <div className="container mx-auto">
        {/* category header */}
        <CategoryHeader
          categoryIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-primary"
            >
              <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
            </svg>
          }
          categoryName={"Flash Deals"}
          categorySlug={"flash-deals"}
        />

        {/* gap between two section */}
        <div className="my-8"></div>

        {/* display products */}
        <Carousel visibility={5} products={products} view={"products"} />
      </div>
    </section>
  );
};

export default FlashDeals;
