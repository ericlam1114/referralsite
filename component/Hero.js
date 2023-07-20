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

  

  return (
    <div className="relative w-full mt-36  h-screen">
      <div className="absolute inset-0 bg-center bg-cover hue-rotate-45  filter  md:lg:blur-none" style={{backgroundImage: "url('/chain.png')"}}></div>
      <div className="relative flex  flex-col items-center px-2 md:lg:px-0 justify-center h-full text-center ">
        <h1 className="text-5xl font-bold pb-8 md:lg:pb-4  text-sky-950 md:lg:rounded-lg sm:w-full md:w-3/6 lg:w-3/6 md:lg:text-6xl">
          Permanent Jewelry{" "}
        </h1>
        <p className="text-base  text-sky-950  md:lg:w-2/5 ">
          Start your own permanent jewelry business with ease - we provide the tools, supplies, and step-by-step guides you need. Dive into the sparkling world of jewelry making today!
        </p>
        <div className="pt-8 md:lg:flex md:w-auto text-right md:lg:pt-4 ">
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
