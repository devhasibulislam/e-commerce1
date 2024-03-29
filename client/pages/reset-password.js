import React, { useState } from "react";
import Link from "next/link";
import Title from "../components/Title";
import AccountBanner from "../components/account/AccountBanner";
import AccountButton from "../components/account/AccountButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmallLoading from "../components/loading/SmallLoading";
import FormLogo from "../components/account/FormLogo";

const Forgot = () => {
  const [loading, setLoading] = useState(false);

  function handleResetPassword(event) {
    event.preventDefault();

    const userInformation = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const resetPassword = async () => {
      setLoading(true);
      const request = await fetch(`http://localhost:8080/user/reset-password`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInformation),
      });
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success(response.description);
        setLoading(false);
        event.target.reset();
      } else {
        toast.error(response.description);
        setLoading(false);
      }
    };
    resetPassword();
  }

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <Title title={"Reset Password"} />
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="w-fit mx-auto">
            <FormLogo />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Forgot your password
            </h1>
            <div className="w-full flex-1">
              <div className="mx-auto max-w-xs mt-8">
                {loading ? (
                  <SmallLoading />
                ) : (
                  <form
                    className="flex flex-col gap-y-4"
                    onSubmit={handleResetPassword}
                  >
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
                      placeholder="New Password"
                    />

                    {/* submit button */}
                    <AccountButton value={"Forgot Password"} />
                  </form>
                )}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Remember your account password?
                  <Link
                    href="/sign-in"
                    className="border-b border-gray-500 border-dotted"
                  >
                    {" "}
                    Login here!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <AccountBanner />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Forgot;
