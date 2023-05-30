import React from "react";
import { FaGoogle, FaFacebook, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from 'next/link';

function Login() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row relative">
      <button onClick={handleGoBack} className="absolute top-4 left-4 flex">
      ← Go Back
      </button>
      <div className="absolute top-4 right-4 flex space-x-4 text-md">
        <Link href="/pro" className="text-black">
          Sign Up
        </Link>
        <Link href="/" className="text-black ">
          What is Exploding Ideas?
        </Link>
      </div>
      <div className="md:w-1/2 bg-gradient-to-r pt-10 lg:pt-0 from-yellow-300 to-yellow-50 text-white flex flex-col items-center justify-center">
        <img src="/explodingideaslogo.png" alt="Logo" className="h-48 w-48 -mb-8 lg:mb-0" />
        <h2 className=" text-2xl lg:text-3xl px-20 lg:px-44 text-black mb-12">Empowering you with data on emerging startup trends, so you can capitalize on them</h2>
        <h2 className="text-2xl text-black mb-4">Need more ideas?</h2>
        <Link href="/pro"> 
          <button className="px-6 py-3 bg-black hover:shadow-lg text-white rounded mb-8 lg:mb-4">
            Upgrade to Pro
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 bg-white flex flex-col items-center justify-center">
        <h2 className="text-3xl text-black mb-4 mt-10 lg:mt-0">Sign In</h2>
        <form className="flex flex-col space-y-4">
          <input type="email" placeholder="Email" className="border border-black p-2 -mx-20 rounded" />
          <input type="password" placeholder="Password" className="border border-black p-2 -mx-20 rounded" />
          <Link href="#" className="text-blue-500 hover:underline self-end">
            Lost your password?
          </Link>
          <button type="submit" className="px-6 -mx-20 py-3 bg-black hover:shadow-lg  text-white rounded ">
            Login
          </button>
        </form>
        <button className="px-6 py-3 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded shadow-lg flex items-center space-x-2 mt-4">
          <FaGoogle /> <span>Continue with Google</span>
        </button>
        <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded flex items-center  space-x-2 mt-4 mb-8 lg:mb-0">
          <FaFacebook /> <span>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
