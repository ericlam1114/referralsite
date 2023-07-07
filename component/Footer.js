import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-4 ">
      <div className="flex space-x-4">
        <Link href="/privacy" className="underline">
          Policy
        </Link><div>|</div>
        {/* <Link href="/terms" className="underline">
          Terms
        </Link> */}
        {/* <div>|</div> */}
        <a href="https://explodingideas.beehiiv.com/upgrade" target="_blank" className="underline">
          Upgrade
        </a><div>|</div>
        <Link href="/sponsor" className="underline">
          Sponsor 
        </Link><div className="md:hidden">|</div>
        <a href="https://pro.explodingideas.co/login" className="underline md:hidden">
          Login 
        </a>
      </div>
      {/* <div className="text-sm pt-2">
      Copyright © 2023 Explodingideas.co
      </div> */}
      
    </footer>
  );
};

export default Footer;
