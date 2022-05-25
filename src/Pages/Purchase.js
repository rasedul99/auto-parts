import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";

const fakeItem = {
  _id: "1",
  name: "CHILD'S SAFETY SEATS",
  image: "sdhfjd.jpg",
  desc: "lorem bla bla",
  minOrder: "20",
  aQty: "520",
  price: "5214",
};

const Purchase = () => {
  const [item, setItem] = useState(fakeItem);
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleOrder = (data) => {
    const order = {
      name: user.displayName,
      email: user.email,
      quantity: data.number,
      phone: data.phone,
      address: data.address,
    };
    reset();
    console.log(order);
  };

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 my-5">
      <div class="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{item.name}</h2>
          <p>{item.desc}</p>
          <p>Minimum Order :{item.minOrder}</p>
          <p>Available Qty:{item.aQty}</p>
          <p>Price(per unit price):{item.price}</p>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(handleOrder)}
          className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        >
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            placeholder="Order quantity"
            name="number"
            {...register("number", {
              min: `${item.minOrder}`,
              max: `${item.aQty}`,
            })}
          />
          {errors.number && `Min Order ${item.minOrder} Max order ${item.aQty}`}
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs"
            {...register("address", { required: true })}
          />
          {errors.address?.type === "required" && "address  is required"}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
            {...register("phone", { required: true })}
          />
          {errors.phone?.type === "required" && "Phone Number is required"}
          <input
            type="submit"
            value="Place The Order"
            className="btn btn-primary w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
