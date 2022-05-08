import React from "react";
import "./InventroyItem.css";

const InventroyItem = ({ inventroyItem }) => {
  const { name, image, description, supplierName, price, quantity } = inventroyItem;
  const handleUpdate = () => {};
  return (
    <div className="InventroyItem">
      <img src={image} alt="" />
      <h5>{name}</h5>
      <p className="description">{description}</p>
      <h6>Supplier Name: {supplierName}</h6>
      <p>{price}</p>
      <p>{quantity}</p>
      <button onClick={handleUpdate}>Stock Update</button>
    </div>
  );
};

export default InventroyItem;
