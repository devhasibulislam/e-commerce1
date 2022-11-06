import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const headerBanner = {
    title: "Black Lives Matter.",
    anchor: "https://support.eji.org/give/153413/#!/donation/checkout",
    anchorTitle: "Support the Equal Justice Initiative.",
  };

  return (
    <nav className="text-center bg-black">
      <div className="container mx-auto">
        <div className="py-2">
          <p className="text-white">{headerBanner.title}</p>
          <Link
            to={`//${headerBanner.anchor}`}
            className="text-[#5e80f7] hover:text-primary"
          >
            {headerBanner.anchorTitle}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;

/**
 * Can't open new tab in react, adds localhost:3000 on link?
 * https://stackoverflow.com/questions/47447441/cant-open-new-tab-in-react-adds-localhost3000-on-link
 */
