import React, { useState, useEffect } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../component/Header.js";
import Link from "next/link";

const Hero = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="container px-2 md:mx-auto  md:lg:mx-auto md:lg:h-screen flex flex-col md:flex-row justify-between items-center ">
      {/* {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
      <div className="flex flex-col gap-5   mt-0 md:-mt-8  lg:mt-0 element ">
        <p className="text-md  bg-white transition duration-500 ease-in-out  transform   md:lg:text-lg element font-medium bg-holographic opacity-100 text-amber-400  px-3 flex justify-center rounded-3xl py-2 w-28 lg:w-32">
       <em> Pro Plan 🚀</em>
        </p>
        <p className="text-5xl font-bold sm:w-full md:w-3/6 lg:w-4/6 md:lg:text-6xl">
          Discover Your Online Empire
        </p>
        <p className="text-base md:lg:w-1/2">
        Join 300+ successful founders that upgraded to Exploding Ideas Pro to build their profitable startup.
        </p>

        <div className="flex gap-5">
          <Link href="/">
            <button
              // onClick={handleClick}
              className="px-6 py-3 bg-gradient-to-r from-[#181918] to-[#262927] rounded-lg hover:scale-95 duration-300 transition text-white shadow-xl font-medium"
            >
             Join Pro{" "}
            </button>
          </Link>
        </div>

        <div className="">
          <p className="body-md  pt-4 -mb-4 lg:body-lg text-center md:text-left opacity-60 md:lg:-mb-6">
            Join smart entrepreneurs from
          </p>
          <img
            src="/startupswhoread.png"
            className="max-w-full lg:max-w-sm -pt-2 opacity-60 "
            alt="startups that read explodingideas"
          />
        </div>
        {/* <div className="flex gap-5"> */}
        {/* <BsTwitter className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" /> */}
        {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        {/* </div> */}
      </div>
      <img
        src="/phone.png"
        className="max-w-full md:w-3/5 lg:max-w-lg -mt-10 "
        priority={100}
        alt="mascot"
      />
    </div>
  );
};

export default Hero;
