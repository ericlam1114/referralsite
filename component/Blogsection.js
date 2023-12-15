import { useState, useEffect } from 'react';
import { sanityClient } from '../sanity';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const calculatorApps = [
  {
    name: "Solar Loan Calculator",
    link: "/blog/solar-loan-calculator", // Link to your calculator app
    description: "Calculate your solar loan repayments with our easy-to-use Solar Loan Calculator."
  },
  {
    name: "Solar Tilt Angle Calculator",
    link: "/blog/solar-tilt-angle-calculator", // Link to your calculator app
    description: "Calculate the optimal tilt angle for your solar panels with our Solar Panel Tilt Angle Calculator."
  },
];

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

  return (
    <div className="flex flex-col gap-5 mx-auto max-w-3xl lg:max-w-4xl">
      {posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug.current}`} passHref>
          <div className="flex flex-col sm:flex-row border border-gray-200 rounded-lg overflow-hidden items-center transform transition-all hover:shadow-md hover:border-gray-300 cursor-pointer">
            <img className="order-1 hidden md:lg:block sm:order-2 w-full sm:w-32 lg:w-6/12 object-contain" src={urlFor(post.mainImage).url()} alt={post.title} />
            <div className="order-2 sm:order-1 p-5 flex flex-col space-y-2">
              <div className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</div>
              <div className="text-lg font-bold">{post.title}</div>
              <div className="text-gray-700 pb-4">{post.description}</div>
              <button className="mt-auto text-white bg-black px-4 py-2 rounded self-start">Read More</button>
            </div>
          </div>
        </Link>
      ))}
  <div className="flex flex-col gap-5">
        {calculatorApps.map((app, index) => (
          <Link key={index} href={app.link} passHref>
            <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden items-center transform transition-all hover:shadow-md hover:border-gray-300 cursor-pointer">
              <div className="p-5 flex flex-col space-y-2">
                <div className="text-lg font-bold">{app.name}</div>
                <div className="text-gray-700 pb-4">{app.description}</div>
                <button className="mt-auto text-white bg-black px-4 py-2 rounded self-start">Go to Calculator</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
