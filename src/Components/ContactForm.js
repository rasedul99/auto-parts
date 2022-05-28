import React from "react";

const ContactForm = () => {
  return (
    <div className="my-10">
      <div className="my-5">
        <h2 className="text-xl text-center ">Contact Us</h2>
        <h2 className="text-2xl text-center ">Stay Connected With Us</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <img
          src="https://st2.depositphotos.com/3896013/9319/i/950/depositphotos_93192200-stock-photo-the-most-popular-spare-parts.jpg"
          alt="Album"
        />

        <div className="px-5 my-5 card  shadow-xl">
          <input
            type="email"
            placeholder="Email Adsress"
            class="input input-bordered w-full my-5"
          />
          <input
            type="text"
            placeholder="Subject "
            class="input input-bordered w-full my-5"
          />
          <textarea
            className="my-5"
            style={styles.textarea}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary w-full my-5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const styles = {
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px auto",
    minHeight: 120,
    width: "100%",
  },
};
