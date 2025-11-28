# Blog Post SEO & Social Media Preview Fix

## Problem
When sharing blog post links on LinkedIn, Twitter, or Facebook, the preview showed a blank image because:
1. The site is a Single Page Application (SPA) built with React
2. Social media crawlers don't execute JavaScript - they only read the initial HTML
3. Dynamic meta tags set by `react-helmet-async` weren't visible to crawlers

## Solution
We implemented a **build-time static HTML generation** for each blog post:

### How It Works
1. **During Development**: The site works normally as an SPA with client-side routing
2. **During Build**: A post-build script (`scripts/generate-blog-html.js`) creates static HTML files for each blog post
3. **Each Static HTML File**: Contains unique meta tags (title, description, og:image) specific to that blog post
4. **Social Media Crawlers**: Read these static HTML files and display the correct preview image

### Files Modified
- `src/main.tsx` - Added HelmetProvider for dynamic meta tags
- `src/components/BlogPost.tsx` - Added Helmet component with dynamic meta tags
- `package.json` - Added `postbuild` script
- `scripts/generate-blog-html.js` - Custom script to generate static HTML for each blog post

### Build Process
\`\`\`bash
npm run build
# 1. Vite builds the React app → build/
# 2. Post-build script generates static HTML files:
#    - build/blog/how-miro-sales-team-could-uncover-enterprise-revenue-with-ai/index.html
#    - build/blog/how-figma-sales-team-could-close-more-deals-with-ai/index.html
#    - ...
# 3. Sitemap generator creates:
#    - build/sitemap.xml (includes all blog posts)
#    - build/robots.txt
\`\`\`

### Adding New Blog Posts
When you add a new blog post to `src/data/blogPosts.json`:
1. The script automatically generates a static HTML file for it
2. No manual configuration needed
3. Just ensure the `coverImage` field has the correct preview image URL

### Testing Social Previews
After deployment, you can test how links will appear using:
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator

### Example Meta Tags Generated
For the Miro blog post:
\`\`\`html
<title>How Miro's Sales Team Could Uncover Enterprise Revenue with DealoAgent | DealoAgent.ai</title>
<meta property="og:title" content="How Miro's Sales Team Could Uncover Enterprise Revenue with DealoAgent" />
<meta property="og:image" content="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=600&fit=crop" />
<meta property="og:description" content="Miro has conquered the world of whiteboarding, but converting millions of free users to enterprise contracts is a massive challenge..." />
\`\`\`

## Benefits
✅ **Unique preview images** for each blog post  
✅ **SEO-friendly** static HTML for search engines  
✅ **Social media optimized** - LinkedIn, Twitter, Facebook show correct previews  
✅ **Automatic** - works for all existing and future blog posts  
✅ **No runtime overhead** - static files are served directly
