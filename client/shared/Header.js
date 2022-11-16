import React, { useState } from "react";
import Loading from "../components/loading/Loading";
import useMyself from "../utils/useMyself";
import Cart from "./Cart";
import Categories from "./Categories";
import Logo from "./Logo";
import Profile from "./Profile";
import Searchbar from "./Searchbar";
import Submenu from "./Submenu";

export const ExistingUser = React.createContext({});

const Header = () => {
  const [myselfState, isLoading, error] = useMyself();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  // vertical line
  const verticalLine = (
    <span style={{ borderLeft: "2px solid #f6f9fc", height: "30px" }} />
  );

  return (
    <ExistingUser.Provider value={myselfState}>
      <header className="shadow py-4">
        <nav className="container mx-auto lg:px-0 px-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-x-4">
              {/* header logo */}
              <Logo />

              {/* vertical line */}
              {verticalLine}

              {/* header category */}
              <Categories />
            </div>

            {/* menu bar */}
            <div
              className="lg:hidden shadow-md hover:shadow-lg p-2 rounded-full relative"
              title="Click to display all options..."
              onMouseEnter={() => setOpenSubMenu(true)}
              onMouseLeave={() => setOpenSubMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#e56c36]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>

              {openSubMenu && <Submenu />}
            </div>

            <div className="lg:flex lg:items-center lg:gap-x-4 hidden">
              {/* header search bar */}
              <Searchbar />

              {/* header navigation */}
              <div className="flex justify-between items-center gap-x-4">
                {/* shopping cart */}
                <Cart />

                {/* vertical line */}
                {verticalLine}

                {/* user profile */}
                <Profile />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </ExistingUser.Provider>
  );
};

export default Header;

/**
 * Tailwind class doesn't take effect
 * https://stackoverflow.com/questions/62170756/tailwind-class-doesnt-take-effect
 */
