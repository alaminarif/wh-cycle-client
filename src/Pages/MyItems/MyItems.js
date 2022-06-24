import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myitems, setMyItems] = useState([]);
  console.log(user?.email);

  useEffect(() => {
    // const getMyItems = async () => {
    //   const email = user.email;
    //   console.log(email);
    //   const url = `https://fast-tundra-99003.herokuapp.com/myitems?email=${email}`;
    //   const { data } = await axios.get(url);
    //   setMyItems(data);
    // };
    // getMyItems();
    const url = `https://fast-tundra-99003.herokuapp.com/myitems?email=${user?.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);
  return (
    <div>
      <h2>this page MyItems {myitems.length}</h2>
      <table className="ManageItems">
        <thead>
          <th className="name">Name</th>
          <th className="price"> Price</th>
          <th className="quantity">Quantity</th>
          <th className="supplier"> Supplier</th>
          <th className="option">Option</th>
        </thead>
        <tbody>
          {myitems.map((myitem) => (
            <MyItem myitem={myitem}></MyItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;
