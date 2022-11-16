import Image from "next/image";
import React, { useState } from "react";
import AccountLayout from "../../components/account/AccountLayout";
import Badge from "../../components/Badge";
import Loading from "../../components/loading/Loading";
import Title from "../../components/Title";
import Header from "../../shared/Header";
import useMyself from "../../utils/useMyself";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TinyLoading from "../../components/loading/TinyLoading";

const DeleteAccount = () => {
  const [myselfState, isLoading, error] = useMyself();
  const [deleteState, setDeleteState] = useState(false);
  const [removeStatement, setRemoveStatement] = useState("");
  const [loading, setLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  function handleRemoveAccount(id) {
    const removeUser = async () => {
      setLoading(true);
      const request = await fetch(
        `http://localhost:8080/user/remove-user?id=${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success(response.description);
        setDeleteState(false);
        setLoading(false);
      } else {
        toast.error(response.description);
        setLoading(false);
      }
    };
    removeUser();
  }

  return (
    <>
      <Title title={"Delete Profile"} />
      <Header />
      <section className="container mx-auto my-4">
        <AccountLayout>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto lg:px-0 px-4">
              <div className="flex flex-col gap-y-2">
                <div class="lg:max-w-lg w-full">
                  <Image
                    src={myselfState?.avatar?.path}
                    alt={myselfState?.avatar?.name}
                    width={720}
                    height={600}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                  <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-2">
                    {myselfState.name}
                  </h1>
                  <p class="mb-8 leading-relaxed">
                    {myselfState.email} <br /> Type <Badge>Remove Me</Badge>
                  </p>
                  <div class="flex justify-start">
                    {deleteState ? (
                      <div>
                        <input
                          type="text"
                          id="remove"
                          name="remove"
                          placeholder="Type 'Remove Me'"
                          class={`w-full bg-white rounded border border-gray-300
                        focus:ring-2
                        text-base outline-none text-gray-700 py-1 px-3 leading-8
                        transition-colors duration-200 ease-in-out mb-4 ${
                          removeStatement === "Remove Me"
                            ? "focus:border-green-500 focus:ring-green-200"
                            : "focus:border-red-500 focus:ring-red-200"
                        }`}
                          onChange={(e) => setRemoveStatement(e.target.value)}
                        />
                        {loading ? (
                          <TinyLoading />
                        ) : (
                          <button
                            class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
                            disabled={removeStatement !== "Remove Me"}
                            onClick={() => {
                              setDeleteState(true);
                              handleRemoveAccount(myselfState._id);
                            }}
                          >
                            Delete Account
                          </button>
                        )}
                      </div>
                    ) : (
                      <button
                        class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
                        onClick={() => setDeleteState(true)}
                      >
                        Delete Account
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AccountLayout>
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
    </>
  );
};

export default DeleteAccount;
