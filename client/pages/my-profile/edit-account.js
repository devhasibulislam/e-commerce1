import Image from "next/image";
import React, { useEffect, useState } from "react";
import AccountButton from "../../components/account/AccountButton";
import AccountLayout from "../../components/account/AccountLayout";
import Loading from "../../components/loading/Loading";
import SmallLoading from "../../components/loading/SmallLoading";
import TinyLoading from "../../components/loading/TinyLoading";
import Title from "../../components/Title";
import Header from "../../shared/Header";
import useMyself from "../../utils/useMyself";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditAccount = () => {
  const [myselfState, isLoading] = useMyself();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [phone, setPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("Shipping Address");
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    setName(myselfState?.name);
    setEmail(myselfState?.email);
    setPhone(myselfState?.phone);
  }, [myselfState]);

  if (isLoading) {
    return <Loading />;
  }

  // upload avatar
  function handleUserAvatar(event) {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const uploadAvatar = async () => {
      setAvatarLoading(true);
      const request = await fetch(
        `http://localhost:8080/user/avatar?filename=${myselfState?.avatar?.name}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success(response.description);
        setAvatarLoading(false);
        setAvatar({
          path: response.data.path,
          name: response.data.filename,
        });
      } else {
        toast.error(response.description);
      }
    };
    uploadAvatar();
  }

  function handleUpdateProfile(event) {
    event.preventDefault();
    const phoneNumber = event.target.phone.value?.replace(/\+880/, "");

    const userInformation = {
      name: event.target.name.value || name,
      email: event.target.email.value || email,
      avatar: avatar || myselfState.avatar,
      phone:
        phoneNumber?.length === 11
          ? "+88" + phoneNumber
          : "+880" + phoneNumber || phone,
      shippingAddress: event.target.shipping.value || shippingAddress,
    };

    const updateUser = async () => {
      setUserLoading(true);
      const request = await fetch(
        `http://localhost:8080/user/update-user?email=${userInformation.email}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(userInformation),
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success(response.description);
        setUserLoading(false);
      } else {
        setUserLoading(false);
        toast.error(response.description);
      }
    };
    updateUser();
  }

  return (
    <>
      <Title title={"Edit Account"} />
      <Header />
      <section className="container mx-auto my-4 lg:px-0 px-4">
        <AccountLayout>
          {userLoading ? (
            <SmallLoading />
          ) : (
            <form
              className="flex flex-col gap-y-4"
              onSubmit={handleUpdateProfile}
            >
              {/* name field */}
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />

              {/* email field */}
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              {/* phone number field */}
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />

              {/* shipping address field */}
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                name="shipping"
                value={shippingAddress}
                onChange={(event) => setShippingAddress(event.target.value)}
              />

              {/* avatar upload field */}
              {avatarLoading ? (
                <TinyLoading />
              ) : avatar === null ? (
                <div className="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, JPEG (MAX {"<="} 1MB)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      name="avatar"
                      className="hidden"
                      onChange={handleUserAvatar}
                    />
                  </label>
                </div>
              ) : (
                <div className="flex gap-x-2">
                  <Image
                    src={avatar?.path}
                    alt={avatar?.name}
                    height={70}
                    width={70}
                    className="rounded shadow"
                  />
                  <p className="text-sm font-medium flex flex-col">
                    {avatar?.name?.split("/")[1]?.split("_")[1]}
                    <span className="bg-green-500 w-fit px-2 rounded-xl text-white">
                      Avatar Uploaded
                    </span>
                  </p>
                </div>
              )}

              {/* submit button */}
              <AccountButton value={"Update Profile"} />
            </form>
          )}
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

export default EditAccount;
