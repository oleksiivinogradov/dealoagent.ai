

export interface PitchSlide {
    id: number;
    layout: 'z-pattern';
    sectionA: {
        title: string;
        subtitle?: string;
    };
    sectionB: {
        content: string;
        type: 'text' | 'logo' | 'image';
    };
    sectionC: {
        type: 'bullets' | 'text' | 'list' | 'contact';
        items?: { text: string; icon?: string }[];
        content?: string[];
    };
    sectionD: {
        type: 'visual' | 'chart' | 'image' | 'component';
        content: string; // Description or URL
        chartType?: 'bar' | 'line' | 'pie' | 'grid' | 'funnel' | 'timeline';
    };
}

export const getPitchDeckSlides = (t: TFunction): PitchSlide[] => [
    // SLIDE 1 — TITLE SLIDE
    {
        id: 1,
        layout: 'z-pattern',
        sectionA: {
            title: '', // Empty title to avoid duplication with Logo
            subtitle: t('pitchDeck.slides.1.subtitle', 'AI-Powered Sales Agent & Competitor Intelligence')
        },
        sectionB: {
            content: 'logo',
            type: 'logo'
        },
        sectionC: {
            type: 'text', // Changed from contact to text
            content: [] // Empty content
        },
        sectionD: {
            type: 'visual',
            content: '' // Empty visual
        }
    },
    // SLIDE 2 — PROBLEM
    {
        id: 2,
        layout: 'z-pattern',
        sectionA: {
            title: 'The Problem'
        },
        sectionB: {
            content: 'Sales teams drown in unstructured communication.',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Emails & attachments go unread', icon: 'Mail' },
                { text: 'Manual outreach is slow & inconsistent', icon: 'Clock' },
                { text: 'Competitor offers are buried in threads', icon: 'Shield' },
                { text: 'CRMs are passive, not intelligent', icon: 'Layout' },
                { text: 'Lost deals due to lack of visibility', icon: 'TrendingUp' }
            ]
        },
        sectionD: {
            type: 'visual',
            content: 'Broken Workflow Visual'
        }
    },
    // SLIDE 3 — TARGET USERS
    {
        id: 3,
        layout: 'z-pattern',
        sectionA: {
            title: 'Who Suffers?'
        },
        sectionB: {
            content: 'SDRs • AEs • Founders • Managers',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'SDRs waste time writing outreach', icon: 'User' },
                { text: 'AEs lose deals due to slow follow-up', icon: 'Clock' },
                { text: 'Founders lack competitor visibility', icon: 'Target' },
                { text: 'Managers cannot measure quality', icon: 'BarChart' }
            ]
        },
        sectionD: {
            type: 'visual',
            content: 'User Groups Diagram'
        }
    },
    // SLIDE 4 — WHY EXISTING SOLUTIONS FAIL
    {
        id: 4,
        layout: 'z-pattern',
        sectionA: {
        },
        sectionD: {
            type: 'chart',
            content: 'Comparison Grid',
            chartType: 'grid'
        }
    },
    // SLIDE 5 — SOLUTION
    {
        id: 5,
        layout: 'z-pattern',
        sectionA: {
            title: 'Our Solution'
        },
        sectionB: {
            content: 'Two ways to work: Chat with AI or use the full dashboard.',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Chat Interface: Mobile-friendly, works anywhere', icon: 'MessageSquare' },
                { text: 'Traditional UI available for power users', icon: 'Layout' },
                { text: 'AI auto-fills CRM from conversations', icon: 'Zap' },
                { text: 'No complex forms—impossible on mobile CRMs', icon: 'CheckCircle' },
                { text: 'Complete CRM from your phone via chat', icon: 'Phone' }
            ]
        },
        sectionD: {
            type: 'image',
            content: 'Dual Interface Screenshot'
        }
    },
    // SLIDE 6 — HOW IT WORKS
    {
        id: 6,
        layout: 'z-pattern',
        sectionA: {
            title: 'How It Works'
        },
        sectionB: {
            content: 'Input → AI Processing → Intelligent Output',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Inputs: Emails, PDFs, Calls, Chats', icon: 'ArrowRight' },
                { text: 'AI: Parsing, Extracting, Reasoning', icon: 'Cpu' },
                { text: 'Outputs: CRM Records, Competitor Tables', icon: 'CheckCircle' },
                { text: 'Action: Auto-generated Outreach', icon: 'Send' }
            ]
        },
        sectionD: {
            type: 'visual',
            content: 'Workflow Diagram'
        }
    },
    // SLIDE 7 — PRODUCT DEMO
    {
        id: 7,
        layout: 'z-pattern',
        sectionA: {
            title: 'Product Highlights'
        },
        sectionB: {
            content: 'Your entire sales workflow — automated.',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Competitor Intelligence', icon: 'Shield' },
                { text: 'AI Outreach Generation', icon: 'Mail' },
                { text: 'Contact Discovery', icon: 'Users' },
                { text: 'Emotion Analytics', icon: 'Heart' },
                { text: 'CRM Record Builder', icon: 'Database' }
            ]
        },
        sectionD: {
            type: 'image',
            content: 'Large Product Screenshot'
        }
    },
    // SLIDE 8 — MARKET
    {
        id: 8,
        layout: 'z-pattern',
        sectionA: {
            title: 'Market Opportunity'
        },
        sectionB: {
            content: 'TAM: $186B+ | SOM: $22B+',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'AI sales tools market is exploding', icon: 'TrendingUp' },
                { text: 'CRM market is massive and aging', icon: 'Database' },
                { text: 'Email communication volume is peaking', icon: 'Mail' },
                { text: 'B2B sales shifting to automation', icon: 'Zap' }
            ]
        },
        sectionD: {
            type: 'chart',
            content: 'Market Growth Graph',
            chartType: 'bar'
        }
    },
    // SLIDE 9 — WHY NOW
    {
        id: 9,
        layout: 'z-pattern',
        sectionA: {
            title: 'Timing'
        },
        sectionB: {
            content: 'AI is finally capable of making sales teams superhuman.',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'LLMs enable deep email reasoning', icon: 'Cpu' },
                { text: 'Remote work = more digital signals', icon: 'Globe' },
                { text: 'Need for efficiency skyrocketed', icon: 'TrendingUp' },
                { text: 'Legacy tools are too slow to adapt', icon: 'Clock' }
            ]
        },
        sectionD: {
            type: 'visual',
            content: 'Trend Visual'
        }
    },
    // SLIDE 10 — BUSINESS MODEL
    {
        id: 10,
        layout: 'z-pattern',
        sectionA: {
            title: 'Business Model'
        },
        sectionB: {
            content: 'SaaS Tiers + AI Usage + Enterprise Add-ons',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Free Plan: Limited usage, viral growth', icon: 'User' },
                { text: 'Paid Plans: More AI tokens & features', icon: 'CreditCard' },
                { text: 'Upsells: API, Voice Analytics, Integrations', icon: 'PlusCircle' },
                { text: 'Enterprise: Custom deployment & support', icon: 'Briefcase' }
            ]
        },
        sectionD: {
            type: 'visual',
            content: 'Pricing Card Graphic'
        }
    },
    // SLIDE 11 — TRACTION
    {
        id: 11,
        layout: 'z-pattern',
        sectionA: {
            title: 'Traction'
        },
        sectionB: {
            content: 'Already processing thousands of emails.',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Internal usage & validation', icon: 'CheckCircle' },
                { text: 'VoIP/SMS pilot programs', icon: 'Phone' },
                { text: 'Thousands of outreach sequences', icon: 'Mail' },
                { text: 'Live competitor tables built', icon: 'Shield' },
                { text: 'Growing user activation', icon: 'Users' }
            ]
        },
        sectionD: {
            type: 'chart',
            content: 'Growth Chart',
            chartType: 'line'
        }
    },
    // SLIDE 12 — GO-TO-MARKET
    {
        id: 12,
        layout: 'z-pattern',
        sectionA: {
            title: 'GTM Strategy'
        },
        sectionB: {
            content: 'Founder-led distribution & Content Loop',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'LinkedIn (15k+ audience)', icon: 'Linkedin' },
                { text: 'X / YouTube educational content', icon: 'Video' },
                { text: 'Affiliate & Partner programs', icon: 'Users' },
                { text: 'Freemium product-led growth', icon: 'Zap' },
                { text: 'Strategic Integrations', icon: 'Link' }
            ]
        },
        sectionD: {
            type: 'chart',
            content: 'Funnel Diagram',
            chartType: 'funnel'
        }
    },
    // SLIDE 13 — COMPETITION
    {
        id: 13,
        layout: 'z-pattern',
        sectionA: {
            title: 'Competitive Landscape'
        },
        sectionB: {
            content: 'Only platform unifying CRM + AI Outreach + Competitor Intel.',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Apollo: Strong database, weak conversational AI', icon: 'Minus' },
                { text: 'HubSpot: Enterprise standard, but slow and manual', icon: 'Minus' },
                { text: 'Clay: Excellent enrichment, not a sales workflow', icon: 'Minus' },
                { text: 'Folk: Modern contact manager, lacks deep sales AI', icon: 'Minus' },
                { text: 'Attio: Flexible data, requires manual build-out', icon: 'Minus' },
                { text: 'Amplemarket: Good outreach, siloed from CRM data', icon: 'Minus' },
                { text: 'Close: High velocity calling, weak AI reasoning', icon: 'Minus' },
                { text: 'DealoAgent: Unified AI Sales Agent & CRM', icon: 'CheckCircle' }
            ]
        },
        sectionD: {
            type: 'chart',
            content: '2x2 Matrix',
            chartType: 'grid'
        }
    },
    // SLIDE 14 — TECHNOLOGY
    {
        id: 14,
        layout: 'z-pattern',
        sectionA: {
            title: 'How It’s Built'
        },
        sectionB: {
            content: 'Scalable, Secure AI Infrastructure',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Document AI Processing', icon: 'FileText' },
                { text: 'Advanced LLM Pipeline', icon: 'Cpu' },
                { text: 'Vector DB Memory', icon: 'Database' },
                { text: 'Emotion Analysis Model', icon: 'Heart' },
                { text: 'Multi-workspace Architecture', icon: 'Layers' }
            ]
        },
        sectionD: {
            type: 'visual',
            content: 'Architecture Diagram'
        }
    },
    // SLIDE 15 — ROADMAP
    {
        id: 15,
        layout: 'z-pattern',
        sectionA: {
            title: 'Roadmap'
        },
        sectionB: {
            content: 'Q4 2025 — Q2 2026',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Q4 2025: Core AI Agent & CRM', icon: 'CheckCircle' },
                { text: 'Q1 2026: Advanced Voice & Integrations', icon: 'Mic' },
                { text: 'Q2 2026: Enterprise Scale & API', icon: 'Server' }
            ]
        },
        sectionD: {
            type: 'chart',
            content: 'Timeline Graphic',
            chartType: 'timeline'
        }
    },
    // SLIDE 16 — TEAM
    {
        id: 16,
        layout: 'z-pattern',
        sectionA: {
            title: 'Team'
        },
        sectionB: {
            content: 'Oleksii Vinogradov',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Founder & CEO', icon: 'User' },
                { text: 'AI Leader with proven delivery track record', icon: 'Cpu' },
                { text: 'Built UnitAI from scratch in 3 months', icon: 'TrendingUp' },
                { text: 'Deep Learning certified, LLM & RAG expert', icon: 'Zap' }
            ]
        },
        sectionD: {
            type: 'image',
            content: 'Founder Photo'
        }
    },
    // SLIDE 17 — FUNDRAISING
    {
        id: 17,
        layout: 'z-pattern',
        sectionA: {
            title: 'The Ask'
        },
        sectionB: {
            content: '$500k - $1M SAFE',
            type: 'text'
        },
        sectionC: {
            type: 'bullets',
            items: [
                { text: 'Accelerate ML Engineering', icon: 'Cpu' },
                { text: 'Expand Integrations', icon: 'Link' },
                { text: 'Enhance AI Pipeline', icon: 'Zap' },
                { text: 'Fuel Customer Acquisition', icon: 'TrendingUp' }
            ]
        },
        sectionD: {
            type: 'visual',
            content: 'Join Us Visual'
        }
    },
    // SLIDE 18 — CLOSING
    {
        id: 18,
        layout: 'z-pattern',
        sectionA: {
            title: 'DealoAgent.ai'
        },
        sectionB: {
            content: 'logo',
            type: 'logo'
        },
        sectionC: {
            type: 'contact',
            content: [
                'Globe|https://dealoagent.ai|DealoAgent.ai',
                'Mail|mailto:alex@dealoagent.ai|alex@dealoagent.ai',
                'MessageSquare|https://t.me/alex12alex|@alex12alex',
                'Linkedin|https://www.linkedin.com/in/oleksiivinogradov|Oleksii Vinogradov'
            ]
        },
        sectionD: {
            type: 'image',
            content: 'Final Product Hero'
        }
    }
];
