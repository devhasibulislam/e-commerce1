import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "../components/Title";
import AccountBanner from "../components/AccountBanner";

const Signin = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <Title title={"Sign in"} />
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="w-fit mx-auto">
            <Link href="/">
              <Image
                src={"/logo.png"}
                height={39}
                width={128}
                alt="E-Commerce Logo"
                title="E-Commerce Logo"
                className="w-32 mx-auto"
              />
            </Link>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign in as existing user
            </h1>
            <div className="w-full flex-1">
              <div className="mx-auto max-w-xs mt-8">
                <form className="flex flex-col gap-y-4">
                  {/* email field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />

                  {/* password field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />

                  {/* submit button */}
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don't have an account?
                  <Link
                    href="/sign-up"
                    className="border-b border-gray-500 border-dotted"
                  >
                    {" "}
                    Create one{" "}
                  </Link>
                  or if you forget password then
                  <Link
                    href="/reset-password"
                    className="border-b border-gray-500 border-dotted"
                  >
                    {" "}
                    Reset password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <AccountBanner />
      </div>
    </section>
  );
};

export default Signin;
