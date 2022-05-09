import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ reviewItem }) => {
  const { img, rating, shortDes, description, name, date } = reviewItem;
  return (
    <div className="ReviewItem">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p className="ratingDate">
        <span>{rating}</span> <i>{date}</i>
      </p>
      <h4>{shortDes}</h4>

      <span style={{ color: "#e02c6d" }}>
        {" "}
        <i style={{ color: "#666" }}>{description}</i> more...
      </span>
    </div>
  );
};

export default ReviewItem;
