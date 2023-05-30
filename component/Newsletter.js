import React, { useState } from "react";
import axios from "axios";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      const data = {
        email: email,
      };

      const response = await axios.post("/api/subscribe", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      setEmail("");
      alert("Successfully subscribed. Thank you!");
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-col justify-between items-center py-12">
      <h2 className="text-5xl font-bold text-center mb-10 w-full">Your Empire Starts Today</h2>
      <div className="flex flex-col md:flex-row gap-5 w-full md:w-1/3 items-center">
        {/* <p className="text-base md:w-1/2 text-center md:text-right">
          Join 1,000+ elite entrepreneurs getting curated startup ideas in
          million dollar niches.
        </p> */}
        <form onSubmit={handleSubmit} className="md:w-1/2">
          <div className="flex gap-5">
            <input
              placeholder="Enter your email..."
              type="email"
              value={email}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
            />

            <button
              className="px-6 py-3 bg-gradient-to-r from-[#181918] to-[#262927] rounded-lg hover:scale-95 duration-300 transition text-white shadow-xl font-medium"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
