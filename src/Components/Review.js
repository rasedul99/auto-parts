import React from "react";
import { FaStar } from "react-icons/fa";
import avatar from "../images/avatar.png";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Review = ({ review }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img ? review.img : avatar} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
          </div>
        </div>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                color={review.rating > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <p>{review.description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px auto",
    minHeight: 100,
    width: 300,
  },
};

export default Review;
