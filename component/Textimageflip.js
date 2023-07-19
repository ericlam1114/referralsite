import React, {useState} from "react";
// import { useState } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
import Image from "next/image";
// import Popup from '../components/Popup'

const spreadsheetId = 'https://sheet.best/api/sheets/d72fe0c5-266c-42ae-90d2-a70757956234';


const Textimageflip = () => {
    const [popupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
      setPopupVisible(!popupVisible);
    };
 
  return (
    <div className="relative px-8">
        <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
            <div className="md:w-6/12 flex-shrink-0 relative">
                <Image width={500} height={500} alt="sleeping" src='/bracelet.png' className="rounded-lg object-cover object-center"></Image>
            </div>
            <div className='md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-second'>
                <div className='g:py-8 md:text-left'>
                    <h2 className='text-4xl md:lg:text-4xl'>How Much is Permanent Jewelry?</h2>
                    <p className='pt-4'>The price of permanent jewelry varies widely, influenced by factors such as materials used, the intricacy of design, brand prestige, and artisanal craftsmanship. Prices can range from as low as $50 for simple, minimalist designs crafted from sterling silver to well over $10,000 for pieces made from high-quality gold, platinum, or encrusted with diamonds or other precious gemstones.</p>
                    <div className="w-1/2 hidden md:lg:flex md:w-auto text-right md:lg:pt-4 ">
        <a
         href="/blog"
          className="px-5  py-3 bg-pink-400 rounded-lg hover:scale-95 duration-300 transition text-white shadow-sm font-medium"
        >
           Learn More
        </a>
      </div>
                </div>
            </div>
        </div>
        {/* <Popup visible={popupVisible} onClose={togglePopup} /> */}
    </div>
  );
};

export default Textimageflip;