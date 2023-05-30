import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="grid grid-cols-1  md:lg:grid-cols-5 gap-4 px-4 md:px-24 items-start pb-4 md:lg:pb-0 lg:pt-14">
      <div className="flex justify-start md:justify-center -mb-36 md:lg:mb-0">
        {/* Assuming this div contains the logo */}<Link href="/">
        <img src="/explodingideaslogo.png" alt="Logo" className="-mt-16 md:-mt-24 mb-0 md:-mb-16 lg:mb-0 lg:-mt-16 scale-50 lg:scale-75"/></Link>
      </div>
      <div className="flex flex-col space-y-2 items-start md:items-center">
        {/* <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="underline">
          Terms of Use
        </Link> */}
      </div>
      <div className="flex flex-col space-y-2 items-start md:items-center">
        {/* <Link href="/sponsor" className="underline">
          Twitter
        </Link> */}
      
      </div>
      <div className="flex flex-col space-y-2 items-start md:items-center">
        <div className="font-bold text-xl">About Us</div>
        <Link href="/privacy" className="text-sm">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-sm">
          Terms of Use
        </Link>
      </div>
      <div className="flex flex-col space-y-2 items-start md:items-center">
        <div className="font-bold text-xl">Useful Links</div>
        <div className="text-sm">
          ideas@explodingideas.co
        </div>
        <Link href="/sponsor" className="text-sm">
          Sponsor Newsletter
        </Link>
        <Link href="/pro" className="text-sm">
          Upgrade to Pro
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
