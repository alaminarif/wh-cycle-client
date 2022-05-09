import React from "react";
import { useForm } from "react-hook-form";
import "./AddItems.css";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    reset();
  };
  // const { _id, name, image, description, supplierName, price, quantity } = inventroyItem;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const supplierName = e.target.supplierName.value;
  //   const price = e.target.price.value;
  //   const quantity = e.target.quantity.value;
  //   const image = e.target.image.value;
  //   const description = e.target.description.value;
  //   console.log(name, supplierName);
  // };
  return (
    <div>
      {/* <form onSubmit={handleSubmit} action="">
        <h3>Add New Items</h3>
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="text" name="supplierName" id="" placeholder="Supplier Name" />
        <input type="text" name="price" id="" placeholder="price" />
        <input type="text" name="quantity" id="" placeholder="Quantity" />
        <input type="text" name="image" id="" placeholder="Images Url" />
        <textarea name="description" id="" placeholder="Description"></textarea>
        <input className="button" type="submit" value="Add Item" />
      </form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" type="text" {...register("name")} />
        <input placeholder="Supplier Name" type="text" {...register("supplierName")} />
        <input placeholder="Price" type="text" {...register("price")} />
        <input placeholder="Quantity" type="number" {...register("quantity")} />
        <input placeholder="Image Url" type="text" {...register("image")} />
        <input placeholder="Description" type="text" {...register("description")} />
        <input className="button" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItems;
