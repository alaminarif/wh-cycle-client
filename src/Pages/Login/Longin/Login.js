import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const from = location.state?.from?.pathname || "/";
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
    console.log(validPassword);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum six characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleForm = (event) => {
    console.log(userInfo);
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleEmail} type="text" id="" placeholder="Email" />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input onChange={handlePassword} type="password" name="password" id="" placeholder="Password" />
        {errors?.password && <p className="error-message">{errors.password}</p>}
        <input type="submit" value="Signin" />
        <p>
          need an account? <Link to="/signup">please sign up</Link>
        </p>
        <p>
          forget password?{" "}
          <span
            onClick={async () => {
              await sendPasswordResetEmail(userInfo.email);
              toast("Sent email");
            }}
          >
            reset password
          </span>
        </p>
        {/* {error && <p className="error-message">{error}</p>} */}
        {hookError && <p className="error-message"> {hookError?.message} </p>}
        <ToastContainer />
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;