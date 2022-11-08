import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../hooks/useImage";

const Navbar32 = () => {
  const [dropdown, setDropdown] = useState(false);

  const vendorMenu = [
    {
      title: (
        <>
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
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
          Dashboard
        </>
      ),
      anchor: "/dashboard",
    },
    {
      title: (
        <>
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Vendor Profile
        </>
      ),
      anchor: "/vendor-profile",
    },
    {
      title: (
        <>
          {" "}
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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Track Orders
        </>
      ),
      anchor: "/track-orders",
    },
  ];

  const categories = [
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
    {
      title: "Category",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg",
      anchor: "/category",
    },
  ];

  return (
    <section className="py-2 relative">
      <div className="flex justify-between items-center lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-4">
        {/* categories segment */}
        <div>
          <label
            tabIndex={0}
            className="btn btn-ghost whitespace-nowrap shadow rounded"
            onClick={() => setDropdown(!dropdown)}
          >
            <span className="indicator capitalize flex items-center gap-x-2">
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
              Categories{" "}
              {dropdown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </label>
        </div>

        {/* menu credentials */}
        <div className="flex gap-x-4 lg:w-auto md:w-auto w-80 lg:overflow-hidden md:overflow-hidden overflow-x-scroll py-2">
          {vendorMenu.map((menu, index) => (
            <>
              <Link
                key={index}
                to={menu.anchor}
                className="hover:text-primary flex gap-x-2 whitespace-nowrap"
              >
                {menu.title}
              </Link>
              {!(index === vendorMenu.length - 1) && (
                <div className="divider divider-horizontal"></div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* drop-down menu manipulation */}
      {dropdown && (
        <div className="absolute top-full p-4 shadow-lg rounded w-full bg-white h-[30rem] overflow-y-scroll z-50">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-2 rounded shadow-sm hover:shadow border border-transparent hover:border-primary"
              >
                <Link to={category.anchor}>
                  <Image src={category.thumbnail} height="220px" />
                  <p className="text-center mt-2">{category.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar32;
