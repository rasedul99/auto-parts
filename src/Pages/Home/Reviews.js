import React from "react";
import Review from "../../Components/Review";
import useFetchReviews from "../../hook/useFetchReviews";
import people1 from "../../images/people1.png";
import people2 from "../../images/people2.png";
import people3 from "../../images/people3.png";
const Reviews = () => {
  const [reviews, setReviews] = useFetchReviews();
  console.log(reviews);
 
  return (
    <section className="my-28">
      <h2 className="text-3xl text-center my-5">What our Customer say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
