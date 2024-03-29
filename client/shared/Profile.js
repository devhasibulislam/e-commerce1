import Image from "next/image";
import React, { useContext, useState } from "react";
import { ExistingUser } from "./Header";
import ProfileSubmenu from "./ProfileSubmenu";

const Profile = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const user = useContext(ExistingUser);

  return (
    <>
      <div
        className={`shadow-md hover:shadow-lg p-2 rounded-full relative flex gap-x-2 lg:px-2 px-4`}
        title="Interact with your profile"
        onMouseEnter={() => setOpenProfileMenu(true)}
        onMouseLeave={() => setOpenProfileMenu(false)}
      >
        {user?.avatar?.path ? (
          <Image
            src={user?.avatar?.path}
            alt={user?.name}
            height={30}
            width={30}
            className="object-cover rounded-full shadow"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 text-[#e56c36]`}
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="lg:hidden whitespace-nowrap">View Profile</span>

        {/* submenu for profile section */}
        {openProfileMenu && <ProfileSubmenu />}
      </div>
    </>
  );
};

export default Profile;
