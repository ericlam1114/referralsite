import React from "react";
import Link from 'next/link'
import { motion } from 'framer-motion';

const ReportSection = () => {
  return (
    <section className="text-center pb-8 text-gray-800 px-4 md:px-0 pt-8 lg:pt-28 lg:pb-28">
      <h2 className="text-2xl lg:text-4xl font-bold mb-2">Product Market Fit At Your Fingertips</h2>
      {/* <h3 className="text-xl font-semibold">Pro Reports for 80+ SaaS Niches</h3> */}
      <p className="text-base">
        Unlock all of our business ideas!
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3   lg:flex lg:justify-center lg:space-x-4 lg:mt-4">
        <img
          className="w-full hidden md:hidden lg:block  h-auto md:h-32 lg:h-36 rounded-lg border border-gray-300 my-2 flex-shrink max-w-full"
          src="/affiliatemarketing.png"
          alt="Image 2"
        />
        <img
          className="w-full hidden md:hidden lg:block  h-auto md:h-32 lg:h-40 rounded-lg my-2 border border-gray-300 flex-shrink max-w-full"
          src="/ai.png"
          alt="Image 2"
          />
        <img
          className="w-full hidden md:block  h-auto md:h-32 lg:h-44 rounded-lg my-2 border border-gray-300 flex-shrink max-w-full"
          src="/adhd.png"
          alt="Image 2"
          />
        <img
          className="w-full h-auto md:h-32 lg:h-40 rounded-lg my-2 border border-gray-300 flex-shrink max-w-full"
          src="/aivoicegenerator.png"
          alt="Image 2"
          />
        <img
          className="w-full hidden md:block e h-auto md:h-32 lg:h-36 rounded-lg my-2 border border-gray-300 flex-shrink max-w-full"
          src="/midjourney.png"
          alt="Image 2"
          />
      </div>
          
      
      <div className="flex justify-center gap-5 ">
          <Link href="/" className="pt-8">
            <button
              // onClick={handleClick}
              className="px-6 py-3 bg-gradient-to-r from-[#181918] to-[#262927] rounded-lg hover:scale-95 duration-300 transition text-white shadow-xl font-medium "
            >
              Join Pro{" "}
            </button>
          </Link>
        </div>
    </section>
  );
};

export default ReportSection;
