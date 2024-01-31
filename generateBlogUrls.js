const fs = require('fs');
const client = require('./sanity');

async function fetchBlogPostSlugs() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  const urls = posts.map(post => `/blog/${post.slug}`);
  fs.writeFileSync('blogUrls.json', JSON.stringify(urls), 'utf8');
}

fetchBlogPostSlugs().then(() => console.log('Blog URLs fetched and saved.'));
