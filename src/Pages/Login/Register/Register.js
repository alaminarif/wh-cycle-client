import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmail = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePassword = (event) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(event.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum six characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  // confirmPassword
  const confirmPassword = (event) => {
    if (event.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password don't match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };
  // console.log(email, password);
  const handleForm = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  const handleRegister = () => {
    navigate("/signin");
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <h3>Sign up</h3>
        <input onChange={handleEmail} type="text" id="" placeholder="Email" />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input onChange={handlePassword} type="password" name="password" id="" placeholder="Password" />
        <input onChange={confirmPassword} type="password" name="password" id="" placeholder="Confirm Password" />
        {errors?.password && <p className="error-message">{errors.password}</p>}
        <input className="button" type="submit" value="Sign up" />

        {/* {error && <p className="error-message">{error}</p>} */}
        {hookError && <p className="error-message"> {hookError?.message} </p>}
        <p>
          Already sign Up? <span onClick={handleRegister}>Sign in</span>
        </p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
