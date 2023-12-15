import { useState } from "react";
import Navbar from "../../component/Navbar";
import Bloghero from "../../component/Bloghero";
import Blogsection from "../../component/Blogsection";
import Footertwo from "../../component/Footer";
import Newsletterinput from "../../component/Newsletterinput";
import Head from "next/head";

const SolarTiltAngleCalculator = () => {
  const [latitude, setLatitude] = useState(0);
  const [optimalTiltAngle, setOptimalTiltAngle] = useState(0);

  const calculateOptimalTiltAngle = () => {
    // Simple formula for optimal tilt angle based on latitude
    const tiltAngle = latitude * 0.76 + 3.1;
    setOptimalTiltAngle(tiltAngle.toFixed(2));
  };

  return (
    <div>
      <Head>
        <title>Solar Panel Tilt Angle Calculator - Optimize Your Solar Energy Production</title>
        <meta
          name="description"
          content="Calculate the optimal tilt angle for your solar panels with our Solar Panel Tilt Angle Calculator."
        />
        <meta name="title" content="Solar Panel Tilt Angle Calculator" />
        {/* Other meta tags */}
      </Head>
      <Navbar></Navbar>
      <div className="md:lg:px-24">
        <h1 className="text-4xl pt-12">Solar Panel Tilt Angle Calculator</h1>
        <p className="">
          This tool helps you determine the optimal tilt angle for your solar panels based on your geographic location to maximize solar energy production.
        </p>

        <div className="flex flex-col space-y-4 pt-12">
          <input
            type="number"
            placeholder="Your Latitude (Degrees)"
            onChange={(e) => setLatitude(e.target.value)}
            className="border rounded p-2"
          />
          <button
            onClick={calculateOptimalTiltAngle}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Calculate Tilt Angle
          </button>
          {optimalTiltAngle > 0 && (
            <div className="text-lg">Optimal Tilt Angle: {optimalTiltAngle}°</div>
          )}
        </div>

        {/* Additional content and sections */}
        
      </div>
      <div className="mt-12 md:lg:px-24">
        <h2 className="text-4xl font-bold">Maximizing Solar Efficiency</h2>
        <div className="mt-6">
          <p className="text-lg">
            Solar energy is becoming increasingly popular as a renewable energy source. However, the efficiency of solar panels is greatly influenced by their installation, particularly their tilt angle. Understanding how to optimize this angle can significantly increase energy production.
          </p>
          <h3 className="text-3xl font-semibold mt-6">Why Tilt Angle Matters</h3>
          <p className="text-lg mt-4">
            The tilt angle of solar panels is crucial because it determines how much sunlight hits the panel throughout the day. The optimal angle is dependent on your geographic location and the season. Adjusting the tilt angle ensures that panels receive the maximum possible sunlight, leading to higher energy output.
          </p>
          <h3 className="text-3xl font-semibold mt-6">Seasonal Adjustments</h3>
          <p className="text-lg mt-4">
            In many regions, adjusting the tilt angle of your solar panels seasonally can yield better results. During summer, a lower tilt angle is often more beneficial, while a steeper angle is preferred in winter. This adjustment accounts for the sun's path across the sky during different times of the year.
          </p>
          <h3 className="text-3xl font-semibold mt-6">Professional Installation and Maintenance</h3>
          <p className="text-lg mt-4">
            While tools like the Solar Panel Tilt Angle Calculator are incredibly helpful, professional installation and regular maintenance are key to getting the most out of your solar investment. Experts can provide tailored advice and ensure your system is running at peak efficiency.
          </p>
        </div>
      </div>
      <Footertwo></Footertwo>
      {/* Render your posts here */}
    </div>
  );
};

export default SolarTiltAngleCalculator;
