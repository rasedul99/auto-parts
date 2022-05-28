import React from "react";
import notfound from "../images/notfound.png";

const NotFound = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1  lg:grid-cols-2 gap-5">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-primary text-center">OOPS...!</h2>
            <h2 className="">Sorry page is not founding</h2>
          </div>
        </div>
        <div>
          <img src={notfound} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
