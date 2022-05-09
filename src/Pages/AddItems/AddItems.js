import React from "react";
import "./AddItems.css";

const AddItems = () => {
  // const { _id, name, image, description, supplierName, price, quantity } = inventroyItem;
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplierName = e.target.supplierName.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h3>Add New Items</h3>
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="text" name="supplierName" id="" placeholder="Supplier Name" />
        <input type="text" name="price" id="" placeholder="price" />
        <input type="text" name="quantity" id="" placeholder="Quantity" />
        <input type="text" name="image" id="" placeholder="Images Url" />
        <textarea name="description" id="" placeholder="Description"></textarea>
        <input className="button" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItems;
