import React from "react";
import Inventory from "../../Inventory/Inventory";
import "./Home.css";
import ManageItems from "../../ManageItems/ManageItems/ManageItems";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="Home">
      <Banner></Banner>
      <Inventory></Inventory>
      {/* <ManageItems></ManageItems> */}
    </div>
  );
};

export default Home;
