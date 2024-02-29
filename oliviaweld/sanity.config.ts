import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// Make sure the .env variables are loaded
// require('dotenv').config();

export default defineConfig({
  name: 'default',
  title: 'explodingideas-landingblog',

  // use the environment variable directly here
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8s7jl3w9',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
