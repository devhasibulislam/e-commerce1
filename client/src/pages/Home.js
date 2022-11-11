import React from "react";
import Banner from "../components/home/Banner";
import BigDiscounts from "../components/home/BigDiscounts";
import FlashDeals from "../components/home/FlashDeals";
import MadeForYou from "../components/home/MadeForYou";
import NewArrivals from "../components/home/NewArrivals";
import TabCategory from "../components/home/TabCategory";
import TopCategories from "../components/home/TopCategories";
import TopRatingsFeaturedBrands from "../components/home/TopRatingsFeaturedBrands";
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
        <TopCategories />
        <TopRatingsFeaturedBrands />
        <NewArrivals />
        <BigDiscounts />
        <TabCategory />
        <MadeForYou />
      </main>

      {/* page footer */}
      <Footer />
    </>
  );
};

export default Home;
