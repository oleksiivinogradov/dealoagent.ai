import { Logo, AIBadge } from "./components/Logo";
import { ChatBubble } from "./components/FloatingCard";
import { FeatureCard } from "./components/FeatureCard";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { IndustryUseCases } from "./components/IndustryUseCases";
import { IndustryValidation } from "./components/IndustryValidation";
import founderImage from "figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png";
import { useState, useMemo, useEffect } from "react";
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
  Heart,
  Puzzle,
  Key,
  LogIn,
  UserPlus,
  Settings2,
  MousePointerClick,
  FileText,
  Handshake,
} from "lucide-react";
import blogPosts from "./data/blogPosts.json";
import blogPostsUk from "./data/blogPosts_uk.json";
import blogPostsPl from "./data/blogPosts_pl.json";
import { navigateToApp } from "./analytics";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTranslation, Trans } from "react-i18next";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBubble, setActiveBubble] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const currentBlogPosts = useMemo(() => {
    if (i18n.language === 'uk') return blogPostsUk;
    if (i18n.language === 'pl') return blogPostsPl;
    return blogPosts;
  }, [i18n.language]);

  const getPath = (path: string) => {
    const lang = i18n.language;
    // Ensure path ends with slash if it's not root
    const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
    if (lang === 'en') return normalizedPath;
    return `/${lang}${normalizedPath}`;
  };

  const handleLinkClick = (path: string) => {
    window.location.href = getPath(path);
  }



  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
    setMobileMenuOpen(false);
  };

  const features = [
    {
      icon: Target,
      title: t('featureCards.sourcing.title'),
      description: t('featureCards.sourcing.description'),
      features: [
        { text: t('featureCards.sourcing.items.0'), icon: Database },
        { text: t('featureCards.sourcing.items.1'), icon: Globe },
        { text: t('featureCards.sourcing.items.2'), icon: Heart },
        { text: t('featureCards.sourcing.items.3'), icon: ScanSearch },
      ],
    },
    {
      icon: Search,
      title: t('featureCards.research.title'),
      description: t('featureCards.research.description'),
      features: [
        { text: t('featureCards.research.items.0'), icon: Database },
        { text: t('featureCards.research.items.1'), icon: Globe },
        { text: t('featureCards.research.items.2'), icon: Table },
        { text: t('featureCards.research.items.3'), icon: MessageCircle },
        { text: t('featureCards.research.items.4'), icon: Send },
      ],
    },

    {
      icon: Bot,
      title: t('featureCards.crm.title'),
      description: t('featureCards.crm.description'),
      features: [
        { text: t('featureCards.crm.items.0'), icon: MessageCircle },
        { text: t('featureCards.crm.items.1'), icon: Wand2 },
        { text: t('featureCards.crm.items.2'), icon: Monitor },
        { text: t('featureCards.crm.items.3'), icon: Workflow },
      ],
    },
    {
      icon: Mail,
      title: t('featureCards.outreach.title'),
      description: t('featureCards.outreach.description'),
      features: [
        { text: t('featureCards.outreach.items.0'), icon: PenTool },
        { text: t('featureCards.outreach.items.1'), icon: ScanSearch },
        { text: t('featureCards.outreach.items.2'), icon: TrendingUp },
        { text: t('featureCards.outreach.items.3'), icon: Share2 },
        { text: t('featureCards.outreach.items.4'), icon: UserCog },
      ],
    },
    {
      icon: MousePointerClick,
      title: t('featureCards.automation.title'),
      description: t('featureCards.automation.description'),
      features: [
        { text: t('featureCards.automation.items.0'), icon: Linkedin },
        { text: t('featureCards.automation.items.1'), icon: FileText },
        { text: t('featureCards.automation.items.2'), icon: Workflow },
        { text: t('featureCards.automation.items.3'), icon: Puzzle },
      ],
    },
    {
      icon: Users,
      title: t('featureCards.roles.title'),
      description: t('featureCards.roles.description'),
      features: [
        { text: t('featureCards.roles.items.0'), icon: Key },
        { text: t('featureCards.roles.items.1'), icon: LogIn },
        { text: t('featureCards.roles.items.2'), icon: UserPlus },
        { text: t('featureCards.roles.items.3'), icon: Settings2 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-2">
            <div className="flex items-center gap-2 cursor-pointer flex-1 min-w-0" onClick={() => handleLinkClick('/')}>
              <Logo variant="dark" />
              <AIBadge />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-4">
              <LanguageSwitcher />
              <a href="#use-cases" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'use-cases')}>{t('nav.useCases')}</a>
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'features')}>{t('nav.features')}</a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'pricing')}>{t('nav.pricing')}</a>
              <a href="#team" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'team')}>{t('nav.team')}</a>
              <a href="#partners" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'partners')}>{t('nav.partners')}</a>
              <Button variant="ghost" className="hidden xl:flex" onClick={() => navigateToApp('sign_in')}>{t('nav.signIn')}</Button>
              <Button
                variant="outline"
                className="text-sm"
                onClick={() => window.open('https://t.me/alex12alex', '_blank')}
              >
                {t('nav.talkToSales')}
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm"
                onClick={() => navigateToApp('register')}
              >
                {t('nav.register')}
              </Button>
            </div>

            {/* Mobile: Menu button */}
            <div className="xl:hidden flex items-center gap-4">
              <LanguageSwitcher />
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
          <div className="xl:hidden border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col space-y-4">
                <a href="#use-cases" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'use-cases')}>{t('nav.useCases')}</a>
                <a href="#features" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'features')}>{t('nav.features')}</a>
                <a href="#pricing" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'pricing')}>{t('nav.pricing')}</a>
                <a href="#team" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'team')}>{t('nav.team')}</a>
                <a href="#partners" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'partners')}>{t('nav.partners')}</a>
                <Button variant="ghost" className="justify-start" onClick={() => navigateToApp('sign_in')}>{t('nav.signIn')}</Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://t.me/alex12alex', '_blank')}
                >
                  {t('nav.talkToSales')}
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => navigateToApp('register')}
                >
                  {t('nav.register')}
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
                <span className="text-sm sm:text-xl text-blue-100">{t('hero.badge')}</span>
              </div>

              <h1 className="mb-4 sm:mb-6 text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                {t('hero.title')}
              </h1>

              <p className="mb-6 sm:mb-8 text-base sm:text-xl text-blue-100/80">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex flex-col gap-2">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => navigateToApp('register')}
                  >
                    {t('hero.cta.register')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                </div>
                {/* Watch product tour button - hidden */}
                {/* <div className="flex flex-col items-center sm:items-start gap-1">
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                    Watch product tour
                  </Button>
                  <span className="text-xs text-blue-200/60">Coming soon</span>
                </div> */}
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

              {/* Floating UI Cards - Desktop only */}

              {/* Single Rotating Chat Bubble - Bottom Right */}
              <ChatBubble
                key={activeBubble} // Force re-mount to ensure clean animation restart
                question={[
                  "Is our pricing higher than Competitor X?",
                  "Visualize my pipeline velocity",
                  "Why is the Deal with ACME stuck?"
                ][activeBubble]}
                answer={[
                  "Competitor X is cheaper on entry tier, but 20% more expensive for enterprise. Summary: We win on scale.",
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
                  </div>,
                  <span>
                    Their CTO mentioned <span className="text-red-300 font-semibold">"budget freeze"</span> in a podcast yesterday.
                    <div className="mt-2 rounded bg-white/10 p-2 text-[10px] border-l-2 border-green-400">
                      <span className="text-green-300 font-semibold uppercase">Suggestion:</span> Offer Q1 delayed payment.
                    </div>
                  </span>
                ][activeBubble]}
                isActive={true}
                onComplete={() => setActiveBubble((prev) => (prev + 1) % 3)}
                className="absolute -right-2 -bottom-12 sm:-right-12 sm:-bottom-8 z-20 scale-75 sm:scale-100 origin-bottom-right"
              />

              {/* AI Badge floating */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <AIBadge className="shadow-2xl shadow-purple-500/50" />
              </div>
            </div>
          </div>

          {/* Stats Bar - Moved to separate block below main hero */}
          <div className="mt-16 sm:mt-24 border-t border-white/10 pt-8 sm:pt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 md:gap-24">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold">
                  10,000+
                </div>
                <p className="mt-1 text-sm sm:text-base text-blue-200/70">{t('hero.stats.users')}</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold">
                  $2.5M+
                </div>
                <p className="mt-1 text-sm sm:text-base text-blue-200/70">{t('hero.stats.deals')}</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold">
                  127%
                </div>
                <p className="mt-1 text-sm sm:text-base text-blue-200/70">{t('hero.stats.roi')}</p>
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



      {/* Features Grid */}
      <section id="features" className="py-12 sm:pt-4 sm:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-blue-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-700">
                {t('features.title')}
              </span>
            </div>
            <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              {t('features.subtitle')}
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
                <Trans i18nKey="features.cta.seamless" components={{ 1: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold" /> }} />
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                {t('features.cta.tryFree')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                {t('features.cta.startTrial')}
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
                {t('howItWorks.badge')}
              </span>
            </div>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl px-4">
              {t('howItWorks.title')}
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center px-4">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">{t('howItWorks.steps.analyze.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('howItWorks.steps.analyze.description')}
              </p>
            </div>

            <div className="text-center px-4">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">{t('howItWorks.steps.automate.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('howItWorks.steps.automate.description')}
              </p>
            </div>

            <div className="text-center px-4">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">{t('howItWorks.steps.accelerate.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('howItWorks.steps.accelerate.description')}
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
              {t('results.title')}
            </h2>
            <p className="text-base sm:text-xl text-blue-100/80 px-4">
              {t('results.subtitle')}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-8 grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                85%
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">{t('results.stats.researchTime')}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                3.2x
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">{t('results.stats.dealVelocity')}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                127%
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">{t('results.stats.responseRate')}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8 text-center backdrop-blur-sm">
              <div className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                $2.5M+
              </div>
              <p className="text-xs sm:text-base text-blue-100/80">{t('results.stats.dealsClosed')}</p>
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
                {t('pricing.badge')}
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-8 sm:mb-12">
            {/* Free Tier */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-xl sm:text-2xl">{t('pricing.free.title')}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl">$0</span>
                  <span className="text-sm sm:text-base text-gray-600">{t('pricing.perMonth')}</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 rounded-xl bg-blue-50 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-blue-900">
                  <span className="text-blue-600">$2</span> {t('pricing.tokensIncluded')}
                </p>
              </div>

              <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.free.features.0')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.free.features.1')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.free.features.2')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.free.features.3')}</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full" onClick={() => window.location.href = 'https://app.dealoagent.ai'}>
                {t('pricing.free.cta')}
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-blue-500 bg-white p-6 sm:p-8 relative shadow-xl">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm">
                  {t('pricing.popular')}
                </Badge>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-xl sm:text-2xl">{t('pricing.pro.title')}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl">$10</span>
                  <span className="text-sm sm:text-base text-gray-600">{t('pricing.perMonth')}</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 rounded-xl bg-blue-50 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-blue-900">
                  <span className="text-blue-600">$12</span> {t('pricing.tokensIncluded')}
                </p>
              </div>

              <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.features.0')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.features.1')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.features.2')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.features.3')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.pro.features.4')}</span>
                </li>
              </ul>

              <Button className="w-full px-6 has-[>svg]:px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => window.location.href = 'https://app.dealoagent.ai'}>
                {t('pricing.pro.cta')}
              </Button>
            </div>

            {/* Enterprise Tier */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-gray-200 bg-white p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-xl sm:text-2xl">{t('pricing.enterprise.title')}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl">$60</span>
                  <span className="text-sm sm:text-base text-gray-600">{t('pricing.perMonth')}</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 rounded-xl bg-blue-50 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-blue-900">
                  <span className="text-blue-600">$70</span> {t('pricing.tokensIncluded')}
                </p>
              </div>

              <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.enterprise.features.0')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.enterprise.features.1')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.enterprise.features.2')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.enterprise.features.3')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{t('pricing.enterprise.features.4')}</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full" onClick={() => window.open('https://t.me/alex12alex', '_blank')}>
                {t('pricing.enterprise.cta')}
              </Button>
            </div>
          </div>

          {/* Add-on Package */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl sm:rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center md:text-left">
                  <h3 className="mb-2 text-lg sm:text-xl">{t('pricing.addon.title')}</h3>
                  <p className="text-sm sm:text-base text-gray-600" dangerouslySetInnerHTML={{ __html: t('pricing.addon.subtitle').replace('<1>', '<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">').replace('</1>', '</span>') }}>
                  </p>
                </div>
                <Button className="w-full md:w-auto !px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" onClick={() => window.location.href = 'https://app.dealoagent.ai'}>
                  {t('pricing.addon.cta')}
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 space-y-4">
            <p className="text-center text-xs sm:text-sm text-gray-500 px-4">
              {t('pricing.note')}
            </p>
            <div className="max-w-2xl mx-auto rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <h4 className="mb-2 text-base sm:text-lg font-semibold text-gray-900">
                    {t('pricing.promo.title')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: t('pricing.promo.text').replace('<1>', '<strong class="text-purple-600">').replace('</1>', '</strong>') }}>
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    onClick={() => window.location.href = 'https://app.dealoagent.ai'}
                  >
                    {t('pricing.promo.cta')}
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
              {t('readiness.badge')}
            </span>
          </div>
          <p className="mb-6 sm:mb-8 text-base sm:text-xl text-blue-100/80 px-4">
            {t('readiness.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                {t('readiness.registerCta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-blue-200/60 text-center">
                {t('readiness.promoText')}
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              onClick={() => window.open('https://t.me/alex12alex', '_blank')}
            >
              {t('readiness.salesCta')}
            </Button>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-blue-200/60 px-4">
            {t('readiness.footerNote')}
          </p>
        </div>
      </section>

      {/* Partners Teaser Section */}
      <section id="partners" className="bg-slate-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"></div>

            <div className="relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
                  <Handshake className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">{t('partners.badge')}</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                  {t('partners.title')}
                </h2>
                <p className="text-lg text-blue-100/80 mb-8">
                  {t('partners.description')}
                </p>

                {/* Comparison Table */}
                <div className="overflow-hidden rounded-xl border border-blue-500/30 bg-slate-800/50 backdrop-blur-sm mb-8 mx-auto max-w-2xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-blue-100/80">
                      <thead className="bg-blue-500/10 text-xs uppercase text-blue-200">
                        <tr>
                          <th className="px-4 py-3 font-semibold">{t('partners.table.headers.benefit')}</th>
                          <th className="px-4 py-3 font-bold text-blue-400">{t('partners.table.headers.dealoAgent')}</th>
                          <th className="px-4 py-3">{t('partners.table.headers.others')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-500/20">
                        <tr>
                          <td className="px-4 py-3 font-medium text-white">{t('partners.table.rows.revShareY1')}</td>
                          <td className="px-4 py-3 font-bold text-blue-400">30%</td>
                          <td className="px-4 py-3">20%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-white">{t('partners.table.rows.revShareY2Y3')}</td>
                          <td className="px-4 py-3 font-bold text-blue-400">20% / 10%</td>
                          <td className="px-4 py-3">-</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-white">{t('partners.table.rows.flatBounty')}</td>
                          <td className="px-4 py-3 font-bold text-blue-400">$60 / $10</td>
                          <td className="px-4 py-3">-</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-white">{t('partners.table.rows.multiTierReferral')}</td>
                          <td className="px-4 py-3 font-bold text-blue-400">{t('partners.table.rows.multiTierValue')}</td>
                          <td className="px-4 py-3">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-gray-100 min-w-[160px]"
                    onClick={() => window.location.href = i18n.language === 'en' ? '/partners' : `/${i18n.language}/partners`}
                  >
                    {t('team.explore')}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/10 text-white hover:bg-white/20 min-w-[160px]"
                    onClick={() => window.open('https://t.me/alex12alex', '_blank')}
                  >
                    {t('team.contact')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block rounded-full bg-green-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-700">
                {t('team.badge')}
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              {t('team.subtitle')}
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
                  <h3 className="mb-2 text-xl sm:text-2xl">{t('team.founder.name')}</h3>
                  <p className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-base sm:text-lg">
                    {t('team.founder.role')}
                  </p>

                  <p className="mb-6 text-sm sm:text-base text-gray-700">
                    {t('team.founder.bio')}
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
                {t('blog.badge')}
              </span>
            </div>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
              {t('blog.subtitle')}
            </p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 sm:gap-8 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
            {[...currentBlogPosts]
              .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
              .map((post) => (
                <a
                  key={post.id}
                  href={i18n.language === 'en' ? `/blog/${post.slug}` : `/${i18n.language}/blog/${post.slug}`}
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
                      {t('blog.readStory')}
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
              onClick={() => window.location.href = i18n.language === 'en' ? '/blog' : `/${i18n.language}/blog`}
              className="gap-2"
            >
              <BookOpen className="h-5 w-5" />
              {t('blog.viewAll')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Validation Section */}
      <IndustryValidation />



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
                {t('footer.description')}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {t('footer.copyright')}
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">{t('footer.product.title')}</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="#features" className="hover:text-blue-600" onClick={(e) => handleNavClick(e, 'features')}>{t('footer.product.features')}</a></li>
                <li><a href="#pricing" className="hover:text-blue-600" onClick={(e) => handleNavClick(e, 'pricing')}>{t('footer.product.pricing')}</a></li>
                <li><a href="/coming-soon.html" className="hover:text-blue-600">{t('footer.product.security')}</a></li>
                <li><a href="/coming-soon.html" className="hover:text-blue-600">{t('footer.product.roadmap')}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/login'); }} className="hover:text-blue-600">{t('footer.product.login')}</a></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">{t('footer.company.title')}</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="/coming-soon.html" className="hover:text-blue-600">{t('footer.company.about')}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-blue-600">{t('footer.company.blog')}</a></li>
                <li><a href="/coming-soon.html" className="hover:text-blue-600">{t('footer.company.careers')}</a></li>
                <li><a href="mailto:alex@dealoagent.ai" className="hover:text-blue-600">{t('footer.company.contact')}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/privacy-policy'); }} className="hover:text-blue-600">{t('footer.company.privacy')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
