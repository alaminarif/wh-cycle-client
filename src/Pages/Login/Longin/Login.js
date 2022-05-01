import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // console.log(email, password);
  const handleForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleEmail} type="text" name="email" id="" placeholder="Email" />
        <input onChange={handlePassword} type="password" name="password" id="" placeholder="Password" />
        <input type="submit" value="Signin" />
      </form>
    </div>
  );
};

export default Login;
