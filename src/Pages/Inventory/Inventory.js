import React, { useEffect, useState } from "react";

import InventroyItem from "../Home/InventroyItem/InventroyItem";

import "./Inventory.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div className="Inventory">
      {inventory.map((inventroyItem) => (
        <InventroyItem key={inventroyItem._id} inventroyItem={inventroyItem}></InventroyItem>
      ))}
    </div>
  );
};

export default Inventory;
