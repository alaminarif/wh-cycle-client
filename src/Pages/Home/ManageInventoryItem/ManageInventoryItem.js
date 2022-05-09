import React from "react";

const ManageInventoryItem = ({ manageInventoryItem }) => {
  const { name, image, description, supplierName, price, quantity } = manageInventoryItem;

  const handleDelivered = () => {};

  return (
    <div className="InventroyItem">
      <img src={image} alt="" />
      <h5>{name}</h5>
      <p className="description">{description}</p>
      <h6>Supplier: {supplierName}</h6>
      <p>{price}</p>
      <p className="quantity">{quantity}</p>
      <button className="button" onClick={handleDelivered}>
        Delivered
      </button>
    </div>
  );
};

export default ManageInventoryItem;
