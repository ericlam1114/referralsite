import { useState, useEffect } from 'react'
import {sanityClient} from '../sanity'
import Navbar from '../component/Navbarblog'
import Bloghero from '../component/Bloghero'
import Blogsection from '../component/Blogsection'
import Footertwo from '../component/Footertwo'
import Newsletterinput from '../component/Newsletterinput'
import Head from 'next/head';

const Blog = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{title,slug,content}`)
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <div>
         <Head>
   
   <title>Exploding Ideas Blog</title>
   <meta name="title" content="Startup Ideas, Sent Weekly"/>
   <meta name="description" content="Join 6,000+ elite entrepreneurs getting curated startup ideas in million dollar niches."/>
   
   
   <meta property="og:type" content="website"/>
   <meta property="og:url" content="https://www.explodingideas.co/"/>
   <meta property="og:title" content="Startup Ideas, Sent Weekly"/>
   <meta property="og:description" content="Join 6,000+ elite entrepreneurs getting curated startup ideas in million dollar niches."/>
   <meta property="og:image" content="https://i.postimg.cc/bNrMHZLh/Exploding-Ideas-copy.png"/>
   
   
   <meta property="twitter:card" content="summary_large_image"/>
   <meta property="twitter:url" content="https://www.explodingideas.co/"/>
   <meta property="twitter:title" content="Startup Ideas, Sent Weekly"/>
   <meta property="twitter:description" content="Join 6,000+ elite entrepreneurs getting curated startup ideas in million dollar niches."/>
   <meta property="twitter:image" content="https://i.postimg.cc/bNrMHZLh/Exploding-Ideas-copy.png"/>
   
   
     
         </Head>
        <Navbar></Navbar>
        <Bloghero></Bloghero>
        <Blogsection></Blogsection>
        <Newsletterinput></Newsletterinput>
        <Footertwo></Footertwo>
      {/* Render your posts here */}
    </div>
  )
}

export default Blog
