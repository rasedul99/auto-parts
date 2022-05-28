import React from "react";
import { Link } from "react-router-dom";

const Parts = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product.image} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{product.partsname}</h2>
          <p>{product.desc}</p>
          <p>Minimum Order :{product.minOrder}</p>
          <p>Available Qty:{product.quantity}</p>
          <p>Price(per unit price):{product.price}</p>
        </div>
        <Link
          to={`/purchase/${product._id}`}
          className="btn btn-primary w-full"
        >
          purchase Now
        </Link>
      </div>
    </div>
  );
};

export default Parts;
