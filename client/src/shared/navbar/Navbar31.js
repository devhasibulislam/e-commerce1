import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Image from "../../hooks/useImage";

const Navbar31 = () => {
  return (
    <div className="navbar bg-base-100 lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-4">
      <div className="flex-1 gap-x-4">
        {/* logo insertion here */}
        <Link to={"/"}>
          <Image src={"logo.png"} height="50" width="150" />
        </Link>

        {/* category display here */}
        {/* <label tabIndex={0} className="btn btn-ghost whitespace-nowrap shadow rounded">
          <span className="indicator tooltip tooltip-left tooltip-primary capitalize flex items-center gap-x-2" data-tip="Select Category">
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
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Categories
          </span>
        </label> */}

        {/* category with drop-down */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost whitespace-nowrap shadow rounded"
          >
            <span
              className="indicator tooltip tooltip-left tooltip-primary capitalize flex items-center gap-x-2"
              data-tip="Select Category"
            >
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
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Categories
            </span>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded lg:w-96 w-64 h-96 overflow-y-scroll"
          >
            {/* drop-down items here */}
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 w-full">
              <div className="w-fit p-2 shadow">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxQ2_Ll8bvWL_qF8Ij4VhCaViIntlXdZj5pTHXE0&s"
                  }
                  height="100"
                  width="100"
                />
                <p className="text-center">Category</p>
              </div>
              <div className="w-fit p-2 shadow">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxQ2_Ll8bvWL_qF8Ij4VhCaViIntlXdZj5pTHXE0&s"
                  }
                  height="100"
                  width="100"
                />
                <p className="text-center">Category</p>
              </div>
              <div className="w-fit p-2 shadow">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxQ2_Ll8bvWL_qF8Ij4VhCaViIntlXdZj5pTHXE0&s"
                  }
                  height="100"
                  width="100"
                />
                <p className="text-center">Category</p>
              </div>
              <div className="w-fit p-2 shadow">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxQ2_Ll8bvWL_qF8Ij4VhCaViIntlXdZj5pTHXE0&s"
                  }
                  height="100"
                  width="100"
                />
                <p className="text-center">Category</p>
              </div>
              <div className="w-fit p-2 shadow">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxQ2_Ll8bvWL_qF8Ij4VhCaViIntlXdZj5pTHXE0&s"
                  }
                  height="100"
                  width="100"
                />
                <p className="text-center">Category</p>
              </div>
              <div className="w-fit p-2 shadow">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxQ2_Ll8bvWL_qF8Ij4VhCaViIntlXdZj5pTHXE0&s"
                  }
                  height="100"
                  width="100"
                />
                <p className="text-center">Category</p>
              </div>
              <div className="w-fit p-2 shadow">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxQ2_Ll8bvWL_qF8Ij4VhCaViIntlXdZj5pTHXE0&s"
                  }
                  height="100"
                  width="100"
                />
                <p className="text-center">Category</p>
              </div>
            </div>
          </div>
        </div>
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
                8
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow rounded"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
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
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 rounded"
          >
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar31;
