import React from "react";
import Inventory from "../../Inventory/Inventory";
import ManageItems from "../../ManageItems/ManageItems/ManageItems";
import ManageInventory from "../ManageInventory/ManageInventory";
import ManageInventoryItem from "../ManageInventoryItem/ManageInventoryItem";

const Home = () => {
  return (
    <div>
      <Inventory></Inventory>
      {/* <ManageItems></ManageItems> */}
      <ManageInventory></ManageInventory>
    </div>
  );
};

export default Home;
