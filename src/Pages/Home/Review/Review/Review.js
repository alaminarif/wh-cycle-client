import React, { useEffect, useState } from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Review.css";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="Review">
      {review.map((reviewItem) => (
        <ReviewItem key={reviewItem.id} reviewItem={reviewItem}></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
