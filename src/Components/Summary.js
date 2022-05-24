import React from "react";
import { AiFillCar } from "react-icons/ai";
import { MdOutlineReviews, MdSupervisedUserCircle } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
const Summary = () => {
  return (
    <div>
      <h3 className=" text-xl font-bold uppercase text-center my-10">
        Our Buisness Growth
      </h3>

      <div className="flex flex-wrap justify-around ">
        <div>
          <h3 className="text-5xl">
            <MdSupervisedUserCircle />
          </h3>

          <h3>we served 1000+ customers</h3>
        </div>
        <div>
          <h3 className="text-5xl">
            <RiMoneyDollarBoxFill />
          </h3>

          <h3> 120M+ Annual revenue</h3>
        </div>
        <div>
          <h3 className="text-5xl">
            <MdOutlineReviews />
          </h3>

          <h3>33K+ Reviews</h3>
        </div>
        <div>
          <h3 className="text-5xl">
            <AiFillCar />
          </h3>
          <h3>100+ Auto Parts</h3>
        </div>
      </div>
    </div>
  );
};

export default Summary;
