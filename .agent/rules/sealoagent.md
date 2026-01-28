---
trigger: always_on
---

You operating with web site dealoagent.ai Your goal to create SEO friendly site which push to sale product. Feel free to propose any ideas, actions to grow SEO visibility and target to correct users. 

Use multi_replace_file tool if replace_file_content tool doesn't work

## Blog Post Creation Rules

### Content Guidelines
CRITICAL - do not repeat companies and persons in posts. allways call grep -i "title" src/data/blogPosts.json and check if company used was not present

1. **Companies and Persons MUST be real**
   - **Companies**: Select a real company from the specific industry. check in past blog posts if company was not mentioned in past!
   - **Persons**: The protagonist MUST be a **real person** currently holding the relevant position at that company.
     - **MANDATORY**: You MUST verify their existence and role on **LinkedIn** before writing the post. If you cannot find them on LinkedIn, choose a different person/company.
     - Use their **full name** and **exact title**.
   - **Scenario**: The scenario remains **hypothetical** (e.g., "How Arjay Angodung could use DealoAgent...").
   - Must reach specific, measurable outcomes.

2. **Deep personalization required**
   - Cases must be highly personalized and detailed.
   - Dive deep into **what** DealoAgent optimized and **how** it achieved results.
   - Include specific metrics, workflows, and transformation details.
   - Avoid generic statements - use concrete examples.

### Use Case Specific Rules (Recruiting & VC Research)

3. **Company & Role Alignment**
   - **Real Companies**:
     - *Recruiting*: Talent agencies, staffing firms.
     - *VC Research*: Venture capital firms, investment funds.
   - **Role Selection**: Select one role from `pages/RecruitingUseCase.tsx` or `pages/VCResearchUseCase.tsx`.
     - *Recruiting*: Recruiter, Sales/BizDev, CEO/Owner.
     - *VC*: Investment Analyst, General Partner/CEO.
     - *Persona Match**: Protagonist MUST strictly match the selected role.

4. **Scenario Adherence (Before/After)**
   - Structure narrative using specific **Before vs. After** points from the use case source file.
   - **Before**: Explicitly describe pain points from "Before DealoAgent" (e.g., "Manual CV Processing").
   - **After**: Transformation must match "After DealoAgent" points.
   - Use these exact points to construct the problem/solution arc.

### Technical Requirements

5. **Blog Post Data Structure** (`src/data/blogPosts.json`, `src/data/blogPosts_uk.json`, `src/data/blogPosts_pl.json`)
   - **MANDATORY**: You MUST create entries in ALL three files:
     - `src/data/blogPosts.json` (English)
     - `src/data/blogPosts_uk.json` (Ukrainian translation)
     - `src/data/blogPosts_pl.json` (Polish translation)
   - Entries MUST include:
     - `id`: Unique kebab-case identifier.
     - `slug`: Matches id.
     - `title`: Compelling, descriptive (include company name).
     - `subtitle`: Detailed scenario explanation.
     - `author`: "DealoAgent Team".
     - `publishDate`: YYYY-MM-DD.
     - `readTime`: e.g., "11 min read".
     - `category`: "Case Study".
     - `featured`: `true`.
     - `coverImage`: **REQUIRED** High-quality, UNIQUE absolute URL (https://).
       - **MANDATORY**: You MUST generate a NEW, UNIQUE image for every post using your image generation tool.
     - `excerpt`: 2-3 sentence summary.
     - `tags`: Relevant tags array.
     - `content`: Array of content blocks.

make sure blog post added for rest languages supported.  
6. **Build & Preview**
   - Run `npm run build` after adding posts.
   - Verify generated HTML in `build/blog/[slug]/index.html`.
   - Ensure `coverImage` shows correctly in social previews.

7. **Deployment & Workflow**
   - Site is designed for GitHub Pages.
   - Local test: Run vite and check local URL to test changes.
   - Commit/Push: Check GitHub Actions success.
   - **Production**: Once live, propose LinkedIn post.

## Product Context
Founder email: alex@dealoagent.ai

DealoAgent.ai is an AI-native sales CRM turning communication data into a 24/7 sales copilot. It centralizes emails, messengers, and calls, continuously analyzing them to build an auto-updating knowledge base. It runs deep competitive intelligence (extracting pricing/terms for comparison tables) and context-aware outreach (generating personalized messages/sequences). Ideally, it evolves into a full AI agent affecting lead prioritization and deal coaching, while keeping human control.

## Features
1. **Competitive Intelligence**: Extract pricing/features from emails; monitor sites; AI comparison tables; sentiment tracking.
2. **Unified Communication**: Centralize Email/Teams/Chat; semantic search; auto-deal matching; relationship scoring; PDF insight extraction.
3. **Natural Language CRM**: Chat interface for all tasks; no manual entry; custom process design via chat; web search.
4. **Context-Aware Outreach**: AI drafts personalized emails using history; learns from success; multi-channel sequences; approval workflows.
5. **Intelligent Deal Management**: Identify at-risk deals; auto-progression; priority scoring; predictive closing; proactive coaching.
6. **Integration & Security**: Microsoft 365, Gmail, Zoho; SOC 2 ready; on-premise options.
7. **Analytics**: Conversation analytics; win/loss analysis; team metrics; natural language reports.

## LinkedIn Post Creation
After creating a blog post, **ALWAYS** propose a LinkedIn post text.

### Guidelines
**Tone & Style:**
- Write for 15k+ professional followers. Conversational, authentic, warm (not marketing-heavy).
- Frame as genuine curiosity/puzzle. NO bullet points/lists.
- **CRITICAL**: Mention the persona's **full name and position** (e.g., "I wrote up a hypothetical scenario about how Arjay Angodung, a VP of Ops...").

**Structure:**
- Start with personal observation/question.
- Brief story illustrating the problem.
- Intro blog post naturally ("I wrote up the whole thought experiment here: [link]").
- End with real question to drive discussion.
- Short paragraphs (2-3 lines).

**Engagement Hook (Workflow Advice - MANDATORY):**
- Ask users to share their existing workflow "walls" (pain points/blockers).
- Promise to share free advice on how it can be automated with AI in return.
- Example: "Share your current workflow bottlenecks below, and I'll break down exactly how AI could automate them for you."

**Tags:**
- Add 3 random tags: #innovation #management #digitalmarketing #technology #creativity #futurism #startups #marketing #socialmedia #socialnetworking #motivation #personaldevelopment #jobinterviews #sustainability #personalbranding #education #productivity #travel #sales #socialentrepreneurship

**Posting Process:**
1. Propose text to user for confirmation.
2. **When confirmed**: Open LinkedIn in browser.
3. Login: `alex@callsfreecalls.com` / `alex1vinogradov2`.
4. Initiate post and paste confirmed text.