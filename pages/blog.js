import { useState, useEffect } from "react";
import { sanityClient } from "../sanity";
import Navbar from "../component/Navbar";
import Bloghero from "../component/Bloghero";
import Blogsection from "../component/Blogsection";
import Footertwo from "../component/Footer";
import Newsletterinput from "../component/Newsletterinput";
import Head from "next/head";

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{title,slug,content}`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
       <Head>
   
   <title>Commercial Energy Credit Transfer Marketplace - Inflation Reduction Act</title>
   <meta name="title" content="Energy Credit Transfer Marketplace"/>
   <meta name="description" content="Join our private marketplace to buy or sell your commercial energy tax credits."/>
   
   
   <meta property="og:type" content="website"/>
   <meta property="og:url" content="https://www.energycredittransfer.com/"/>
   <meta property="og:title" content="Energy Credit Transfer Marketplace"/>
   <meta property="og:description" content="Join our private marketplace to buy or sell your commercial energy tax credits."/>
   {/* <meta property="og:image" content="https://i.postimg.cc/bNrMHZLh/Exploding-Ideas-copy.png"/> */}
   
   
   <meta property="twitter:card" content="summary_large_image"/>
   <meta property="twitter:url" content="https://www.energycredittransfer.com/"/>
   <meta property="twitter:title" content="Energy Credit Transfer Marketplace"/>
   <meta property="twitter:description" content="Join our private marketplace to buy or sell your commercial energy tax credits."/>
   {/* <meta property="twitter:image" content="https://i.postimg.cc/bNrMHZLh/Exploding-Ideas-copy.png"/> */}
   
   
     
         </Head>
      <Navbar></Navbar>
      <Bloghero></Bloghero>
      <Blogsection></Blogsection>
      {/* <Newsletterinput></Newsletterinput> */}
      <Footertwo></Footertwo>
      {/* Render your posts here */}
    </div>
  );
};

export default Blog;
