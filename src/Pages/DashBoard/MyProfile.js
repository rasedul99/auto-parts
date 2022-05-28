import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import useFetchProfile from "../../hook/useFetchProfile";
const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useFetchProfile(user,showModal);
  const { register, handleSubmit, reset } = useForm();
  const email = user?.email;
  const handleUpdate = (data) => {
    const updateData = {
      name: user.displayName,
      email: email,
      education: data.education,
      linkdedin: data.image,
      location: data.location,
      phoneNumber: data.phone,
    };

    fetch(`http://localhost:5000/user/profile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("successfuly updated");
      });
    reset();
    setShowModal(false);
  };

  return (
    <div>
      <ToastContainer />
      <div class="card w-full  bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{user?.displayName || ""}</h2>
          <p>Email:{user?.email || ""}</p>
          <p>Education:{profile[0]?.education}</p>
          <p>Location:{profile[0]?.location}</p>
          <p>Phone Number:{profile[0]?.phoneNumber}</p>
          <p>Linkdedin Profile :{profile[0]?.linkdedin}</p>
          <button
            className="btn btn-primary max-w-xs"
            type="button"
            onClick={() => setShowModal(true)}
          >
            update Profile
          </button>
        </div>
        {showModal ? (
          <>
            <form onSubmit={handleSubmit(handleUpdate)}>
              <div className="grid grid-cols-1 gap-5 mx-5">
                <input
                  className="input input-bordered w-full  max-w-xs "
                  name="education"
                  placeholder="Education"
                  {...register("education")}
                />
                <input
                  className="input input-bordered w-full max-w-xs "
                  name="location"
                  placeholder="Address"
                  {...register("location")}
                />

                <input
                  type="url"
                  className="input input-bordered w-full max-w-xs "
                  placeholder="Input Linkedin profile Link"
                  name="image"
                  {...register("image")}
                />

                <input
                  className="input input-bordered w-full max-w-xs "
                  placeholder="Phone Number"
                  type="text"
                  name="phone"
                  {...register("phone")}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary rounded-pill p-3 max-w-xs"
                />
              </div>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MyProfile;
