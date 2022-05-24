import React from "react";
import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";
import Summary from "../../Components/Summary";
import useParts from "../../hook/useParts";
import Parts from "../../Pages/Home/Parts";
import Reviews from "./Reviews";

const Home = () => {
  const [parts, setParts] = useParts();

  return (
    <div>
      <Slider />
      <div className="my-5">
        <h2 className="text-3xl text-center ">Auto Parts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {parts.slice(0, 3).map((product) => (
            <Parts key={product._id} product={product}></Parts>
          ))}
        </div>
      </div>

      <Summary />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
