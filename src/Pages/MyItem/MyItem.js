import React from "react";

const MyItem = ({ myitem }) => {
  const { _id, name, image, description, supplierName, price, quantity } = myitem;
  return (
    <tr>
      <td className="name">{name}</td>
      <td className="price">{price}</td>
      <td className="quantity">{quantity}</td>
      <td className="supplier"> {supplierName}</td>
      <td className="option">
        <button className="button">Delete</button>
      </td>
    </tr>
  );
};

export default MyItem;
