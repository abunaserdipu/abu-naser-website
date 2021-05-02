import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import HomeProjects from "./HomeProjects";
import HomeContact from "./HomeContact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <HomeProjects />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Home;
