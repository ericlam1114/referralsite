import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className=" -px-4 flex -mb-14 justify-between -mt-4 items-center lg:py-2 lg:px-8 md:lg:-mb-56 md:lg:-mt-24">
      <div className="-ml-16 mb-2 lg:mb-4 md:mb-0 lg:-ml-24 "><Link href="/">
        <img
          src="/explodingideaslogo.png"
          className="transform scale-50 -mt-12 lg:-mt-10 lg:max-w-sm"
          alt="Startup Ideas, Sent Weekly"
        /></Link>
      </div>
      <div className="w-1/2 md:w-auto text-right -mt-14 mr-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-black rounded-lg hover:scale-95 duration-300 transition text-white shadow-sm font-medium"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
