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

// Internal navigation links for SEO crawlability (injected into every pre-rendered page)
const internalNav = `
    <nav style="display:none; visibility:hidden;" aria-label="Site Navigation">
        <a href="https://dealoagent.ai/">DealoAgent.ai — AI Workflow Hub</a>
        <a href="https://dealoagent.ai/usecases/">AI Automation Use Cases</a>
        <a href="https://dealoagent.ai/usecases/recruiting/">AI Recruiting Automation</a>
        <a href="https://dealoagent.ai/usecases/softwaresales/">AI Sales Automation</a>
        <a href="https://dealoagent.ai/usecases/vcresearch/">AI VC Research Automation</a>
        <a href="https://dealoagent.ai/usecases/callcenter/">AI Call Center Automation</a>
        <a href="https://dealoagent.ai/usecases/voip/">AI VoIP Business Intelligence</a>
        <a href="https://dealoagent.ai/blog/">Blog — AI Sales Insights</a>
        <a href="https://dealoagent.ai/partners/">Partner Program</a>
        <a href="https://dealoagent.ai/pitchdeck/">Pitch Deck</a>
    </nav>
`;

// Base pages configuration
// Ideally these should be translated. For now using English as fallback/placeholder.
const pages = [
    {
        path: '',
        title: 'DealoAgent.ai — AI‑Native Workflow Hub | Automation for Sales, Recruiting, VC Research, Call Centers & VoIP',
        description: 'DealoAgent.ai is an AI‑Native Workflow Hub that automates B2B sales, recruiting, VC due‑diligence, VoIP trading, and call center operations. Centralize emails, calls & messengers — let AI agents handle research, outreach, and deal management 24/7.',
        seoContent: `
            <h1>DealoAgent.ai — AI‑Native Workflow Hub</h1>
            <p>Automate your entire business workflow — from sales prospecting and recruiting to VC research and call center ops. AI agents that work 24/7 so your team can focus on closing.</p>

            <h2>AI-Powered Business Automation Platform</h2>
            <p>DealoAgent.ai is an AI-native sales CRM that turns communication data into a 24/7 sales copilot. Centralize emails, messengers, and calls while AI agents continuously analyze them to build an auto-updating knowledge base.</p>

            <h2>Key Features</h2>
            <h3>Competitive Intelligence</h3>
            <p>Extract pricing and features from emails. Monitor competitor websites. Generate AI comparison tables. Track sentiment across all communications.</p>
            <h3>Unified Communication Hub</h3>
            <p>Centralize Email, Microsoft Teams, and Chat. Semantic search across all channels. Auto-deal matching and relationship scoring. PDF insight extraction.</p>
            <h3>Natural Language CRM</h3>
            <p>Chat interface for all CRM tasks. No manual data entry required. Custom process design via natural language. Built-in web search capabilities.</p>
            <h3>Context-Aware Outreach</h3>
            <p>AI drafts personalized emails using conversation history. Learns from successful outreach patterns. Multi-channel sequences with approval workflows.</p>
            <h3>Intelligent Deal Management</h3>
            <p>Identify at-risk deals automatically. Auto-progression through pipeline stages. Priority scoring and predictive closing. Proactive deal coaching.</p>

            <h2>Use Cases</h2>
            <ul>
                <li><a href="https://dealoagent.ai/usecases/recruiting/">AI Recruiting Automation</a> — Automate candidate sourcing, CV parsing, and outreach. Reduce hiring time by 85%.</li>
                <li><a href="https://dealoagent.ai/usecases/softwaresales/">AI Sales Automation</a> — Accelerate your sales pipeline with competitive intelligence and automated outreach.</li>
                <li><a href="https://dealoagent.ai/usecases/vcresearch/">AI for Venture Capital</a> — Automate deal flow analysis, due diligence, and portfolio monitoring.</li>
                <li><a href="https://dealoagent.ai/usecases/callcenter/">AI Call Center Automation</a> — Slash handle time, boost first call resolution, automate QA.</li>
                <li><a href="https://dealoagent.ai/usecases/voip/">AI for VoIP Wholesale</a> — Automate rate management, traffic analysis, and partner outreach.</li>
            </ul>

            <h2>Integrations & Security</h2>
            <p>Integrate with Microsoft 365, Gmail, and Zoho. SOC 2 ready with on-premise deployment options. Enterprise-grade security for your communication data.</p>

            <h2>Analytics & Reporting</h2>
            <p>Conversation analytics and win/loss analysis. Team performance metrics. Natural language report generation.</p>
        `
    },
    {
        path: 'pitchdeck',
        title: 'Pitch Deck — DealoAgent.ai | AI‑Native Workflow Hub',
        description: 'View the DealoAgent.ai pitch deck. The AI‑Native Workflow Hub that automates sales, recruiting, VC research, and call center operations.'
    },
    {
        path: 'usecases',
        title: 'AI Automation Use Cases — DealoAgent.ai',
        description: 'Discover how DealoAgent.ai automates workflows across sales, recruiting, VC research, call centers, and VoIP trading with intelligent AI agents.',
        seoContent: `
            <h1>AI Automation Use Cases — DealoAgent.ai</h1>
            <p>Discover how DealoAgent.ai automates workflows across sales, recruiting, VC research, call centers, and VoIP trading with intelligent AI agents.</p>
            <ul>
                <li><a href="https://dealoagent.ai/usecases/recruiting/">Recruiting</a> — AI-powered candidate sourcing, CV parsing, and automated outreach for staffing agencies.</li>
                <li><a href="https://dealoagent.ai/usecases/softwaresales/">Software Sales</a> — Competitive intelligence, pipeline acceleration, and deal management for SaaS companies.</li>
                <li><a href="https://dealoagent.ai/usecases/vcresearch/">VC Research</a> — Due diligence automation, deal flow analysis, and portfolio monitoring for venture capital firms.</li>
                <li><a href="https://dealoagent.ai/usecases/callcenter/">Call Center</a> — QA automation, handle time reduction, and first call resolution improvement.</li>
                <li><a href="https://dealoagent.ai/usecases/voip/">VoIP Wholesale</a> — Rate management, traffic analysis, and partner outreach automation for telecom.</li>
            </ul>
        `
    },
    {
        path: 'usecases/recruiting',
        title: 'AI Recruiting Automation — DealoAgent.ai',
        description: 'Automate candidate sourcing, CV parsing, and outreach with AI. Reduce hiring time by 85% with DealoAgent workflow automation.',
        seoContent: `
            <h1>AI Recruiting Automation — DealoAgent.ai</h1>
            <p>Automate candidate sourcing, CV parsing, and outreach with AI. Reduce hiring time by 85% with DealoAgent workflow automation.</p>
            <h2>Before DealoAgent</h2>
            <p>Manual CV processing, scattered candidate data across platforms, hours spent on repetitive outreach, no unified view of the recruiting pipeline.</p>
            <h2>After DealoAgent</h2>
            <p>AI-powered CV parsing and candidate matching, unified communication hub, automated personalized outreach sequences, real-time pipeline analytics, and 85% reduction in time-to-hire.</p>
        `
    },
    {
        path: 'usecases/softwaresales',
        title: 'AI Sales Automation for Software Companies — DealoAgent.ai',
        description: 'Accelerate your sales pipeline with AI-powered competitive intelligence, automated outreach, and deal management workflows.',
        seoContent: `
            <h1>AI Sales Automation for Software Companies — DealoAgent.ai</h1>
            <p>Accelerate your sales pipeline with AI-powered competitive intelligence, automated outreach, and deal management workflows.</p>
            <h2>Before DealoAgent</h2>
            <p>Manual competitive research, generic outreach emails, deals falling through cracks, no visibility into pipeline health.</p>
            <h2>After DealoAgent</h2>
            <p>Automated competitive intelligence with pricing extraction, context-aware personalized emails, proactive deal coaching, predictive pipeline analytics.</p>
        `
    },
    {
        path: 'usecases/vcresearch',
        title: 'AI for Venture Capital Due Diligence — DealoAgent.ai',
        description: 'Automate deal flow analysis, due diligence research, and portfolio monitoring with AI agents built for VC firms.',
        seoContent: `
            <h1>AI for Venture Capital Due Diligence — DealoAgent.ai</h1>
            <p>Automate deal flow analysis, due diligence research, and portfolio monitoring with AI agents built for VC firms.</p>
            <h2>Before DealoAgent</h2>
            <p>Manual deal flow tracking, weeks-long due diligence cycles, scattered portfolio data, missed investment opportunities.</p>
            <h2>After DealoAgent</h2>
            <p>AI-powered deal flow analysis, automated due diligence research, real-time portfolio monitoring, network intelligence, and faster investment decisions.</p>
        `
    },
    {
        path: 'usecases/callcenter',
        title: 'AI Call Center Automation — DealoAgent.ai',
        description: 'AI‑first contact center intelligence. Slash average handle time, boost first call resolution, and automate call center workflows.',
        seoContent: `
            <h1>AI Call Center Automation — DealoAgent.ai</h1>
            <p>AI-first contact center intelligence. Slash average handle time, boost first call resolution, and automate call center workflows.</p>
            <h2>Before DealoAgent</h2>
            <p>Manual quality assurance sampling, inconsistent agent performance, high average handle times, low first call resolution rates.</p>
            <h2>After DealoAgent</h2>
            <p>100% call monitoring with AI-powered QA, real-time agent coaching, reduced handle times, improved first call resolution, and comprehensive analytics.</p>
        `
    },
    {
        path: 'usecases/voip',
        title: 'AI for VoIP Wholesale & Telecom Trading — DealoAgent.ai',
        description: 'AI‑native business intelligence for VoIP wholesale. Automate rate management, traffic analysis, and partner outreach.',
        seoContent: `
            <h1>AI for VoIP Wholesale & Telecom Trading — DealoAgent.ai</h1>
            <p>AI-native business intelligence for VoIP wholesale. Automate rate management, traffic analysis, and partner outreach.</p>
            <h2>Before DealoAgent</h2>
            <p>Manual rate sheet processing, margin leakage from outdated pricing, scattered partner communications, missed trading opportunities.</p>
            <h2>After DealoAgent</h2>
            <p>Automated rate management with AI extraction, real-time margin monitoring, unified partner communication hub, proactive trading opportunity alerts.</p>
        `
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
        title: 'DealoAgent Partner Program — AI Workflow Hub Partnership',
        description: 'Join the DealoAgent.ai partner ecosystem. Resell, refer, or integrate the AI‑Native Workflow Hub and earn industry-leading commissions.',
        seoContent: `
            <h1>DealoAgent Partner Program</h1>
            <p>Join the DealoAgent.ai partner ecosystem. Resell, refer, or integrate the AI‑Native Workflow Hub and earn industry-leading commissions.</p>
            <h2>Partnership Options</h2>
            <p>Referral partners, resellers, and technology integration partners. Earn commissions on every deal. Get access to partner resources, training, and dedicated support.</p>
        `
    },
    {
        path: 'one_pager',
        title: 'One Pager — DealoAgent.ai | AI‑Native Workflow Hub',
        description: 'DealoAgent.ai at a glance. AI‑Native Workflow Hub for automating sales, recruiting, VC research, and call center workflows.'
    }
];

languages.forEach(lang => {
    const isDefault = lang === 'en';
    const langPrefix = isDefault ? '' : lang;
    const langDir = isDefault ? buildDir : path.join(buildDir, lang);

    // Ensure lang dir exists
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

    pages.forEach(page => {
        const isHomepage = page.path === '';
        const pagePath = isHomepage ? langDir : path.join(langDir, page.path);

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

        // 5. Inject SEO content and internal navigation into root div
        const seoHtml = page.seoContent || `<h1>${page.title}</h1><p>${page.description}</p>`;
        const preRenderedContent = `
            <div style="display:none; visibility:hidden;" data-seo-prerender="true">
                ${seoHtml}
            </div>
            ${internalNav}
        `;
        html = html.replace(
            /<div id="root"><\/div>/,
            `<div id="root">${preRenderedContent}</div>`
        );

        fs.writeFileSync(path.join(pagePath, 'index.html'), html);
        console.log(`✓ Generated: ${langPrefix}/${page.path}/index.html`);

        // Also create a .html file at the parent directory level
        // (e.g. pitchdeck.html alongside pitchdeck/index.html)
        // This prevents GitHub Pages from issuing a 301 redirect when the URL
        // is requested without a trailing slash (e.g. /pitchdeck -> /pitchdeck/)
        // GitHub Pages resolves /pitchdeck to pitchdeck.html directly (200)
        // Skip for homepage (empty path) — already written as index.html
        if (!isHomepage) {
            const htmlFileName = page.path.includes('/')
                ? page.path.split('/').pop() + '.html'  // e.g. "recruiting.html"
                : page.path + '.html';                   // e.g. "pitchdeck.html"
            const htmlFileDir = page.path.includes('/')
                ? path.join(langDir, page.path.split('/').slice(0, -1).join('/'))
                : langDir;
            const htmlFilePath = path.join(htmlFileDir, htmlFileName);
            fs.writeFileSync(htmlFilePath, html);
            console.log(`✓ Generated: ${langPrefix}/${page.path}.html (no-redirect)`);
        }
    });
});

