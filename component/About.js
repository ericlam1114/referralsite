import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-16">
      <h2 className="text-4xl mb-8">We Are Olivia Weld</h2>
      <div className="flex justify-center w-full md:w-6/12 mb-8">
        <Image
          width={500}
          height={500}
          alt="olivia weld photo"
          src="/model.png"
          className="rounded-lg object-cover object-center"
        />
      </div>
      <p className="md:w-6/12 text-lg">
        We are a group of passionate jewelers dedicated to delivering the finest quality permanent jewelry. Our mission is to help people express their unique personality and style through our beautiful, durable, and meaningful jewelry pieces. We believe that jewelry is not just an accessory but a symbol of one's individuality and personal story.
      </p>
    </div>
  );
};

export default About;
