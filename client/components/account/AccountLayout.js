import React from "react";
import AccountSidebar from "./AccountSidebar";

const AccountLayout = ({ children }) => {
  return (
    <section className="flex lg:flex-row md:flex-row flex-col lg:gap-x-4 md:gap-x-2 gap-y-4">
      {/* sidebar */}
      <AccountSidebar />

      {/* content */}
      <section className="w-full">{children}</section>
    </section>
  );
};

export default AccountLayout;
