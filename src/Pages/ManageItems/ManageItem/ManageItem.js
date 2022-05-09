import React, { useState } from "react";
import "./ManageItem.css";

const ManageItem = ({ manageItem: manageItem }) => {
  const { _id, name, image, description, supplierName, price, quantity } = manageItem;
  const [deleteds, setDeleted] = useState({});
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      console.log("id :", id);
      const url = `https://fast-tundra-99003.herokuapp.com/manageItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            // const remaining = deleteds.fillter((deleted) => deleted._id !== id);
            // setDeleted(remaining);
          }
        });
    }
  };
  return (
    <table className="ManageItem">
      <tr>
        <td className="name">{name}</td>
        <td className="price">{price}</td>
        <td className="quantity">{quantity}</td>
        <td className="supplier"> {supplierName}</td>
        <td className="option">
          <button onClick={() => handleDelete(_id)} className="button">
            Delete
          </button>
        </td>
      </tr>
    </table>
  );
};

export default ManageItem;
