import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
// import * as fbq from "../lib/fpixel";
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  
  return (
    <>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  },
}}>

      {/* Global Site Code Pixel - Facebook Pixel */}

      <Component {...pageProps} />
</motion.div>
    </>
  );
}

export default MyApp;
