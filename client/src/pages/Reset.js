import React from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-secondary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <Link
              to={"/home"}
              className="tooltip"
              data-tip="Your can explore now!"
            >
              E-Commerce
            </Link>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of E-Commerce, you can now focus only on
            functionaries for your digital products, purchasing and cash-flow in
            your own.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Remember your account?</span>
            <Link
              to={"/login"}
              className="underline tooltip"
              data-tip="Login as existing"
            >
              Login now!
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <Link to={"/terms-and-conditions"} className="underline">
              Terms and Conditions
            </Link>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Reset Password
          </h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                for="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  New Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white bg-primary rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
