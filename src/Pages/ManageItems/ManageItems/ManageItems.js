import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ManageItem from "../ManageItem/ManageItem";
import "./ManageItems.css";

const ManageItems = () => {
  const navigate = useNavigate();
  const [manageItems, setManageItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/manageItems")
      .then((res) => res.json())
      .then((data) => setManageItems(data));
  }, []);
  const handleNewItem = () => {
    navigate("/AddItems");
  };
  return (
    <div className="ManageItems">
      <table className="ManageItem">
        <tr>
          <th className="name">Name</th>
          <th className="price"> Price</th>
          <th className="quantity">Quantity</th>
          <th className="supplier"> Supplier</th>
          <th className="option">Option</th>
        </tr>
      </table>
      {manageItems.map((manageItem) => (
        <ManageItem key={manageItem._id} manageItem={manageItem}></ManageItem>
      ))}
      <button className="button" onClick={handleNewItem}>
        Add new Item
      </button>
    </div>
  );
};

export default ManageItems;
