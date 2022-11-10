import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div
      className="bg-white rounded border hover:border-primary relative p-4"
      id="category-card"
    >
      {/* category name */}
      <div className="absolute top-2 left-2">
        <span className="badge badge-secondary text-xs font-medium text-white">
          {category}
        </span>
      </div>

      {/* order revenue */}
      <div className="absolute top-2 right-2">
        <span className="badge badge-primary text-xs font-medium text-white">
          3k Order in this week
        </span>
      </div>

      {/* after content */}
      <div className="flex flex-col h-full">
        {/* category thumbnail */}
        <figure>
          <img
            src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75"
            alt={category}
            className="rounded w-[462px] h-[162px] mx-auto object-cover"
          />
        </figure>
      </div>
    </div>
  );
};

export default CategoryCard;
