const fs = require('fs');

let blogSlugs = [];
try {
  blogSlugs = JSON.parse(fs.readFileSync('blogUrls.json', 'utf8'));
} catch (error) {
  console.error('Error reading blog URLs file:', error);
}

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://energycredittransfer.com',
  generateRobotsTxt: true,
  additionalPaths: async () => blogSlugs.map(slug => ({ loc: slug })),
};
