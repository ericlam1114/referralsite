import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import faq from './faq'  // Import your FAQ schema here

// Include FAQ schema in your schema types array
export const schemaTypes = [post, author, category, blockContent, faq]
