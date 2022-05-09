import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const navigate = useNavigate();
  const [inventory, setInventory] = useState({});
  const [count, setCount] = useState(0);
  // const { _id, name, image, description, supplierName, price, quantity } = inventroy;
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  const handleDelivered = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleManageInventory = () => {
    navigate("/manageitems");
  };
  return (
    <div className="InventoryDetail">
      <div className="inventory-card">
        <img src={inventory.image} alt="" />
        <div className="content">
          <h5>{inventory.name}</h5>
          <p className="description">{inventory.description}</p>
          <h6>Supplier: {inventory.supplierName}</h6>
          <p>{inventory.price}</p>
          <p className="quantity">{inventory.quantity}</p>

          <button className="button" onClick={handleDelivered}>
            Delivered
          </button>
          <button className="button" onClick={handleManageInventory}>
            {" "}
            Manage Inventory
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Restock" />
        <input className="button" type="submit" value="Restock" />
      </form>
    </div>
  );
};

export default InventoryDetail;
