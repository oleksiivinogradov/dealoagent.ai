---
trigger: always_on
---

You operating with web site dealoagent.ai Your goal to create SEO friendly site which push to sale product. Feel free to propose any ideas, actions to grow SEO visibility and target to correct users. 

## Blog Post Creation Rules

When creating blog posts, follow these requirements:


### Content Guidelines
CRITICAL - do not repeat companies and persons in posts.

1. **Companies may be real** but posts must be **hypothetical scenarios**
   - Example: "Let say manager [real manager name] at [real company] uses DealoAgent for [real use case]"
   - After migrating to DealoAgent, show how the manager would approach the case using AI-powered methods
   - Must reach specific, measurable outcomes

2. **Deep personalization required**
   - Cases must be highly personalized and detailed
   - Dive deep into **what** DealoAgent optimized and **how** it achieved results
   - Include specific metrics, workflows, and transformation details
   - Avoid generic statements - use concrete examples

### Use Case Specific Rules (Recruiting & VC Research)

3. **Company & Role Alignment**
   - **Real Companies**: When fulfilling a request for a use case (e.g., Recruiting or VC Research), you MUST select a **real company** from that specific industry.
     - *Recruiting*: Talent agencies, staffing firms.
     - *VC Research*: Venture capital firms, investment funds.
   - **Role Selection**: You MUST select one specific role defined in the corresponding use case page (`pages/RecruitingUseCase.tsx` or `pages/VCResearchUseCase.tsx`).
     - *Recruiting Roles*: Recruiter, Sales/BizDev, or CEO/Owner.
     - *VC Roles*: Investment Analyst or General Partner/CEO.
     - *Persona Match**: The blog post's protagonist MUST strictly match the selected role.

4. **Scenario Adherence (Before/After)**
   - You MUST structure the narrative using the specific **Before vs. After** points defined for the selected role in the use case source file.
   - **Before**: Explicitly describe the pain points listed in the "Before DealoAgent" section (e.g., "Manual CV Processing", "Operational Black Box").
   - **After**: transformation must match the "After DealoAgent" points (e.g., "Automated Parsing", "Conversational Intelligence").
   - Use these exact points to construct the problem/solution arc of the story.


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
       - **MANDATORY**: You MUST generate a NEW, UNIQUE image for every blog post using your image generation tool.
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

After post done and confirmed, made git push and check github actions to be done success. When it done and u will have production post url, propose me linkedin post follow this:
 im sending words to my followers 15k on linkedin. It must be less marketing, more warm like sharing someting interesting
No bullet points or formatted lists
Conversational tone throughout
Frames it as genuine curiosity, not a pitch
Ends with a real question to drive discussion
Links feel natural, not forced
Reads like you're sharing an interesting puzzle you explored

Add 3 random tags from list: #innovation #management #digitalmarketing #technology #creativity #futurism #startups #marketing #socialmedia #socialnetworking #motivation 
#personaldevelopment #jobinterviews #sustainability #personalbranding #education #productivity #travel #sales #socialentrepreneurship 

When post text confirmed, u must open linkedin in web browser, and using credential login there as alex@callsfreecalls.com and pass alex1vinogradov2 initiate post and fill confirmed text there. 

Founder email is alex@dealoagent.ai 

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

## LinkedIn Post Creation (After Blog Posts)

After creating any blog post, **ALWAYS** propose a LinkedIn post text to share it.

### LinkedIn Post Guidelines

**Tone & Style:**
- Write for 15k+ professional followers
- Conversational and authentic - NOT marketing-heavy
- Personal tone: "I was thinking...", "This got me curious...", "I wrote up..."
- Share as if discussing an interesting puzzle or insight with peers
- No sales pitch - frame as genuine curiosity or thought experiment

**Structure:**
- Start with a personal observation or question
- Tell a brief story that illustrates the problem
- Naturally introduce the blog post as "I wrote up the whole thought experiment..."
- End with a genuine question to drive comments and discussion
- Keep paragraphs short (2-3 lines max)

**What to AVOID:**
- ❌ Bullet points or formatted lists
- ❌ Emojis (arrows, checkmarks, etc.)
- ❌ "Read here 👇" or forced CTAs
- ❌ Marketing language ("transform your sales", "unlock potential")
- ❌ Multiple hashtags (max 3-4, natural placement)

**Example Opening Styles:**
- "I was thinking about [Company]'s sales team the other day..."
- "Ever notice how [problem] is actually harder than it looks?"
- "Ran into an interesting challenge recently..."
- "There's this paradox in [industry] that doesn't get talked about enough..."

**Link Placement:**
- Include naturally in the flow, not as a separate line
- Example: "I wrote up the whole thought experiment here: [link]"
- Add context: "(It's hypothetical, but the problem is very real for...)"

**Engagement Hook:**
- **Financial Incentive (MANDATORY)**: You MUST include an offer to drive comments. To avoid sounding automated, randomly select one of these variations:
  - "Comment on this LinkedIn post and I will add $2 to your DealoAgent balance."
  - "Drop a comment below, and I'll credit $2 to your DealoAgent account to try it out."
  - "If you join the discussion in the comments, I'll add a $2 credit to your balance."
  - "I'm adding $2 to the DealoAgent balance of anyone who shares their take below."
  - "Leave your thoughts in the comments — I'm giving a $2 credit to everyone who chimes in."
- Always end with a real question that invites discussion
- Examples:
  - "Curious if others have run into this. How do you find the actual buyers when you have thousands of free users?"
  - "What's your experience with this?"
  - "Am I overthinking this, or is this a real gap?"