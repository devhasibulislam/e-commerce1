import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="text-black bg-white flex items-center justify-center">
        <div className="border rounded-3xl overflow-hidden flex shadow">
          <input
            type="text"
            className="px-4 py-2 rounded-l-3xl lg:w-96 w-64"
            placeholder="iPhone 14 Pro Max case..."
            title="Enter any product or category name..."
          />
          <button
            className="flex items-center justify-center px-4 border-l"
            title="Click to search"
          >
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
