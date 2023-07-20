import React, { useState } from "react";
import Image from "next/image";


const Textimage = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="relative px-8 -mt-8 md:pt-0 lg:pt-0">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-24 md:py-32 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative">
          <Image
            width={500}
            height={500}
            alt="permanent jewelry bracelet"
            src="/leftimage.png"
            className="rounded-lg object-cover object-center"
          ></Image>
        </div>
        <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
          <div className="g:py-8 md:text-left">
            <h2 className="text-4xl md:lg:text-4xl">What is Permanent Jewelry?</h2>
            <p className="md:lg:pt-4">
            Permanent jewelry, typically bracelets or necklaces, are designed to be worn indefinitely, creating a unique bond between the wearer and the piece. These pieces often hold significant sentimental value, symbolizing unbreakable connections, personal commitments, or significant life events. Whether it's a representation of self-love or a gift to a loved one, permanent jewelry offers a unique, everlasting expression of love, friendship, and personal identity.
            </p>
            <div className="w-1/2 md:lg:flex md:w-auto pt-8 md:lg:pt-4 ">
        <a
         href="/blog"
          className="px-5  py-3 bg-pink-400 rounded-lg hover:scale-95 duration-300 transition text-white shadow-sm font-medium"
        >
           Learn More
        </a>
      </div>
          </div>
        </div>
        {/* <Popup visible={popupVisible} onClose={togglePopup} /> */}
      </div>
    </div>
  );
};

export default Textimage;