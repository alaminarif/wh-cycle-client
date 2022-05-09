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
      <i>{description}</i>
    </div>
  );
};

export default ReviewItem;
