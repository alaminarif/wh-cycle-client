import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithEmailAndPassword, user, loading, hookError] = useSignInWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.vlaue });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePassword = (event) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(event.target.value);
    console.log(validPassword);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum six characters" });
      setUserInfo({ ...errors, password: "" });
    }
  };
  // console.log(email, password);
  const handleForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  useEffect(() => {
    console.error(hookError);
  }, [hookError]);
  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleEmail} type="text" id="" placeholder="Email" />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input onChange={handlePassword} type="password" name="password" id="" placeholder="Password" />
        {errors?.password && <p className="error-message">{errors.password}</p>}
        <input type="submit" value="Signin" />
        {/* {error && <p className="error-message">{error}</p>} */}
        {hookError && <p className="error-message"> {hookError?.message} </p>}
      </form>
    </div>
  );
};

export default Login;
