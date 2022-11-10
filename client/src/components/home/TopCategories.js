import React from "react";
import useCategory from "../../hooks/useCategory";
import Carousel from "./Carousel";
import CategoryHeader from "./CategoryHeader";

const TopCategories = () => {
  const categories = useCategory();

  return (
    <section className="py-12">
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
                d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                clipRule="evenodd"
              />
            </svg>
          }
          categoryName={"Top Categories"}
          categorySlug={"top-categories"}
        />

        {/* gap between two section */}
        <div className="my-8"></div>

        {/* display products */}
        <Carousel visibility={3} cards={categories} view={"categories"} />
      </div>
    </section>
  );
};

export default TopCategories;
