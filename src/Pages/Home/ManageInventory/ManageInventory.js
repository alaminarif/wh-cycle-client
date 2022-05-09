import React, { useEffect, useState } from "react";
import ManageInventoryItem from "../ManageInventoryItem/ManageInventoryItem";
const ManageInventory = () => {
  const [manageInventory, setManageInventory] = useState([]);
  useEffect(() => {
    fetch("https://fast-tundra-99003.herokuapp.com/ManageInventory")
      .then((res) => res.json())
      .then((data) => setManageInventory(data));
  }, []);
  return (
    <div className="Inventory">
      {manageInventory.map((manageInventoryItem) => (
        <ManageInventoryItem key={manageInventoryItem._id} manageInventoryItem={manageInventoryItem}></ManageInventoryItem>
      ))}
    </div>
  );
};

export default ManageInventory;
