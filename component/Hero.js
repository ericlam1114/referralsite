import React, { useState, useEffect } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../component/Header.js";
import sparkloop from "sparkloop";

const Hero = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const opts = {
    scan_forms: false,
  };

  const router = useRouter();

  useEffect(() => {
    sparkloop("team_31aa1e31f0fd", opts);
    setEmail("");
  }, []);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      console.log(formData);

      const data = {
        email: email,
      };

      SL.trackSubscriber(email);

      const response = await axios.post("/api/subscribe", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      setEmail("");
      // router.push("/congratulations");
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };

  return (
    <div className="relative w-full mt-36  h-screen">
      <div className="absolute inset-0 bg-center bg-cover hue-rotate-45 contrast-50 filter blur-sm" style={{backgroundImage: "url('/bannertwo.png')"}}></div>
      <div className="relative flex  flex-col items-center px-2 md:lg:px-0 justify-center h-full text-center">
        <h1 className="text-5xl font-bold pb-8 md:lg:pb-4  text-sky-900 bg-pink-100 rounded-t-lg rounded-b-none border md:lg:rounded-lg sm:w-full md:w-3/6 lg:w-3/6 md:lg:text-6xl">
          Permanent Jewelry Kit{" "}
        </h1>
        <p className="text-base  text-sky-900 bg-pink-100 rounded-b-lg rounded-t-none border  md:lg:w-2/5 ">
          Start your own permanent jewelry business with ease - we provide the tools, supplies, and step-by-step guides you need. Dive into the sparkling world of jewelry making today!
        </p>
        <div className="w-1/2 hidden md:lg:flex md:w-auto text-right md:lg:pt-4 ">
        <a
         href="/blog"
          className="px-5  py-3 bg-pink-400 rounded-lg hover:scale-95 duration-300 transition text-white shadow-sm font-medium"
        >
           Learn More
        </a>
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
