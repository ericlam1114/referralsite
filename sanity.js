import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";


// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uzas62mq";
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-10-21";

export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source);