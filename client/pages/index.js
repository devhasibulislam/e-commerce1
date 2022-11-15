import React from "react";
import Title from "../components/Title";
import Header from "../shared/Header";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section className={styles.default__font}>
      <Title title={"Home"} />
      <Header />
    </section>
  );
};

export default Home;
