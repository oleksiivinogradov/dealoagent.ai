import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, '../build');
const indexHtmlPath = path.join(buildDir, 'index.html');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

const pages = [
    {
        path: 'pitchdeck',
        title: 'DealoAgent.ai - Pitch Deck',
        description: 'View the DealoAgent.ai pitch deck. The first AI-native CRM that understands your deals.'
    },
    {
        path: 'usecases',
        title: 'Industry Use Cases - DealoAgent.ai',
        description: 'Discover how DealoAgent.ai transforms sales, recruiting, and research workflows across different industries with AI-powered intelligence.'
    },
    {
        path: 'usecases/recruiting',
        title: 'AI for Recruiting Agencies - DealoAgent.ai',
        description: 'Automate candidate screening, parsing, and outreach with DealoAgent.ai. See how recruiters save 70% of admin time.'
    },
    {
        path: 'usecases/softwaresales',
        title: 'AI for Software Sales - DealoAgent.ai',
        description: 'Accelerate your sales cycle and win more deals with AI-powered intelligence for managers and executives.'
    },
    {
        path: 'usecases/vcresearch',
        title: 'AI for Venture Capital - DealoAgent.ai',
        description: 'Transform deal flow and due diligence with AI. Automate research, scoring, and market analysis for VC firms.'
    },
    {
        path: 'usecases/callcenter',
        title: 'AI for Call Centers & BPOs - DealoAgent.ai',
        description: 'AI-First Contact Center Intelligence. Slash AHT, boost FCR, and optimize Occupancy with 100% QA coverage.'
    },
    {
        path: 'usecases/voip',
        title: 'AI for VoIP Wholesale Business - DealoAgent.ai',
        description: 'AI-Native Business Intelligence for VoIP Wholesale. Optimize routing, monitor ASR/ACD, and prevent margin leakage.'
    },
    {
        path: 'login',
        title: 'Sign In - DealoAgent.ai',
        description: 'Sign in to your DealoAgent.ai account.'
    },
    {
        path: 'blog',
        title: 'DealoAgent Blog - AI Sales Insights & Case Studies',
        description: 'Explore the latest insights on AI-powered sales intelligence, real customer success stories of recruiting agencies, venture capitals and software sales.'
    }
];

pages.forEach(page => {
    const dirPath = path.join(buildDir, page.path);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    let html = indexHtmlContent;

    // Replace Title
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`);

    // Replace Description (multi-line support)
    html = html.replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${page.description}" />`);

    // Update Canonical
    const canonicalUrl = `https://dealoagent.ai/${page.path}/`;
    html = html.replace(/<link rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

    // Update OG Tags
    html = html.replace(/<meta property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${page.title}" />`);
    html = html.replace(/<meta property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${page.description}" />`);
    html = html.replace(/<meta property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

    // Update Twitter Tags
    html = html.replace(/<meta property="twitter:title"[\s\S]*?\/>/, `<meta property="twitter:title" content="${page.title}" />`);
    html = html.replace(/<meta property="twitter:description"[\s\S]*?\/>/, `<meta property="twitter:description" content="${page.description}" />`);
    html = html.replace(/<meta property="twitter:url"[\s\S]*?\/>/, `<meta property="twitter:url" content="${canonicalUrl}" />`);


    fs.writeFileSync(path.join(dirPath, 'index.html'), html);
    console.log(`✓ Generated: ${page.path}/index.html`);
});
