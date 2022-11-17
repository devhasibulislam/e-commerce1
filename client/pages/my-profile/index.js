import Image from "next/image";
import React from "react";
import AccountLabel from "../../components/account/AccountLabel";
import AccountLayout from "../../components/account/AccountLayout";
import Loading from "../../components/loading/Loading";
import Title from "../../components/Title";
import Header from "../../shared/Header";
import useMyself from "../../utils/useMyself";

const Profile = () => {
  const [myselfState, isLoading] = useMyself();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title title={"My Profile"} />
      <Header />
      <section className="container mx-auto my-4 lg:px-0 px-4">
        <AccountLayout>
          <section className="flex flex-col gap-y-4">
            {/* avatar and name */}
            <div className="flex flex-col gap-y-2">
              <Image
                src={myselfState?.avatar?.path}
                alt={myselfState?.avatar?.name}
                height={200}
                width={200}
                className="object-cover rounded-lg shadow"
              />
              <h1 className="text-lg font-semibold border-b border-dashed w-fit">
                {myselfState?.email}
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-2 shadow p-4 rounded-lg">
              {/* email */}
              <AccountLabel title={"Name"} info={myselfState?.name} />
              {/* phone */}
              <AccountLabel title={"Phone"} info={myselfState?.phone} />
              {/* phone */}
              <AccountLabel title={"Role"} info={myselfState?.role} />
              {/* status */}
              <AccountLabel title={"Status"} info={myselfState?.status} />
            </div>
          </section>
        </AccountLayout>
      </section>
    </>
  );
};

export default Profile;
