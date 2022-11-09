import React from "react";
import Banner from "../components/home/Banner";
import FlashDeals from "../components/home/FlashDeals";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* page header */}
      <Navbar />

      {/* page contents */}
      <main>
        <Banner />
        <FlashDeals />
      </main>

      {/* page footer */}
      <Footer />
    </>
  );
};

export default Home;