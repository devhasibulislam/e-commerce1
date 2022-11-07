import React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto">
        <Footer1 />
        <Footer2 />
      </div>
    </footer>
  );
};

export default Footer;
