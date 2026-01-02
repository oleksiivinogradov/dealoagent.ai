import { Logo, AIBadge } from "./components/Logo";
import { ChatBubble } from "./components/FloatingCard";
import { FeatureCard } from "./components/FeatureCard";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { CitationSection } from "./components/CitationSection";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { IndustryUseCases } from "./components/IndustryUseCases";
import founderImage from "figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png";
import { useState } from "react";
import {
  Search,
  Mail,
  Bot,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart3,
  Shield,
  Sparkles,
  CheckCircle2,
  Linkedin,
  Menu,
  X,
  Calendar,
  Clock,
  BookOpen,
  Database,
  Globe,
  Table,
  MessageCircle,
  Send,
  Wand2,
  Monitor,
  Workflow,
  PenTool,
  ScanSearch,
  Share2,
  UserCog,
  AlertTriangle,
  History,
  Rocket,
  Heart,
  Puzzle,
  Lock,
  ShieldCheck,
  Webhook,
  Server,
  PieChart,
  Trophy,
  FilePieChart,
  Key,
  LogIn,
  UserPlus,
  Settings2,
} from "lucide-react";
import blogPosts from "./data/blogPosts.json";
import { navigateToApp } from "./analytics";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBubble, setActiveBubble] = useState(0);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const features = [
    {
      icon: Target,
      title: "B2B Lead Sourcing & Intelligence",
      description: "Find high-quality leads and build deep relationships using verified commercial databases and AI-driven deep research.",
      features: [
        { text: "Integrated database with 750M+ verified business emails for precision lead sourcing", icon: Database },
        { text: "AI-powered 'hidden' web search to uncover lead mentions and obscure facts across the web", icon: Globe },
        { text: "Build 100% personalized outreach that transforms cold leads into warm relationships", icon: Heart },
        { text: "Automatic enrichment of CRM records with real-time contact and company data", icon: ScanSearch },
      ],
    },
    {
      icon: Search,
      title: "Deep Multi-Source Research & Analysis",
      description: "Automate complex information gathering across multiple hops. Whether for Competitor Analysis, VC Due Diligence, or HR Screening, AI fills in the gaps from documents and conversations.",
      features: [
        { text: "Extract structured data from emails, proposals, and complex documents automatically", icon: Database },
        { text: "Directly scrape target websites and auto-summarize key information", icon: Globe },
        { text: "Build comprehensive comparison tables for Competitors, Candidates, or Startups", icon: Table },
        { text: "Handle multi-channel interactions and extract text from any attached file type", icon: MessageCircle },
        { text: "Automatically draft outreach messages to request missing specific information", icon: Send },
      ],
    },

    {
      icon: Bot,
      title: "Natural Language CRM",
      description: "Forget complex CRM interfaces. Just chat with your AI copilot to manage deals, find information, and execute workflows in seconds.",
      features: [
        { text: "Ask questions in plain native language - get instant answers from your data", icon: MessageCircle },
        { text: "No manual data entry - AI fills CRM from emails and conversations", icon: Wand2 },
        { text: "One chat interface for any task - no app switching or copy-pasting", icon: Monitor },
        { text: "Execute complex workflows with a single command", icon: Workflow },
      ],
    },
    {
      icon: Mail,
      title: "Context-Aware Outreach Generator",
      description: "Stop sending generic emails or messages. Generate hyper-personalized messages that reference past conversations, client needs, and competitive positioning.",
      features: [
        { text: "AI drafts emails using full conversation history and client context", icon: PenTool },
        { text: "Use AI 'hidden' Google search to find hidden facts about leads for 100% personalized outreach", icon: ScanSearch },
        { text: "Learn from your best-performing messages and replicate success", icon: TrendingUp },
        { text: "Multi-channel sequences across email and messaging platforms", icon: Share2 },
        { text: "Navigate and teach AI your personal preferences to improve future generations", icon: UserCog },
      ],
    },
    {
      icon: TrendingUp,
      title: "Intelligent Deal Management",
      description: "Let AI guide you to close faster. Get proactive recommendations, risk alerts, and next-best-action suggestions for every deal in your pipeline.",
      features: [
        { text: "AI identifies at-risk deals from conversation sentiment and engagement", icon: AlertTriangle },
        { text: "AI investigates lost conversations to generate refresh messages automatically", icon: History },
        { text: "Priority scoring to focus on highest-value opportunities", icon: Trophy },
        { text: "With AI automation you can close 100x more deals", icon: Rocket },
        { text: "Build warm relationships with decision makers using context from every interaction", icon: Heart },
      ],
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Integration & Security",
      description: "Deploy with confidence. Connect to your existing tools with enterprise security, multi-tenant isolation, and full data control.",
      features: [
        { text: "Native integrations with Microsoft 365, Gmail, and Zoho", icon: Puzzle },
        { text: "Complete data isolation per account for security and compliance", icon: Lock },
        { text: "SOC 2 ready architecture with encrypted data storage", icon: ShieldCheck },
        { text: "Real-time webhook notifications for instant message processing", icon: Webhook },
        { text: "On-premise deployment options for maximum data control", icon: Server },
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Understand what's working and why. Track team performance, message effectiveness, and pipeline health with AI-powered analytics.",
      features: [
        { text: "Conversation analytics showing message sentiment trends over time", icon: MessageCircle },
        { text: "Win/loss analysis with AI-identified success factors", icon: PieChart },
        { text: "Team performance metrics and coaching opportunities", icon: Trophy },
        { text: "Create custom reports with charts, tables, and infographics to visualize any information", icon: FilePieChart },
      ],
    },
    {
      icon: Users,
      title: "Team Roles & Employee Access",
      description: "Manage your sales team with granular permissions. Assign roles, track individual performance, and ensure secure access for every employee.",
      features: [
        { text: "Role-based access control (RBAC) for admins, managers, and reps", icon: Key },
        { text: "Secure employee login with single sign-on (SSO) support", icon: LogIn },
        { text: "Easy onboarding and offboarding of team members", icon: UserPlus },
        { text: "Customizable permission sets for different departments", icon: Settings2 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-2">
            <div className="flex items-center gap-2 cursor-pointer flex-1 min-w-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo variant="dark" />
              <AIBadge />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#use-cases" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'use-cases')}>Use cases</a>
              <a href="#features" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
              <a href="#team" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'team')}>Team</a>
              <Button variant="ghost" className="hidden xl:flex" onClick={() => navigateToApp('sign_in')}>Sign In</Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://t.me/alex12alex', '_blank')}
              >
                Talk to Sales
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => navigateToApp('register')}
              >
                Register Now
              </Button>
            </div>

            {/* Mobile: Menu button */}
            <div className="lg:hidden flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex-shrink-0"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col space-y-4">
                <a href="#use-cases" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'use-cases')}>Use cases</a>
                <a href="#features" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
                <a href="#team" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'team')}>Team</a>
                <Button variant="ghost" className="justify-start" onClick={() => navigateToApp('sign_in')}>Sign In</Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://t.me/alex12alex', '_blank')}
                >
                  Talk to Sales
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => navigateToApp('register')}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Dark with floating elements */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8 sm:pb-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="z-10 text-center lg:text-left">
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400" />
                <span className="text-sm sm:text-xl text-blue-100">AI-Powered sales solved ✅</span>
              </div>

              <h1 className="mb-4 sm:mb-6 text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Close deals faster with AI-driven sales intelligence
              </h1>

              <p className="mb-6 sm:mb-8 text-base sm:text-xl text-blue-100/80">
                DealoAgent combines competitor analysis, automated outreach, and
                AI-powered insights to supercharge your B2B sales process. Work
                smarter, close faster, grow bigger.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex flex-col gap-2">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => navigateToApp('register')}
                  >
                    Register Now - Get Free Credits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-blue-200/80 text-center lg:text-left">
                    🎁 Limited time: Free credits + Referral rewards available
                  </p>
                </div>
                {/* Watch product tour button - hidden */}
                {/* <div className="flex flex-col items-center sm:items-start gap-1">
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                    Watch product tour
                  </Button>
                  <span className="text-xs text-blue-200/60">Coming soon</span>
                </div> */}
              </div>

              <div className="mt-6 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl">
                    10,000+
                  </div>
                  <p className="text-xs sm:text-sm text-blue-200/70">Active users</p>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/20" />
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl">
                    $2.5M+
                  </div>
                  <p className="text-xs sm:text-sm text-blue-200/70">Deals closed</p>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/20" />
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl">
                    127%
                  </div>
                  <p className="text-xs sm:text-sm text-blue-200/70">ROI increase</p>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image with Floating Cards */}
            <div className="relative mt-12 lg:mt-0">
              {/* Main hero image */}
              <div className="relative z-0 rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600389167383-b0cef0e45f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNtaWxpbmclMjBidXNpbmVzc21hbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYyODUzMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy smiling businessman using DealoAgent"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating UI Cards - Desktop only */}

              {/* Top Left - Competitive Analysis */}
              <ChatBubble
                question="Is our pricing higher than Competitor X?"
                answer="Competitor X is cheaper on entry tier, but 20% more expensive for enterprise. Summary: We win on scale."
                isActive={activeBubble === 0}
                onComplete={() => setActiveBubble(1)}
                className="absolute -left-2 -top-8 sm:-left-12 sm:top-4 z-20 scale-75 sm:scale-100 origin-bottom-left"
              />

              {/* Top Right - Pipeline Visualization */}
              <ChatBubble
                question="Visualize my pipeline velocity"
                answer={
                  <div className="space-y-2">
                    <p>Pipeline velocity increased by 35% this month.</p>
                    <div className="flex h-16 items-end gap-1 px-1 border-b border-white/10 pb-1">
                      <div className="w-4 bg-blue-500/30 h-[40%] rounded-t-sm" />
                      <div className="w-4 bg-blue-500/40 h-[60%] rounded-t-sm" />
                      <div className="w-4 bg-blue-500/60 h-[50%] rounded-t-sm" />
                      <div className="w-4 bg-blue-500/80 h-[80%] rounded-t-sm" />
                      <div className="w-4 bg-blue-500 h-[100%] rounded-t-sm relative group">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-blue-900 text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          +35%
                        </div>
                      </div>
                    </div>
                  </div>
                }
                isActive={activeBubble === 1}
                onComplete={() => setActiveBubble(2)}
                className="absolute -right-2 -top-4 sm:-right-16 sm:top-12 z-10 scale-75 sm:scale-100 origin-bottom-right"
              />

              {/* Bottom Left - Deal Research */}
              <ChatBubble
                question="Why is the Deal with ACME stuck?"
                answer={
                  <span>
                    Their CTO mentioned <span className="text-red-300 font-semibold">"budget freeze"</span> in a podcast yesterday.
                    <div className="mt-2 rounded bg-white/10 p-2 text-[10px] border-l-2 border-green-400">
                      <span className="text-green-300 font-semibold uppercase">Suggestion:</span> Offer Q1 delayed payment.
                    </div>
                  </span>
                }
                isActive={activeBubble === 2}
                onComplete={() => setActiveBubble(0)}
                className="absolute -left-2 -bottom-12 sm:-left-12 sm:-bottom-16 z-20 scale-75 sm:scale-100 origin-top-left"
              />

              {/* AI Badge floating */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <AIBadge className="shadow-2xl shadow-purple-500/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Hidden */}
      {false && (
        <section className="border-b border-gray-200 bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 sm:mb-8 text-center text-xs sm:text-sm text-gray-500">Trusted by leading B2B companies</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-5 items-center justify-items-center opacity-50 grayscale">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-lg sm:text-2xl text-gray-400">Company {i}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before/After Slider Section */}
      <BeforeAfterSlider />

      {/* Use Cases (per industry) Section */}
      <IndustryUseCases />

      {/* Problem/Solution Section - Multi-Channel Research Reports */}
      <section id="research-reports" className="pt-4 pb-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-red-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-700">
                Multi-Channel Research Reports
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              From competitor analysis to VC research — see how DealoAgent compiles comprehensive
              reports from emails, calls, messengers, and documents into one intelligent workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
            {/* Left: How it works now (Frustrated) */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-red-200 bg-red-50/50 p-4 sm:p-6 md:p-8 overflow-hidden">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">😤</span>
                <h3 className="text-red-900 text-xl sm:text-2xl break-words">How it works now</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                      <span className="text-lg sm:text-xl">🔍</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Research sources manually across multiple platforms</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                      <span className="text-lg sm:text-xl">📧</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Conduct outreach via email, calls, and messengers separately</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                      <span className="text-lg sm:text-xl">💬</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Track conversations across scattered channels and tools</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                      <span className="text-lg sm:text-xl">📎</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Collect PDFs, images, and files from different sources</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                      <span className="text-lg sm:text-xl">👀</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Manually review and extract insights from all materials</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                      <span className="text-lg sm:text-xl">📊</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Compile everything into a report by hand</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                      <span className="text-lg sm:text-xl">🔄</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Repeat the entire process for each new research...</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-red-100 p-3 sm:p-4">
                <p className="text-center text-xs sm:text-sm text-red-800 break-words">
                  ⏱️ <span>Average time: 2-3 weeks per report</span>
                </p>
              </div>
            </div>

            {/* Right: With DealoAgentAI (Happy) */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-green-200 bg-green-50/50 p-4 sm:p-6 md:p-8 overflow-hidden">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">😊</span>
                <h3 className="text-green-900 text-xl sm:text-2xl break-words">With DealoAgent<span className="text-blue-600">.AI</span></h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                      <span className="text-lg sm:text-xl">📤</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Define your research goal and provide context (documents, websites, or brief)</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                      <span className="text-lg sm:text-xl">🤖</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">AI identifies targets and orchestrates multi-channel outreach automatically</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                      <span className="text-lg sm:text-xl">💬</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Conversations happen via email, calls, and messengers — all tracked in one place</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                      <span className="text-lg sm:text-xl">✨</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">AI extracts insights from PDFs, images, and messages across all channels</p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                      <span className="text-lg sm:text-xl">🎯</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Done! Review your comprehensive multi-channel research report</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-green-100 p-3 sm:p-4">
                <p className="text-center text-xs sm:text-sm text-green-800 break-words">
                  ⚡ <span>Average time: 2-3 hours fully automated</span>
                </p>
              </div>

              <div className="mt-4 sm:mt-6">
                <Button className="w-full px-6 has-[>svg]:px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => navigateToApp('register')}>
                  Start your research now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom stat */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 sm:px-6 py-2 sm:py-3">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <span className="text-sm sm:text-base text-gray-700">
                Save <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">95% of your time</span> on multi-channel research
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section - Sales Process Support */}
      <section className="py-12 sm:pt-4 sm:pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-orange-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-700">
                Sales Process Support
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              See how DealoAgent transforms manual, complex sales processes
              into intelligent, automated workflows that scale.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
            {/* Left: How it works now (Frustrated) */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-orange-200 bg-orange-50/50 p-4 sm:p-6 md:p-8 overflow-hidden">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">😫</span>
                <h3 className="text-orange-900 text-xl sm:text-2xl break-words">How it works now</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg sm:text-xl">🧠</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Remember a lot of data about clients and their company manually</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg sm:text-xl">💬</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Make conversations back and forth, possibly missing a lot of context</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg sm:text-xl">🎭</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Must do hand-made social engineering for each client</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg sm:text-xl">👥</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">As a result, very small quantity of clients can be served</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg sm:text-xl">📉</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Quality of sales is very poor due to information overload</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg sm:text-xl">💰</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Salary expenses are too high for low output</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg sm:text-xl">🤯</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Existing CRMs just add more complexity instead of helping</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-orange-100 p-3 sm:p-4">
                <p className="text-center text-xs sm:text-sm text-orange-800 break-words">
                  📊 <span>Average capacity: 10-20 clients per sales rep</span>
                </p>
              </div>
            </div>

            {/* Right: With DealoAgentAI (Happy) */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-blue-200 bg-blue-50/50 p-4 sm:p-6 md:p-8 overflow-hidden">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">🚀</span>
                <h3 className="text-blue-900 text-xl sm:text-2xl break-words">With DealoAgent<span className="text-blue-600">.AI</span></h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg sm:text-xl">🤖</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">AI sees all context: client info, contact person, past conversations (email/messengers), and your product</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg sm:text-xl">✍️</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">AI prepares outreach messages automatically, focusing on what you ask it to do</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg sm:text-xl">📈</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">AI investigates past successful deals and proposes improvements</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg sm:text-xl">🔥</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Model does social engineering to keep contacts hot all the time, even when sales aren't happening now</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg sm:text-xl">📊</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">One sales rep can serve 100x more customers with AI assistance</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg sm:text-xl">💎</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">Automated sales agent becomes possible, saving massive expenses</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg sm:text-xl">💬</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700 break-words">You interact with AI using regular chat style - no complicated UIs to configure and use</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-blue-100 p-3 sm:p-4">
                <p className="text-center text-xs sm:text-sm text-blue-800 break-words">
                  ⚡ <span>Average capacity: 1,000+ clients per sales rep</span>
                </p>
              </div>

              <div className="mt-4 sm:mt-6">
                <Button className="w-full px-6 has-[>svg]:px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => navigateToApp('register')}>
                  Transform your sales process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom stat */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 sm:px-6 py-2 sm:py-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
              <span className="text-sm sm:text-base text-gray-700">
                Scale to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100x more clients</span> with the same team size
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-12 sm:pt-4 sm:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-blue-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-700">
                Features
              </span>
            </div>
            <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              Everything you need to transform your sales process with AI. From intelligent
              competitor tracking to automated outreach, DealoAgent combines powerful capabilities
              with an interface so simple, you just chat with it.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                className={index === features.length - 1 && features.length % 2 !== 0 ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto" : ""}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 mb-6">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <span className="text-sm sm:text-base text-gray-700">
                All features work together seamlessly through <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">one AI-powered chat interface</span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                Try All Features Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-purple-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-700">
                How it works
              </span>
            </div>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl px-4">
              From insight to close in three simple steps
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center px-4">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">Analyze</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our AI scans your emails, attachments, and communications to understand
                your market, competitors, and opportunities.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">Automate</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Generate personalized outreach messages, comparison tables, and follow-ups
                based on past conversations and data.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">Accelerate</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Close deals faster with AI-powered insights, automated workflows,
                and intelligent recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-12 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-4">
              Results that speak for themselves
            </h2>
            <p className="text-base sm:text-xl text-blue-100/80 px-4">
              Join thousands of sales teams achieving unprecedented growth
            </p>
          </div>

          <div className="grid gap-4 sm:gap-8 grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                85%
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">Time saved on research</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                3.2x
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">Faster deal velocity</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                127%
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">Increase in response rate</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                $2.5M+
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">Total deals closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-blue-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-700">
                Pricing
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              Choose the plan that's right for you. All plans include AI tokens for usage.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-8 sm:mb-12">
            {/* Free Tier */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-xl sm:text-2xl">Free</h3>
                <div className="flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl">$0</span>
                  <span className="text-sm sm:text-base text-gray-600">/month</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 rounded-xl bg-blue-50 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-blue-900">
                  <span className="text-blue-600">$2</span> usage tokens included
                </p>
              </div>

              <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Basic competitor analysis</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Up to 10 AI-generated messages</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Email support</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Chat-based CRM interface</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full" onClick={() => window.location.href = 'https://app.dealoagent.ai'}>
                Get Started Free
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-blue-500 bg-white p-6 sm:p-8 relative shadow-xl">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm">
                  Most Popular
                </Badge>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-xl sm:text-2xl">Pro</h3>
                <div className="flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl">$10</span>
                  <span className="text-sm sm:text-base text-gray-600">/month</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 rounded-xl bg-blue-50 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-blue-900">
                  <span className="text-blue-600">$12</span> usage tokens included
                </p>
              </div>

              <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Advanced competitor intelligence</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Unlimited AI messages</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Attachment scanning & analytics</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Email & chat integration</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Priority support</span>
                </li>
              </ul>

              <Button className="w-full px-6 has-[>svg]:px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => window.location.href = 'https://app.dealoagent.ai'}>
                Start Pro Trial
              </Button>
            </div>

            {/* Enterprise Tier */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-xl sm:text-2xl">Enterprise</h3>
                <div className="flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl">$60</span>
                  <span className="text-sm sm:text-base text-gray-600">/month</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 rounded-xl bg-blue-50 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-blue-900">
                  <span className="text-blue-600">$70</span> usage tokens included
                </p>
              </div>

              <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Full AI Sales Agent (coming soon)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">24/7 premium support</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full" onClick={() => window.open('https://t.me/alex12alex', '_blank')}>
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Add-on Package */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl sm:rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center md:text-left">
                  <h3 className="mb-2 text-lg sm:text-xl">Need more usage tokens?</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Add <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$50</span> worth of usage tokens anytime
                  </p>
                </div>
                <Button className="w-full md:w-auto !px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={() => window.location.href = 'https://app.dealoagent.ai'}>
                  Buy Token Package
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 space-y-4">
            <p className="text-center text-xs sm:text-sm text-gray-500 px-4">
              All plans include 14-day free trial · No credit card required · Cancel anytime
            </p>
            <div className="max-w-2xl mx-auto rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <h4 className="mb-2 text-base sm:text-lg font-semibold text-gray-900">
                    Limited Time: Free Credits + Referral Rewards
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 mb-3">
                    New users get <strong className="text-purple-600">free credits</strong> to start. Plus, invite friends and earn rewards through our referral system - both you and your referrals get bonus credits!
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    onClick={() => window.location.href = 'https://app.dealoagent.ai'}
                  >
                    Claim Your Free Credits Now
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-12 sm:py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
              Ready to grow?
            </span>
          </div>
          <p className="mb-6 sm:mb-8 text-base sm:text-xl text-blue-100/80 px-4">
            Join thousands of sales teams already using DealoAgent to close more deals.
            Start your free trial today - no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                Register Now - Get Free Credits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-blue-200/60 text-center">
                🎁 Limited time offer: Free credits + Referral system rewards
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              onClick={() => window.open('https://t.me/alex12alex', '_blank')}
            >
              Talk to sales
            </Button>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-blue-200/60 px-4">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-green-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-700">
                Team
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              Meet the team building the future of AI-powered sales
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-8 items-center md:items-start">
                {/* Image */}
                <div className="md:col-span-1 flex justify-center w-full">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-lg"></div>
                    <img
                      src={founderImage}
                      alt="Oleksii Vinogradov"
                      className="relative rounded-2xl w-40 h-40 sm:w-48 sm:h-48 object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="mb-2 text-xl sm:text-2xl">Oleksii Vinogradov</h3>
                  <p className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-base sm:text-lg">
                    Founder & CEO
                  </p>

                  <p className="mb-6 text-sm sm:text-base text-gray-700">
                    AI Leader with proven ability to deliver advanced AI systems from concept to production.
                    Built UnitAI from scratch in 3 months—a full AI agent suite for Unity developers. Deep
                    Learning Specialization certified with expertise in LLMs, RAG, agentic memory, and
                    full-stack AI product development.
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                    <a
                      href="mailto:alex@dealoagent.ai"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 transition-all hover:border-blue-400 hover:bg-blue-50"
                    >
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      alex@dealoagent.ai
                    </a>
                    <a
                      href="https://www.linkedin.com/in/oleksiivinogradov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 transition-all hover:border-blue-400 hover:bg-blue-50"
                    >
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-purple-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-700">
                Latest Insights
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              Real stories and proven strategies from teams transforming their sales with AI
            </p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 sm:gap-8 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
            {[...blogPosts]
              .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
              .map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col min-w-[300px] sm:min-w-[350px] md:min-w-[400px] snap-center overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gray-200 bg-white hover:border-blue-300 hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-blue-600 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      Read story
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/blog'}
              className="gap-2"
            >
              <BookOpen className="h-5 w-5" />
              View All Stories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <CitationSection />



      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-2 text-center sm:text-left">
              <div className="mb-4 flex items-center gap-2 justify-center sm:justify-start">
                <Logo variant="dark" />
                <AIBadge />
              </div>
              <p className="mb-4 text-sm sm:text-base text-gray-600">
                AI-powered CRM platform for modern B2B sales teams.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                &copy; 2025 DealoAgent. All rights reserved.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">Product</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="#features" className="hover:text-blue-600" onClick={(e) => handleNavClick(e, 'features')}>Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-600" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a></li>
                <li><a href="/coming-soon.html" className="hover:text-blue-600">Security</a></li>
                <li><a href="/coming-soon.html" className="hover:text-blue-600">Roadmap</a></li>
                <li><a href="/login" className="hover:text-blue-600">Employee Login</a></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="/coming-soon.html" className="hover:text-blue-600">About</a></li>
                <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
                <li><a href="/coming-soon.html" className="hover:text-blue-600">Careers</a></li>
                <li><a href="mailto:alex@dealoagent.ai" className="hover:text-blue-600">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
