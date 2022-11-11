import React, { useState } from "react";
import Banner from "../components/home/Banner";
import BigDiscounts from "../components/home/BigDiscounts";
import CycleStyle from "../components/home/CycleStyle";
import FlashDeals from "../components/home/FlashDeals";
import MadeForYou from "../components/home/MadeForYou";
import NewArrivals from "../components/home/NewArrivals";
import TabCategory from "../components/home/TabCategory";
import TopCategories from "../components/home/TopCategories";
import TopRatingsFeaturedBrands from "../components/home/TopRatingsFeaturedBrands";
import Modal from "../components/Modal";
import ModalContent from "../components/ModalContent";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const Home = () => {
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* page header */}
      <Navbar />

      {/* page contents */}
      <main>
        <Banner />
        <FlashDeals setShowModal={setShowModal} setProduct={setProduct} />
        <TopCategories />
        <TopRatingsFeaturedBrands />
        <NewArrivals />
        <BigDiscounts />
        <TabCategory setShowModal={setShowModal} setProduct={setProduct} />
        <MadeForYou setShowModal={setShowModal} setProduct={setProduct} />
        <CycleStyle />
      </main>

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          content={<ModalContent product={product} />}
        />
      )}

      {/* page footer */}
      <Footer />
    </>
  );
};

export default Home;
