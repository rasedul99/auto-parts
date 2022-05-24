import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Parts = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            voluptates quo incidunt harum minus mollitia!
          </p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={product.img} alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-xl">{product.name}</h4>
            </div>
          </div>
        </div>
        <Link to="/purchase">
          <Button>Purchase</Button>
        </Link>
      </div>
    </div>
  );
};

export default Parts;
