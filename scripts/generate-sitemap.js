const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shriramsteels.com';

const staticPages = [
  {
    url: '/',
    priority: 1.0,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/products',
    priority: 0.9,
    changefreq: 'weekly', 
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/quality',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/resources',
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

const productSlugs = [
  'black-bars',
  'bright-flat-bars', 
  'bright-hex-bars',
  'bright-round-bars',
  'bright-square-bars',
  'alloy-steel'
];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add product pages
  productSlugs.forEach(slug => {
    sitemap += `
  <url>
    <loc>${baseUrl}/products/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`🔗 URLs included: ${staticPages.length + productSlugs.length}`);
  
  // Also log the content for verification
  console.log('\n📄 Generated sitemap content:');
  console.log(sitemap);
}

// Run the generator
generateSitemap();