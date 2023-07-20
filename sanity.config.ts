// Your existing file

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schema from './oliviaweld/sanity/schema'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uzas62mq";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-10-21";

// check for undefined
if (!projectId || !dataset || !apiVersion) {
  throw new Error("Required environment variables are not defined. ");
}

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
