import { useState, useEffect } from 'react';
import { sanityClient } from '../sanity';
import Link from 'next/link';





const Newsletterinput = () => {
  


  return (
    <div className="max-w-4xl mx-auto pt-24">
    <iframe
      src="https://embeds.beehiiv.com/ca8d336e-c1b8-45ff-a785-6601b20540a9"
      data-test-id="beehiiv-embed"
      width="100%"
      height="320"
      frameBorder="0"
      scrolling="no"
      style={{borderRadius: '5px', border: '2px solid #e5e7eb', margin: '0', backgroundColor: 'transparent'}}
    />
  </div>
  );
};

export default Newsletterinput;


