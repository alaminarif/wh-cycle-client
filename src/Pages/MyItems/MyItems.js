import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myitems, setMyItems] = useState([]);

  console.log(user?.email);
  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://fast-tundra-99003.herokuapp.com/myitems?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getMyItems();
  }, [user]);
  return (
    <div>
      <h2>this page MyItems {myitems.length}</h2>
    </div>
  );
};

export default MyItems;
