import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-4 ">
      <div className="flex space-x-4">
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="underline">
          Terms
        </Link>
        <a href="https://explodingideas.beehiiv.com/upgrade" target="_blank" className="underline">
          Upgrade
        </a>
        <Link href="/sponsor" className="underline">
          Sponsor 
        </Link>
        <a href="https://explodingideas.beehiiv.com/login" target="_blank" className="underline md:hidden">
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
