import Head from "next/head";
import Image from "next/image";
import Hero from "../component/Hero";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Textimage from '../component/Textimage'
import Textimageflip from "../component/Textimageflip";
import About from "../component/About";
// import Sectionone from "../component/Sectionone";
// import Sectiontwo from "../component/Sectiontwo";
// import Testimonials from "../component/Testimonials";
// import Newsletter from "../component/Newsletter";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-white">
      <Link href="/">
        {" "}
        <Header></Header>
      </Link>
      <Navbar></Navbar>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-LJ6YRN6FD6" />
      <Hero />
      <Textimage></Textimage>
      <Textimageflip></Textimageflip>
      <About></About>
{/* <Sectionone></Sectionone>
<Sectiontwo></Sectiontwo>
<Testimonials></Testimonials>
<Newsletter></Newsletter> */}
      <Footer/>
    </div>
  );
}
