import React from "react";
import Google from "../../../Images/google-logo-png.png";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className=" mx-2 d-flex align-items-center">
        <div style={{ height: "1px", backgroundColor: "#999" }} className="w-50"></div>
        <div className=" mx-2">or</div>
        <div style={{ height: "1px", backgroundColor: "#999" }} className="w-50 "></div>
      </div>
      <p className="text-danger">{errorElement}</p>
      <div>
        <button onClick={() => signInWithGoogle()} className=" button w-100 d-block ">
          <img className="text-light" style={{ width: "30px" }} src={Google} alt="" />
          <span className="px-2 text-light"> Google Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
