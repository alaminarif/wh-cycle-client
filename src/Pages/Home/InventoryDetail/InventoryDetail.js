import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});
  // const { _id, name, image, description, supplierName, price, quantity } = inventroy;
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div className="InventoryDetail">
      <img src={inventory.image} alt="" />
      <div className="content">
        <h5>{inventory.name}</h5>
        <p className="description">{inventory.description}</p>
        <h6>Supplier Name: {inventory.supplierName}</h6>
        <p>{inventory.price}</p>
        <p>{inventory.quantity}</p>
        <button>Stock Update</button>
      </div>
    </div>
  );
};

export default InventoryDetail;
