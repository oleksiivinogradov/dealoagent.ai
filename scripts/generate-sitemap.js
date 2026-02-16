import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://dealoagent.ai';
const languages = ['en', 'uk', 'pl'];

// Read blog posts (Using English as source for list of slugs)
const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.json');
const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf8'));

const buildDir = path.join(__dirname, '../build');
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir, { recursive: true });

// Pages list (paths relative to lang root)
const pages = [
    '', // Home
    'blog',
    'usecases',
    'usecases/recruiting',
    'usecases/softwaresales',
    'usecases/vcresearch',
    'usecases/callcenter',
    'usecases/voip',
    'pitchdeck',
    'partners',
    'privacy-policy',
    'one_pager'
];

const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];

    // Header with xhtml namespace
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

    const addUrl = (relativePath, changefreq = 'weekly', priority = '0.8', lastmod = today) => {
        // cleanup helper: remove duplicate slashes but keep protocol
        const cleanUrl = (base, ...components) => {
            const fullUrl = [base, ...components].join('/').replace(/([^:]\/)\/+/g, '$1');
            return fullUrl.endsWith('/') ? fullUrl : `${fullUrl}/`;
        };

        const enUrl = cleanUrl(BASE_URL, relativePath);

        // Generate alternate links block
        let alternates = '';
        languages.forEach(lang => {
            const lPrefix = lang === 'en' ? '' : lang;
            const lUrl = cleanUrl(BASE_URL, lPrefix, relativePath);
            alternates += `            <xhtml:link rel="alternate" hreflang="${lang}" href="${lUrl}" />\n`;
        });
        alternates += `            <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`;

        // Add entry for EACH language version
        languages.forEach(lang => {
            const lPrefix = lang === 'en' ? '' : lang;
            const lUrl = cleanUrl(BASE_URL, lPrefix, relativePath);

            // Lower priority for non-English pages to avoid them outranking English in general search
            const langPriority = lang === 'en' ? priority : '0.5';

            sitemap += `
    <url>
        <loc>${lUrl}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${langPriority}</priority>
${alternates}
    </url>`;
        });
    };

    // 1. Static Pages
    pages.forEach(page => {
        addUrl(page);
    });

    // 2. Blog Posts
    blogPosts.forEach(post => {
        addUrl(`blog/${post.slug}`, 'weekly', '0.8', post.publishDate || today);
    });

    sitemap += `
</urlset>`;

    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
    console.log('✅ Generated sitemap.xml');
};

const generateRobotsTxt = () => {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
    fs.writeFileSync(path.join(buildDir, 'robots.txt'), robotsTxt);
    console.log('✅ Generated robots.txt');
};

generateSitemap();
generateRobotsTxt();
