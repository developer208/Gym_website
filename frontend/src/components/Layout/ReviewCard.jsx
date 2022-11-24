import React from "react";
import ReactStars from "react-rating-stars-component";
import profilePng from "../../assets/images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
      edit: false,
      color: "rgba(20,20,20,0.1)",
      activeColor: "tomato",
      size: Window.innerwidth < 600 ? 20 : 25,
      value: review.rating,
    };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="user" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span>{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
