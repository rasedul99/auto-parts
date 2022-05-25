import React from "react";
import { Link } from "react-router-dom";

const Parts = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{product.name}</h2>
          <p>{product.desc}</p>
          <p>Minimum Order :{product.minOrder}</p>
          <p>Available Qty:{product.aQty}</p>
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
