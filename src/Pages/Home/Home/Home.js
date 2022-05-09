import React from "react";
import Inventory from "../../Inventory/Inventory";
import "./Home.css";

import Banner from "../Banner/Banner";
import Review from "../Review/Review/Review";

const Home = () => {
  return (
    <div className="Home">
      <Banner></Banner>
      <Inventory></Inventory>
      <Review></Review>
    </div>
  );
};

export default Home;
