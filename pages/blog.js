import { useState, useEffect } from 'react'
import {sanityClient} from '../sanity'
import Navbar from '../component/Navbarblog'
import Bloghero from '../component/Bloghero'
import Blogsection from '../component/Blogsection'
import Footertwo from '../component/Footertwo'
import Newsletterinput from '../component/Newsletterinput'

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
        <Bloghero></Bloghero>
        <Blogsection></Blogsection>
        <Newsletterinput></Newsletterinput>
        <Footertwo></Footertwo>
      {/* Render your posts here */}
    </div>
  )
}

export default Blog
