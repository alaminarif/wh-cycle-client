import React, { useEffect, useState } from "react";
import ManageItem from "../ManageItem/ManageItem";
import "./ManageItems.css";

const ManageItems = () => {
  const [manageItems, setManageItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/manageItems")
      .then((res) => res.json())
      .then((data) => setManageItems(data));
  }, []);
  return (
    <div className="ManageItems">
      {manageItems.map((manageItem) => (
        <ManageItem key={manageItem._id} manageItem={manageItem}></ManageItem>
      ))}
    </div>
  );
};

export default ManageItems;
