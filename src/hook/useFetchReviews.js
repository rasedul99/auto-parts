import { useEffect, useState } from "react";

const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://radiant-fjord-31208.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};

export default useFetchReviews;
