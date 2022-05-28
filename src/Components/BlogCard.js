import React from "react";

const BlogCard = ({ img, title, description }) => {
  return (
    <div className="">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {title}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
