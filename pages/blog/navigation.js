import { useState, useEffect } from 'react'
import {sanityClient} from '../../sanity'
import Navbar from '../../component/Navbarblog'
import BlogheroNav from '../../component/Blogheronav'

import Blogsectionnavigation from '../../component/Blognavigation'
import Footertwo from '../../component/Footertwo'
import Newsletterinput from '../../component/Newsletterinput'

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
        <Navbar></Navbar>
        <BlogheroNav></BlogheroNav>
        <Blogsectionnavigation></Blogsectionnavigation>
        <Newsletterinput></Newsletterinput>
        <Footertwo></Footertwo>
      {/* Render your posts here */}
    </div>
  )
}

export default Blog
