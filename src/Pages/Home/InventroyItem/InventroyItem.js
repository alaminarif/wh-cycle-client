import React from "react";
import { useNavigate } from "react-router-dom";
import "./InventroyItem.css";

const InventroyItem = ({ inventroyItem }) => {
  const navigate = useNavigate();
  const { _id, name, image, description, supplierName, price, quantity } = inventroyItem;
  const handleUpdate = (id) => {
    navigate(`/inventoryItem/${id}`);
  };
  return (
    <div className="InventroyItem">
      <img src={image} alt="" />
      <h5>
        {" "}
        <span>{name} </span>
        <span>{quantity}</span>{" "}
      </h5>
      <p className="description">{description}</p>
      <h6>Supplier: {supplierName}</h6>

      <p>{price}</p>
      <button className="button" onClick={() => handleUpdate(_id)}>
        Stock Update
      </button>
    </div>
  );
};

export default InventroyItem;
