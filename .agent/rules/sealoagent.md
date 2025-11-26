---
trigger: always_on
---

You operating with web site dealoagent.ai Your goal to create SEO friendly site which push to sale product. Feel free to propose any ideas, actions to grow SEO visibility and target to correct users. 

## Blog Post Creation Rules

When creating blog posts, follow these requirements:

### Content Guidelines
1. **Companies may be real** but posts must be **hypothetical scenarios**
   - Example: "Let say manager [real manager name] at [real company] uses DealoAgent for [real use case]"
   - After migrating to DealoAgent, show how the manager would approach the case using AI-powered methods
   - Must reach specific, measurable outcomes

2. **Deep personalization required**
   - Cases must be highly personalized and detailed
   - Dive deep into **what** DealoAgent optimized and **how** it achieved results
   - Include specific metrics, workflows, and transformation details
   - Avoid generic statements - use concrete examples

### Technical Requirements (CRITICAL for SEO/Social Media)

3. **Blog Post Data Structure** (`src/data/blogPosts.json`)
   - Each blog post MUST include:
     - `id`: Unique identifier (kebab-case)
     - `slug`: URL-friendly slug matching the id
     - `title`: Compelling, descriptive title (use company name if applicable)
     - `subtitle`: Detailed subtitle explaining the scenario
     - `author`: "DealoAgent Team"
     - `publishDate`: ISO date format (YYYY-MM-DD)
     - `readTime`: Estimated read time (e.g., "11 min read")
     - `category`: "Case Study" for hypothetical scenarios
     - `featured`: Set to `true` for prominent posts
     - `coverImage`: **REQUIRED** - High-quality image URL (1200x630px recommended)
       - Use Unsplash or similar for professional images
       - Must be absolute URL (https://) for social media previews
       - Each post MUST have a UNIQUE cover image
     - `excerpt`: Compelling 2-3 sentence summary for social previews
     - `tags`: Array of relevant tags (e.g., ["Case Study", "B2B SaaS", "AI", "Company Name"])
     - `content`: Array of content blocks (paragraphs, headings, lists, quotes, metrics, CTAs)

4. **Social Media Preview Requirements**
   - After adding a new post to `blogPosts.json`, the build script automatically generates static HTML
   - Run `npm run build` to generate `/build/blog/[slug]/index.html` with unique meta tags
   - Each blog post will have unique Open Graph and Twitter Card tags
   - LinkedIn, Facebook, and Twitter will show the correct `coverImage` as preview

5. **Build Process**
   - Always run `npm run build` after adding new blog posts
   - Verify generated HTML in `build/blog/[slug]/index.html`
   - Test social previews using LinkedIn Post Inspector before sharing

Site designed to be placed in github public space and using github pages to create accessible version. 

Make sure u run vite for this site local and mention url which to use local to test changes.

DealoAgent.ai is an AI-native sales CRM that turns your existing communication data into a 24/7 sales copilot. It connects to your email, messengers, and call channels, centralizes all conversations, and continuously analyses them to understand who your customers are, what they care about, and how your team sells today. Instead of staring at empty CRM fields, your team gets an always-up-to-date, automatically filled knowledge base about deals, contacts, and interactions.

On top of this foundation, DealoAgent.ai runs deep competitive intelligence. It reads incoming emails, proposals, and attachments from prospects and vendors, extracts pricing, features, and terms, and builds living comparison tables of your competitors — without any manual copy-paste. Your sales team sees where your offer wins or loses in seconds and can adapt messaging instantly instead of digging through old threads or spreadsheets.

For outreach, DealoAgent.ai uses past conversations and outcomes to generate personalized, context-aware messages for each lead or account. It learns what worked before, keeps tone and language consistent with your brand, and can draft full sequences for follow-ups and re-activation campaigns. The result is more relevant communication with less routine work and fewer "cold" messages that feel generic.

Over time, DealoAgent.ai evolves into a full AI sales agent, not just a reporting layer. It helps prioritize leads, suggests next best actions, highlights risky deals based on conversation signals, and can eventually handle parts of the communication loop end-to-end. You keep full control and visibility; the AI does the heavy lifting across analysis, outreach, and coaching so your human team can focus on closing deals and building relationships.
## Features

1. **AI-Powered Competitive Intelligence**
   - Automatically extract pricing & features from competitor emails and proposals.
   - Real-time website monitoring for product changes.
   - AI-generated comparison tables with strengths/weaknesses analysis.
   - Sentiment tracking from competitor interactions.
   - Weekly intelligence briefings.

2. **Unified Communication Intelligence**
   - Centralize email, Microsoft Teams, and messenger conversations.
   - Semantic search across all messages and attachments.
   - Automatic conversation-to-deal matching and categorization.
   - AI-powered relationship health scoring.
   - Insight extraction from PDFs and documents.

3. **Natural Language CRM**
   - Chat interface for all CRM tasks (no complex UI).
   - No manual data entry - AI fills CRM from conversations.
   - Design custom sales processes through conversation.
   - Built-in web search for market intelligence.

4. **Context-Aware Outreach Generator**
   - AI drafts hyper-personalized emails using full history.
   - Learn from best-performing messages to replicate success.
   - Multi-channel sequences (email, messaging).
   - Human approval workflow.

5. **Intelligent Deal Management**
   - Identify at-risk deals from sentiment/engagement signals.
   - Automated deal stage progression.
   - Priority scoring for high-value opportunities.
   - Predictive close date estimates.
   - Proactive coaching on next steps.

6. **Enterprise-Grade Integration & Security**
   - Native integrations (Microsoft 365, Gmail, Zoho).
   - Complete data isolation per account.
   - SOC 2 ready architecture.
   - On-premise deployment options.

7. **Advanced Analytics & Insights**
   - Conversation analytics and sentiment trends.
   - Win/loss analysis with AI-identified factors.
   - Team performance metrics.
   - Custom reports via natural language queries.

## Possible Use Cases & Hypothetical Scenarios

### 1. Multi-Channel Research Reports (Automation Case)
*   **Problem**: Manual research takes 2-3 weeks. Sources are scattered (web, email, docs). Outreach is disconnected.
*   **DealoAgent Solution**:
    *   Define research goal -> AI identifies targets -> AI orchestrates outreach.
    *   AI tracks conversations across all channels.
    *   AI extracts insights from all files/messages.
    *   **Result**: Comprehensive report in 2-3 hours (95% time saved).

### 2. Sales Process Support (Scaling Case)
*   **Problem**: Sales reps limited to 10-20 clients due to memory/context overload. "Cold" generic messages.
*   **DealoAgent Solution**:
    *   AI maintains full context of every client and product.
    *   AI prepares outreach automatically based on specific goals.
    *   AI performs "social engineering" to keep contacts hot.
    *   **Result**: Capacity scales to 1000+ clients per rep.

### 3. Hypothetical Case: Enterprise Sales Transformation (e.g., Figma)
*   **Scenario**: Strategic Account Executive managing 60 large accounts.
*   **Challenge**: Generic outreach due to lack of time; missing competitor signals (e.g., "cost-effective" = Penpot).
*   **DealoAgent Application**:
    *   **Automated Competitive Intel**: Flags vague objections as specific competitor signals and suggests battle cards.
    *   **Smart Campaigns**: Personalizes feature launch emails for 60 unique stakeholders based on past pain points.
    *   **Chat Command Center**: "Summarize deal status" queries replace digging through CRM tabs.

### 4. Hypothetical Case: Competitive Displacement (e.g., Notion)
*   **Scenario**: Enterprise team fighting invisible competitors (Confluence, Coda) in 800+ deals.
*   **Challenge**: Competitors mentioned in 40% of deals but often missed in email volume.
*   **DealoAgent Application**:
    *   **Invisible Competitor Detection**: Scans every email/Slack for competitor mentions and updates "Living Comparison Tables".
    *   **Contextual Battle Cards**: Real-time suggestions (e.g., "7 deals closed after showing SOC 2 compliance").
    *   **Learning from Wins**: AI analyzes past wins to suggest the perfect follow-up time and content for stalled deals.
