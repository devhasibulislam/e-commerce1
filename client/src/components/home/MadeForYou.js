import React from "react";
import useProduct from "../../hooks/useProduct";
import ProductCard from "../ProductCard";
import CategoryHeader from "./CategoryHeader";

const MadeForYou = ({ setShowModal, setProduct }) => {
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
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          }
          categoryName={"Made For You"}
          categorySlug={"made-for-you"}
        />

        {/* gap between two section */}
        <div className="my-8"></div>

        {/* display products */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-y-4">
          {products?.slice(0, 15)?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setShowModal={setShowModal}
              setProduct={setProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadeForYou;
