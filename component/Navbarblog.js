import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="-px-4 flex -mb-14 justify-between -mt-12 items-center lg:py-2 lg:px-8 md:lg:-mb-56 md:lg:-mt-24">
      <div className="mx-auto lg:-ml-24 -mb-8  lg:mb-0 md:mb-0">
        <Link href="/">
          <img
            src="/explodingideaslogo.png"
            className="transform scale-50 -mt-12 lg:-mt-10 lg:max-w-sm"
            alt="Startup Ideas, Sent Weekly"
          />
        </Link>
      </div>
      <div className="flex  items-baseline justify-between w-1/2 hidden md:lg:flex md:w-auto text-right -mt-14 mr-4 ">
        <Link href="/blog/navigation" className="mr-20">Trends</Link>
        <Link href="/" className=" mr-20">Newsletter</Link>
        <Link href="/blog/" className="mr-20">Blog</Link>
        <a
          href="https://pro.explodingideas.co"
          className="px-5  py-3 bg-amber-400 rounded-lg hover:scale-95 duration-300 transition text-black shadow-sm font-medium"
        >
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Navbar;
