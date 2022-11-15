import React from "react";
import Cart from "./Cart";
import Profile from "./Profile";
import Searchbar from "./Searchbar";

const Submenu = () => {
  return (
    <>
      {/* menu items */}
      <div
        className={`flex flex-col gap-y-4 bg-white border border-[#e56c36] shadow-lg p-4 rounded-lg absolute top-full right-0 z-50`}
      >
        {/* header search bar */}
        <Searchbar />

        {/* header navigation */}
        <div className="flex justify-center items-center gap-x-4">
          {/* shopping cart */}
          <Cart />

          {/* vertical line */}
          <span
            style={{
              borderLeft: "2px solid #f6f9fc",
              height: "30px",
            }}
          />

          {/* user profile */}
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Submenu;
