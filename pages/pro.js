import Head from "next/head";
import Navbar from "../component/Navbar";
import ProHeader from "../component/ProHeader";
import ProValueProp from "../component/ProValueProp";
import Sectionone from "../component/Sectionone";
import Sectiontwo from "../component/Sectiontwo";
import Pricing from "../component/Pricing";
import Benefits from "../component/Benefits";
import Footertwo from "../component/Footertwo";
import Faq from "../component/Faq";
// import Navbarpro from "../component/Navbarpro";

export default function Sponsorship() {
  return (
    <div className="">
      <Head>
        <title>Pro | Exploding Ideas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="bg-gradient-to-r from-yellow-300 to-yellow-50">
  
      <Navbar></Navbar>
      <ProHeader></ProHeader>
</div>
<div className="bg-amber-50">
      <ProValueProp></ProValueProp>
      </div>
<div className="bg-amber-100">
  
      <Sectionone></Sectionone>
</div>
<div className="bg-amber-50">

      <Sectiontwo></Sectiontwo>
</div>
<div className="bg-amber-100">
      <Benefits></Benefits>
</div>
<div className="bg-amber-50">
      <Pricing></Pricing>
      </div>
<div className="bg-zinc-50">
      {/* <Faq></Faq> */}
</div>
<div className="bg-gradient-to-r from-yellow-300 to-yellow-50">
      <Footertwo></Footertwo>
</div>
    </div>
  );
}
