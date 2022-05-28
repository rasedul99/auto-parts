import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const { register, handleSubmit, reset } = useForm();

  const handleRegistration = (result) => {
    const data = { ...result, email: user.email };
    console.log(data);

    fetch("https://radiant-fjord-31208.herokuapp.com/carparts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
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
  };

  return (
    <div className="w-full my-5  card  bg-base-100 shadow-xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <ToastContainer />
          <div className="grid lg:grid-cols-3 gap-4">
            <input
              className="input input-bordered w-full max-w-xs "
              required
              name="partsname"
              placeholder="Parts Name"
              {...register("partsname")}
            />

            <input
              type="url"
              required
              className="input input-bordered w-full max-w-xs "
              placeholder="Input Url Link"
              name="image"
              {...register("image")}
            />

            <input
              className="input input-bordered w-full max-w-xs "
              required
              placeholder="Price per unit"
              type="number"
              name="price"
              {...register("price")}
            />

            <input
              className="input input-bordered w-full max-w-xs "
              required
              placeholder="Available Quantity"
              type="number"
              name="quantity"
              {...register("quantity")}
            />

            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="minOrder"
              type="number"
              name="minOrder"
              {...register("minOrder")}
            />
          </div>
          <div>
            <h5>Product Details :</h5>

            <textarea
              style={{ height: "100px" }}
              required
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Details"
              {...register("description")}
            />
          </div>
          <input
            type="submit"
            value="Add New Parts"
            className="btn btn-primary rounded-pill p-3"
          />
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
