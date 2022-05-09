import React, { useEffect, useState } from "react";

import InventroyItem from "../Home/InventroyItem/InventroyItem";

import "./Inventory.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://fast-tundra-99003.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <>
      <h2>Inventory</h2>
      <div className="Inventory">
        {inventory.map((inventroyItem) => (
          <InventroyItem key={inventroyItem._id} inventroyItem={inventroyItem}></InventroyItem>
        ))}
      </div>
    </>
  );
};

export default Inventory;
