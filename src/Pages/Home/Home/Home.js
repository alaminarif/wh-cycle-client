import React from "react";
import Inventory from "../../Inventory/Inventory";
import "./Home.css";
import ManageItems from "../../ManageItems/ManageItems/ManageItems";
import ManageInventory from "../ManageInventory/ManageInventory";
import ManageInventoryItem from "../ManageInventoryItem/ManageInventoryItem";

const Home = () => {
  return (
    <div className="Home">
      <Inventory></Inventory>
      {/* <ManageItems></ManageItems> */}
      {/* <ManageInventory></ManageInventory> */}
    </div>
  );
};

export default Home;
