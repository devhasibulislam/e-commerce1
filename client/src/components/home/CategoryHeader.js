import React from "react";

const CategoryHeader = ({ categoryIcon, categoryName, categorySlug }) => {
  return (
    <section className="flex justify-between items-center">
      {/* category name */}
      <div className="flex gap-x-2 items-center text-3xl font-medium">
        {categoryIcon}
        <span>{categoryName}</span>
      </div>

      {/* route to all */}
      <div className="text-slate-500 flex gap-x-2 items-center hover:text-primary cursor-pointer">
        <span>View all</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
};

export default CategoryHeader;