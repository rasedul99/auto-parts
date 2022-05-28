import React from "react";
import BlogCard from "../../Components/BlogCard";
import ContactForm from "../../Components/ContactForm";
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
      <h2 className="text-3xl text-center my-5">Recent Blogs</h2>
      <div className="grid lg:grid-cols-3 gap-4 my-5">
        <BlogCard
          img="https://i.ibb.co/jDgKBkv/lamborgini.jpg"
          title="Lamborgini"
          description="Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi."
        />
        <BlogCard
          img="https://i.ibb.co/DDDmChM/bmw-8-series-right-front-three-quarter8.jpg"
          title="BMW"
          description="The newest model in the BMW line-up is the X6 with a price tag of 90.00 Lakh - 1.04 Cr. BMW cars in India under 50 Lakh include the 2 Series, X1 and 3 Series."
        />
        <BlogCard
          img="https://i.ibb.co/B6BSgRR/tesla.png"
          title="Tesla"
          description="Tesla, Inc. is an American automotive and clean energy company based in Austin, Texas. Tesla designs and manufactures electric vehicles, battery energy storage from home to grid-scale"
        />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
