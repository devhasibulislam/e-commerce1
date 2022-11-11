import React, { useState } from "react";
import useCategory from "../../hooks/useCategory";
import useCategoryProduct from "../../hooks/useCategoryProduct";
import ProductCard from "../ProductCard";
import CategoryHeader from "./CategoryHeader";

const TabCategory = () => {
  const categories = useCategory();
  const [category, setCategory] = useState("");
  const products = useCategoryProduct(category);

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
              className="w-6 h-6 text-primary"
            >
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              <path
                fillRule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                clipRule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
            </svg>
          }
          categoryName={"Tab Categories"}
          categorySlug={"tab-categories"}
        />

        {/* gap between two section */}
        <div className="my-8"></div>

        {/* tab categories */}
        <div className="flex lg:gap-x-12 md:gap-x-8">
          <div className="lg:block md:block hidden">
            <div className="flex flex-col gap-y-3 bg-neutral h-fit py-4 px-2 rounded">
              {categories.map((cate, indx) => (
                <p
                  className="flex gap-x-2 bg-white p-2 rounded whitespace-nowrap cursor-pointer"
                  onClick={() => setCategory(cate)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${
                      indx % 2 === 0 ? "text-accent" : "text-primary"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  {cate}
                </p>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4">
            {products?.slice(0, 12)?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabCategory;
