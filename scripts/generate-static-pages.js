import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, '../build');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
    console.error('Build index.html not found. Run npm run build first.');
    process.exit(1);
}

const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

const languages = ['en', 'uk', 'pl'];

// Base pages configuration
// Ideally these should be translated. For now using English as fallback/placeholder.
const pages = [
    {
        path: 'pitchdeck',
        title: 'DealoAgent.ai - Pitch Deck',
        description: 'View the DealoAgent.ai pitch deck. The first AI-native CRM that understands your deals.'
    },
    {
        path: 'usecases',
        title: 'Industry Use Cases - DealoAgent.ai',
        description: 'Discover how DealoAgent.ai transforms sales, recruiting, and research workflows across different industries.'
    },
    {
        path: 'usecases/recruiting',
        title: 'AI for Recruiting Agencies - DealoAgent.ai',
        description: 'Automate candidate screening, parsing, and outreach with DealoAgent.ai.'
    },
    {
        path: 'usecases/softwaresales',
        title: 'AI for Software Sales - DealoAgent.ai',
        description: 'Accelerate your sales cycle and win more deals with AI-powered intelligence.'
    },
    {
        path: 'usecases/vcresearch',
        title: 'AI for Venture Capital - DealoAgent.ai',
        description: 'Transform deal flow and due diligence with AI. Automate research for VC firms.'
    },
    {
        path: 'usecases/callcenter',
        title: 'AI for Call Centers & BPOs - DealoAgent.ai',
        description: 'AI-First Contact Center Intelligence. Slash AHT, boost FCR.'
    },
    {
        path: 'usecases/voip',
        title: 'AI for VoIP Wholesale Business - DealoAgent.ai',
        description: 'AI-Native Business Intelligence for VoIP Wholesale.'
    },
    {
        path: 'login',
        title: 'Sign In - DealoAgent.ai',
        description: 'Sign in to your DealoAgent.ai account.'
    },
    {
        path: 'blog',
        title: 'DealoAgent Blog - AI Sales Insights & Case Studies',
        description: 'Explore the latest insights on AI-powered sales intelligence.'
    },
    {
        path: 'partners',
        title: 'Partners - DealoAgent.ai',
        description: 'Join the DealoAgent.ai partner ecosystem. Collaborate with us to bring AI-powered sales intelligence to more teams.'
    },
    {
        path: 'one_pager',
        title: 'One Pager - DealoAgent.ai',
        description: 'DealoAgent.ai at a glance. AI-native CRM for multi-channel B2B sales intelligence.'
    }
];

languages.forEach(lang => {
    const isDefault = lang === 'en';
    const langPrefix = isDefault ? '' : lang;
    const langDir = isDefault ? buildDir : path.join(buildDir, lang);

    // Ensure lang dir exists
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

    pages.forEach(page => {
        const pagePath = path.join(langDir, page.path);

        if (!fs.existsSync(pagePath)) {
            fs.mkdirSync(pagePath, { recursive: true });
        }

        let html = indexHtmlContent;

        // 1. Language Attribute
        html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);

        // 2. Metadata (Should be translated in future)
        const titleSuffix = isDefault ? '' : ` [${lang.toUpperCase()}]`; // Temporary marker
        html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}${titleSuffix}</title>`);
        html = html.replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${page.description}" />`);

        // 3. Canonical and Alternates
        const canonicalPath = isDefault ? `${page.path}/` : `${lang}/${page.path}/`;
        const fullUrl = `https://dealoagent.ai/${canonicalPath}`.replace(/\/+/g, '/').replace('https:/', 'https://'); // cleanup logic

        html = html.replace(/<link rel="canonical"[\s\S]*?\/>/, ''); // remove existing

        let seoTags = `<link rel="canonical" href="${fullUrl}" />\n`;
        languages.forEach(l => {
            const lPrefix = l === 'en' ? '' : `${l}/`;
            const lUrl = `https://dealoagent.ai/${lPrefix}${page.path}/`.replace(/\/+/g, '/').replace('https:/', 'https://');
            seoTags += `    <link rel="alternate" hreflang="${l}" href="${lUrl}" />\n`;
        });

        const xDefaultUrl = `https://dealoagent.ai/${page.path}/`.replace(/\/+/g, '/').replace('https:/', 'https://');
        seoTags += `    <link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`;

        html = html.replace(/<\/head>/, `${seoTags}\n  </head>`);

        // 4. Client-side hydration data (maybe pass initial lang in window object?)
        // <script>window.initialLang = "${lang}";</script>
        // But i18next detector on path should handle it.

        fs.writeFileSync(path.join(pagePath, 'index.html'), html);
        console.log(`✓ Generated: ${langPrefix}/${page.path}/index.html`);

        // Also create a .html file at the parent directory level
        // (e.g. pitchdeck.html alongside pitchdeck/index.html)
        // This prevents GitHub Pages from issuing a 301 redirect when the URL
        // is requested without a trailing slash (e.g. /pitchdeck -> /pitchdeck/)
        // GitHub Pages resolves /pitchdeck to pitchdeck.html directly (200)
        const htmlFileName = page.path.includes('/')
            ? page.path.split('/').pop() + '.html'  // e.g. "recruiting.html"
            : page.path + '.html';                   // e.g. "pitchdeck.html"
        const htmlFileDir = page.path.includes('/')
            ? path.join(langDir, page.path.split('/').slice(0, -1).join('/'))
            : langDir;
        const htmlFilePath = path.join(htmlFileDir, htmlFileName);
        fs.writeFileSync(htmlFilePath, html);
        console.log(`✓ Generated: ${langPrefix}/${page.path}.html (no-redirect)`);
    });
});
