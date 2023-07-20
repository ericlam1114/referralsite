import { useState, useEffect } from 'react';
import { sanityClient } from '../sanity';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0..9] {
        title,
        slug,
        description,
        mainImage,
        publishedAt
      }`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (!posts || posts.length === 0) return null;

  const recentPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl mb-6 ">Recently Added</h2>
        <Link href="/blog" passHref>
          <p className=" text-xl mb-6 px-4 py-2 bg-black text-white rounded-md hover:shadow-md cursor-pointer">
            All Articles
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {recentPost && recentPost.slug && (
          <Link href={`/blog/${recentPost.slug.current}`} passHref>
            <div className="border border-gray-200 rounded-lg overflow-hidden transform transition-all hover:shadow-md hover:border-amber-300 cursor-pointer">
              <div className="w-full flex justify-center items-center overflow-hidden">
                <img className="object-contain" src={urlFor(recentPost.mainImage).url()} alt={recentPost.title} />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{recentPost.title}</h2>
                <p className="text-gray-700 pb-4 mt-2">{recentPost.description}</p>
                <button className="mt-auto text-white bg-black px-4 py-2 rounded self-start ">Read More</button>
                <p className="text-sm text-gray-500 pt-4 mt-2">{new Date(recentPost.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 gap-6">
          {otherPosts.map((post, index) => (
            post.slug && (
              <Link key={index} href={`/blog/${post.slug.current}`} passHref>
                <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden transform transition-all hover:shadow-md hover:border-pink-300 cursor-pointer">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-gray-700 pb-4 mt-2">{post.description}</p>
                    <button className="mt-auto  text-white bg-black px-4 py-2 rounded self-start ">Read More</button>
                    <p className="text-sm text-gray-500 pt-4">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            )
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
