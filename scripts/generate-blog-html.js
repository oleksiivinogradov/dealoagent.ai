import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read blog posts
const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.json');
const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf8'));

// Read the base index.html template
const buildDir = path.join(__dirname, '../build');
const templatePath = path.join(buildDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');

// Create blog directory
const blogDir = path.join(buildDir, 'blog');
if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
}

// Generate HTML for each blog post
blogPosts.forEach(post => {
    const postDir = path.join(blogDir, post.slug);
    if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir, { recursive: true });
    }

    // Replace meta tags in template
    let html = template;

    // Update title
    html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${post.title} | DealoAgent.ai</title>`
    );

    // Update description
    html = html.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${post.excerpt}" />`
    );

    // Update OG tags
    html = html.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${post.title}" />`
    );

    html = html.replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${post.excerpt}" />`
    );

    const imageUrl = post.coverImage.startsWith('/')
        ? `https://dealoagent.ai${post.coverImage}`
        : post.coverImage;

    html = html.replace(
        /<meta property="og:image" content=".*?" \/>/,
        `<meta property="og:image" content="${imageUrl}" />`
    );

    html = html.replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="https://dealoagent.ai/blog/${post.slug}" />`
    );

    html = html.replace(
        /<meta property="og:type" content=".*?" \/>/,
        `<meta property="og:type" content="article" />`
    );

    // Update Twitter tags
    html = html.replace(
        /<meta property="twitter:title" content=".*?" \/>/,
        `<meta property="twitter:title" content="${post.title}" />`
    );

    html = html.replace(
        /<meta property="twitter:description" content=".*?" \/>/,
        `<meta property="twitter:description" content="${post.excerpt}" />`
    );

    html = html.replace(
        /<meta property="twitter:image" content=".*?" \/>/,
        `<meta property="twitter:image" content="${imageUrl}" />`
    );

    html = html.replace(
        /<meta property="twitter:url" content=".*?" \/>/,
        `<meta property="twitter:url" content="https://dealoagent.ai/blog/${post.slug}" />`
    );

    // Add canonical link
    const canonicalUrl = `https://dealoagent.ai/blog/${post.slug}`;
    if (html.includes('<link rel="canonical"')) {
        html = html.replace(
            /<link rel="canonical" href=".*?" \/>/,
            `<link rel="canonical" href="${canonicalUrl}" />`
        );
    } else {
        html = html.replace(
            /<\/head>/,
            `    <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
        );
    }

    // Generate HTML content for SEO
    const renderContent = (content) => {
        return content.map(block => {
            switch (block.type) {
                case 'paragraph':
                    return `<p>${block.text}</p>`;
                case 'heading':
                    return `<h${block.level}>${block.text}</h${block.level}>`;
                case 'list':
                    return `<ul>${block.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
                case 'quote':
                    return `<blockquote>${block.text}<footer>- ${block.author}</footer></blockquote>`;
                case 'metrics':
                    return `<div class="metrics">${block.data.map(m => `<div><h3>${m.label}</h3><p>${m.value}</p><p>${m.description}</p></div>`).join('')}</div>`;
                case 'cta':
                    return `<div class="cta"><h3>${block.title}</h3><p>${block.description}</p><a href="${block.primaryButton.url}">${block.primaryButton.text}</a></div>`;
                default:
                    return '';
            }
        }).join('\n');
    };

    const postContentHtml = `
        <article>
            <h1>${post.title}</h1>
            <h2>${post.subtitle}</h2>
            <div class="metadata">
                <p>By ${post.author} | ${post.publishDate} | ${post.readTime}</p>
                <img src="${imageUrl}" alt="${post.title}" />
            </div>
            <div class="content">
                ${renderContent(post.content)}
            </div>
        </article>
    `;

    // Inject content into proper container for SEO (replacing empty root)
    html = html.replace(
        /<div id="root"><\/div>/,
        `<div id="root">${postContentHtml}</div>`
    );

    // Write the HTML file
    fs.writeFileSync(path.join(postDir, 'index.html'), html);
    console.log(`✓ Generated: /blog/${post.slug}/index.html`);
});

console.log(`\\n✅ Successfully generated ${blogPosts.length} blog post HTML files`);
