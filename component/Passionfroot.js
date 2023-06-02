import React from 'react';
import Link from 'next/link';
// import Footer from '../component/Footertwo  '

const SponsorshipComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen md:-mt-64 md:-mb-72 lg:mb-0  lg:mt-0">
        <div className="bg-amber-50 p-8 rounded-xl shadow-xl space-y-4 mb-24 lg:mb-12">
          <h2 className=" text-2xl md:lg:text-3xl font-bold text-black sm:text-center">
            Exploding Ideas - The Startup Idea Newsletter
          </h2>
          <p className="text-black sm:text-center">
            We empower founders & side hustlers who want to launch their own business.
          </p>
          <div className="flex justify-center items-center text-black">
            🔁 Every Sunday at 9am PST
          </div>
          <div className="border border-gray-200 py-4 px-4 rounded-xl">
            <h3 className="text-xl flex justify-start font-semibold">Stats</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 text-left text-black gap-y-4 sm:gap-y-0">
              <div>
                Subscribers<br/>
                <span className="text-black">5,182</span><br/>
                Click Through Rate<br/>
                <span className="text-black">15.14%%</span><br/>
                Readers Profile<br/>
                <span className="text-black lg:pr-12">Entrepreneurs, business owners, side-hustlers</span>
              </div>
              <div>
                Open Rate<br/>
                <span className="text-black">49.83%</span><br/>
                Top Readers Origins<br/>
                <span className="text-black">US, UK, Germany, India</span><br/>
                Last Updated<br/>
                <span className="text-black">5/24/2023</span><br/>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold sm:text-center">Sponsor ExplodingIdeas</h2>
          <Link className="block bg-white border border-black rounded-xl p-4 hover:shadow-xl duration-100 shadow-md " target="_blank" href="https://calendly.com/explodingideas-sponsorship/main">
            <div className="flex justify-between items-center  sm:items-start">
              <div >
                <h2 className="text-xl font-semibold">Sponsored Ad</h2>
                <p className="text-gray-600">advertise in the weekly newsletter</p>
              </div>
              <div className="md:lg:flex ">
                <div className="text-2xl font-bold mr-4 -mt-2 md:lg:mt-2 flex">$150</div>
                <Link
                  target="_blank" href="https://calendly.com/explodingideas-sponsorship/main"
                  className="lg:px-6 sm:px-8 py-3  lg:text-base lg:bg-black rounded-lg  duration-300 transition lg:text-white shadow-sm font-medium"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default SponsorshipComponent
