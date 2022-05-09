import React from "react";
import { useForm } from "react-hook-form";
import "./AddItems.css";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://fast-tundra-99003.herokuapp.com/inventory/`;
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Add New Item</h3>
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
