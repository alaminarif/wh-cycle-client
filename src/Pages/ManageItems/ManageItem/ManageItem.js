import React from "react";
import "./ManageItem.css";

const ManageItem = ({ manageItem: manageItem }) => {
  const { name, image, description, supplierName, price, quantity } = manageItem;
  return (
    <table className="ManageItem">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Supplier</th>
      </tr>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{supplierName}</td>
      </tr>
    </table>
  );
};

export default ManageItem;
