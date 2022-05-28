import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import useFetchSingleItem from "../hook/useFetchSingleItem";

const Purchase = () => {
  const { id } = useParams();
  console.log(id);
  const [item, setItem] = useFetchSingleItem(id);
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleOrder = (data) => {
    console.log(data);
    const price = parseInt(data.number) * parseInt(item.price);
    console.log(price);
    const order = {
      _id: id,
      name: user.displayName,
      email: user.email,
      quantity: data.number,
      phone: data.phone,
      address: data.address,
      partsname: item.partsname,
      price: price,
    };
    console.log(order);
    fetch("https://radiant-fjord-31208.herokuapp.com/orderd", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`${data.message}`);
          reset();
        } else {
          toast("failed to insert");
          reset();
        }
      });
  };

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 my-5">
      <div class="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={item.image} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{item.partsname}</h2>
          <p>{item.description}</p>
          <p>Minimum Order :{item.minOrder}</p>
          <p>Available Qty:{item.quantity}</p>
          <p>Price(per unit price):{item.price}</p>
        </div>
      </div>
      <div>
        <ToastContainer />
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
              max: `${item.quantity}`,
            })}
          />
          {errors.number &&
            `Min Order ${item.minOrder} Max order ${item.quantity}`}
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
