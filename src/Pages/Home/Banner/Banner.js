import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const handleAll = () => {
    navigate("/manageInventory");
  };
  return (
    <div className="Banner">
      <div className="banner-content">
        <h1>Cycle Buying Made Easy</h1>
        <p>Live a healthier and more active lifestyle, all riders welcome!</p>
        <button className="button" onClick={handleAll}>
          {" "}
          Warehouse All Cycle
        </button>
      </div>
      <div className="image">
        <img src="https://i.ibb.co/y0hz5Cq/18.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
