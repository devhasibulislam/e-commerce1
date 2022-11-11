import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { getFromCart } from "../../hooks/useCart";
import Image from "../../hooks/useImage";

const Navbar31 = () => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState([]);
  const products = getFromCart();

  useEffect(() => {
    setCart(products);
    let sum = 0;
    const prices = cart.map((product) => (sum += product.price));
    setPrice(prices);
  }, [products, cart]);

  const authentication = [
    {
      anchorLogo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
      ),
      anchorTitle: "Sign Up",
      anchorLink: "/register",
    },
    {
      anchorLogo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      anchorTitle: "Sign In",
      anchorLink: "/login",
    },
  ];

  return (
    <div className="navbar bg-base-100 lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-4">
      <div className="flex-1 gap-x-4">
        {/* logo insertion here */}
        <Link to={"/"}>
          <Image
            src={"logo.png"}
            height="47px"
            width="150px"
            alt="header logo"
          />
        </Link>
      </div>
      <div className="flex-none gap-x-4">
        {/* search from all shops */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter product name"
            className="input input-bordered rounded"
          />
        </div>

        {/* add to cart segment */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle shadow">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-primary badge-sm indicator-item">
                {cart?.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow rounded"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{cart?.length} Items</span>
              <span className="text-info">
                Subtotal: ${price.length === 0 ? 0 : price[price.length - 1]}
              </span>
              <div className="card-actions">
                <Button>View Cart</Button>
              </div>
            </div>
          </div>
        </div>

        {/* user profile segment */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://placeimg.com/80/80/people"
                alt="random people"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52 rounded"
          >
            {/* login & register */}
            {authentication.map((auth, indx) => (
              <li key={indx} className="shadow-sm mb-2">
                <Link to={auth.anchorLink}>
                  {auth.anchorLogo}
                  {auth.anchorTitle}
                </Link>
              </li>
            ))}

            {/* logout */}
            <li className="shadow-sm">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar31;
