import React from "react";
import { useState } from "react";

import Header from "../../component/Header";
import Head from "next/head";
import Footer from "../../component/Footertwo";
import { GetStaticProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import Navbarblog from '../../component/Navbarblog'
import Image from 'next/image';
import BlockImage from '../../component/Blockimage';




interface PostType {
  post: Post;
}

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

const Post = ({ post }: PostType) => {
  // console.log(post);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        setSubmitted(false);
      });
  };

  return (
    <div>
      
      <Head>
       
       <title>Exploding Ideas Blog</title>
       <meta name="title" content={post.title}/>
       <meta name="description" content={post.description}/>
       
       
       <meta property="og:type" content="website"/>
       <meta property="og:url" content="https://www.explodingideas.co/"/>
       <meta property="og:title" content={post.title}/>
       <meta property="og:description" content={post.description}/>
       <meta property="og:image" content="https://i.postimg.cc/bNrMHZLh/Exploding-Ideas-copy.png"/>
       
       
       <meta property="twitter:card" content="summary_large_image"/>
       <meta property="twitter:url" content="https://www.explodingideas.co/"/>
       <meta property="twitter:title" content={post.title}/>
       <meta property="twitter:description" content="Join 6,000+ elite entrepreneurs getting curated startup ideas in million dollar niches."/>
       <meta property="twitter:image" content="https://i.postimg.cc/bNrMHZLh/Exploding-Ideas-copy.png"/>
       
              <link rel="icon" href="/favicon.ico" />
             

      </Head>
      <Header />

      {/*main image*/}
      {/* <img
        className="w-full h-96 object-cover"
        src={urlFor(post.mainImage).url()!}
        alt="coverImage"
      /> */}

      {/* {Article} */}
      <Navbarblog></Navbarblog>
      <div className="max-w-3xl mx-auto flex center mb-10 pt-0 md:lg:pt-24">
        <article className="w-full mx-auto p-5 ">
          <h1 className="font-titleFont font-medium text-4xl text-yellow-500 border-b-[1px] border-b-black mt-10 mb-3">
            {post.title}
          </h1>

          <h2 className="font-bodyFont text-[18px] text-gray-500 mb-2 border- border-blue-500 rounded-lg p-2">
            {/* Author's Note: "{post.description}" */}
            <div className="flex items-center gap-2 pt-4 md:lg:pt-2 justify-end">
              <img
                className="rounded-full w-12 h-12 object-cover bg-red-400"
                src={urlFor(post.author.image).url()}
                alt="authorImg"
              />
              <p className="font-bodyFont text-base">
                by{" "}
                <span className="font-bold text-secondaryColor">
                  <a href="https://www.twitter.com/ericlamideas" target="_blank">{post.author.name}</a>
                </span>{" "}
                - Published {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </h2>

          <div className="mt-10 ">
          <PortableText
    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hox55ajl"}
    content={post.body}
    serializers={{
      types: {
        Image: BlockImage, 
      },
      
     
      
      
      h1: (props: any) => <h1 className=" my-h1-class " {...props} />,
      h2: (props: any) => <h2 className="my-h2-class" {...props} />,
      h3: (props: any) => <h3 className="my-h3-class" {...props} />,
      li: ({ children }: any) => (
        <li className="my-li-class">{children}</li>
      ),
      link: ({ href, children }: any) => (
        <a href={href} className="my-link-class" target="_blank">
          {children}
        </a>
      ),
      normal: ({ children }: any) => (
        <p className="my-p-class mt-4 ">{children}</p> // add margin-top
      ),
    }}
  />
          </div>
        </article>

        <hr className="max-w-lg my-5 mx-auto border[1px] border-secondaryColor" />
       
      </div>
        
      <div className="max-w-4xl mx-auto">
      <iframe
        src="https://embeds.beehiiv.com/ca8d336e-c1b8-45ff-a785-6601b20540a9"
        data-test-id="beehiiv-embed"
        width="100%"
        height="320"
        frameBorder="0"
        scrolling="no"
        style={{borderRadius: '5px', border: '2px solid #e5e7eb', margin: '0', backgroundColor: 'transparent'}}
      />
    </div>
      <Footer />
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    author ->{
        name,
        image,
    },
    "comments":*[_type == "comment" && post._ref == ^._id && approved == true],
    description,
    mainImage,
    slug,
    body[]{
      ...,
      asset->,
      alt
    }
}`;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
