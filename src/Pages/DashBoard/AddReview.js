import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const AddReview = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const name = user.displayName;
  console.log(name);
  const image = user.photoURL;
  console.log(image);
  const [currentValue, setCurrentValue] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const review = {
      rating: currentValue,
      description: data.description,
      name: name,
      image: image,
    };
    console.log(review);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`${data.message}`);
          reset();
        } else {
          toast("failed to insert");
        }
      });
    reset();
    console.log(review);
  };

  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="my-3">
      <div style={styles.container}>
        <h2 className="my-2"> Rate Us</h2>
        <ToastContainer />
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.container}>
          <textarea
            placeholder="What's your experience?"
            style={styles.textarea}
            name="description"
            {...register("description")}
          />

          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
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

export default AddReview;
