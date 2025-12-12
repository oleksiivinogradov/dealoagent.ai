import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, MessageSquare, Users, BarChart, Zap, Globe, Shield, Clock, Target, ArrowRight, CheckCircle, TrendingUp, DollarSign, Layout, Cpu, Calendar, User, Mic, Server, CreditCard, PlusCircle, Briefcase, Link, Video, Linkedin, Search, FileText, Heart, Layers, Database, Minus, Send, Phone, Download } from 'lucide-react';
import { pitchDeckSlides, PitchSlide } from '../data/pitchDeckData';
import { Logo, AIBadge } from '../components/Logo';
import { Button } from '../components/ui/button';

// Icon Mapping
const iconMap: Record<string, any> = {
    Mail, MessageSquare, Users, BarChart, Zap, Globe, Shield, Clock, Target, ArrowRight, CheckCircle, TrendingUp, DollarSign, Layout, Cpu, Calendar, User, Mic, Server, CreditCard, PlusCircle, Briefcase, Link, Video, Linkedin, Search, FileText, Heart, Layers, Database, Minus, Send, Phone
};

export default function PitchDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);

    const slide = pitchDeckSlides[currentSlide];

    const nextSlide = () => {
        if (currentSlide < pitchDeckSlides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'f' || e.key === 'F') {
                e.preventDefault();
                toggleFullscreen();
            } else if (e.key === 'Escape') {
                setIsFullscreen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleDownloadPDF = () => {
        setIsPrinting(true);
        setTimeout(() => {
            window.print();
            setTimeout(() => setIsPrinting(false), 1000);
        }, 100);
    };

    // Background Logic
    const isDarkSlide = [1, 5, 7, 8, 13, 18].includes(slide.id);
    const bgClass = isDarkSlide
        ? 'bg-[#0D1E44] text-white'
        : 'bg-white text-slate-900';

    const textPrimary = isDarkSlide ? 'text-white' : 'text-slate-900';
    const textSecondary = isDarkSlide ? 'text-blue-200' : 'text-slate-600';


    // Visual Renderers (Zone D)
    const renderVisual = (slide: PitchSlide) => {
        const { type, content, chartType } = slide.sectionD;

        // Slide-specific generated images
        const imageMap: Record<number, string> = {
            2: '/pitch-deck-visuals/slide-2-problem.png',
            3: '/pitch-deck-visuals/slide-3-users.png',
            4: '/pitch-deck-visuals/slide-4-comparison.png',
            5: '/pitch-deck-visuals/slide-5-solution.png',
            6: '/pitch-deck-visuals/slide-6-workflow.png',
            7: '/pitch-deck-visuals/slide-7-product.png',
            8: '/pitch-deck-visuals/slide-8-market.png',
            9: '/pitch-deck-visuals/slide-9-timing.png',
            10: '/pitch-deck-visuals/slide-10-pricing.png',
            11: '/pitch-deck-visuals/slide-11-traction.png',
            12: '/pitch-deck-visuals/slide-12-funnel.png',
            14: '/pitch-deck-visuals/slide-14-architecture.png',
            15: '/pitch-deck-visuals/slide-15-roadmap.png',
            17: '/pitch-deck-visuals/slide-17-fundraising.png',
            18: '/pitch-deck-visuals/slide-18-closing.png'
        };

        // If we have a generated image for this slide
        if (imageMap[slide.id]) {
            return (
                <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                        src={imageMap[slide.id]}
                        alt={content}
                        className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                    />
                </div>
            );
        }

        // Special handling for Team slide (16) - Founder Photo
        if (slide.id === 16) {
            return (
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-2xl"></div>
                        <img
                            src="/pitch-deck-visuals/founder-photo.png"
                            alt="Oleksii Vinogradov - Founder"
                            className="relative rounded-3xl w-80 h-80 object-cover border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>
            );
        }


        if (type === 'visual' && content === 'Hero AI Symbol') {
            return (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="relative z-10 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl border border-white/10">
                        <Zap className="w-32 h-32 text-white" />
                    </div>
                </div>
            );
        }

        if (type === 'chart' && chartType === 'grid') {
            return (
                <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 grid grid-cols-2 gap-4">
                    <div className="bg-red-500/10 rounded-lg p-4 flex flex-col items-center justify-center border border-red-500/20">
                        <Layout className="w-8 h-8 text-red-400 mb-2" />
                        <span className="text-sm font-medium">Passive CRM</span>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-4 flex flex-col items-center justify-center border border-red-500/20">
                        <Mail className="w-8 h-8 text-red-400 mb-2" />
                        <span className="text-sm font-medium">Generic Outreach</span>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-4 flex flex-col items-center justify-center border border-red-500/20">
                        <Search className="w-8 h-8 text-red-400 mb-2" />
                        <span className="text-sm font-medium">No Intel</span>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-green-500/30 col-span-2">
                        <CheckCircle className="w-10 h-10 text-green-400 mb-2" />
                        <span className="text-lg font-bold text-green-400">DealoAgent.ai</span>
                    </div>
                </div>
            );
        }

        if (type === 'chart' && chartType === 'bar') {
            return (
                <div className="w-full h-full flex items-end justify-center gap-8 p-8">
                    <div className="w-24 h-1/3 bg-slate-700 rounded-t-lg relative group">
                        <div className="absolute -top-8 left-0 right-0 text-center text-sm">2023</div>
                    </div>
                    <div className="w-24 h-1/2 bg-blue-600 rounded-t-lg relative group">
                        <div className="absolute -top-8 left-0 right-0 text-center text-sm">2024</div>
                    </div>
                    <div className="w-24 h-3/4 bg-purple-600 rounded-t-lg relative group">
                        <div className="absolute -top-8 left-0 right-0 text-center text-sm font-bold">2025</div>
                    </div>
                </div>
            );
        }

        if (type === 'chart' && chartType === 'line') {
            return (
                <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 flex flex-col justify-end">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                        <polyline
                            points="20,180 100,150 180,120 260,80 340,40"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#39D2FF', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#8C4FFF', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            );
        }

        if (type === 'chart' && chartType === 'funnel') {
            return (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-8">
                    <div className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-medium">
                        Awareness
                    </div>
                    <div className="w-4/5 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-medium">
                        Interest
                    </div>
                    <div className="w-3/5 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-white font-medium">
                        Trial
                    </div>
                    <div className="w-2/5 h-12 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg flex items-center justify-center text-white font-bold">
                        Conversion
                    </div>
                </div>
            );
        }

        // Special handling for Competition slide (13) - Comparison Table
        if (slide.id === 13) {
            return (
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                        <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
                            <div className="p-4 text-sm font-semibold text-slate-400">Capability</div>
                            <div className="p-4 text-sm font-bold text-blue-400 text-center bg-blue-500/10">DealoAgent</div>
                            <div className="p-4 text-sm font-semibold text-slate-500 text-center">Legacy CRM</div>
                            <div className="p-4 text-sm font-semibold text-slate-500 text-center">Outreach</div>
                        </div>

                        {[
                            { name: 'Unified Conversations', dealo: true, crm: false, outreach: false },
                            { name: 'Competitor Intelligence', dealo: true, crm: false, outreach: false },
                            { name: 'Auto-fill CRM', dealo: true, crm: false, outreach: false },
                            { name: 'Contextual Outreach', dealo: true, crm: false, outreach: true },
                            { name: 'Deal Health', dealo: true, crm: true, outreach: false },
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                <div className="p-4 text-sm font-medium text-slate-300 flex items-center">{row.name}</div>
                                <div className="p-4 flex items-center justify-center bg-blue-500/5">
                                    {row.dealo ? <CheckCircle className="w-6 h-6 text-blue-400" /> : <Minus className="w-5 h-5 text-slate-600" />}
                                </div>
                                <div className="p-4 flex items-center justify-center border-l border-white/5">
                                    {row.crm ? <CheckCircle className="w-5 h-5 text-slate-500" /> : <Minus className="w-5 h-5 text-slate-600" />}
                                </div>
                                <div className="p-4 flex items-center justify-center border-l border-white/5">
                                    {row.outreach ? <CheckCircle className="w-5 h-5 text-slate-500" /> : <Minus className="w-5 h-5 text-slate-600" />}
                                </div>
                            </div>
                        ))}

                        <div className="p-4 grid grid-cols-4 bg-white/5">
                            <div className="text-xs text-slate-500 col-span-1 flex items-center">Key Players</div>
                            <div className="text-xs text-slate-500 text-center col-span-1 flex items-center justify-center">Us</div>
                            <div className="text-xs text-slate-500 text-center flex flex-col items-center justify-center">
                                <span>HubSpot, Salesforce</span>
                                <span>Attio, Folk, Close</span>
                            </div>
                            <div className="text-xs text-slate-500 text-center flex flex-col items-center justify-center">
                                <span>Apollo, Clay</span>
                                <span>Amplemarket</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (type === 'chart' && chartType === 'timeline') {
            return (
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative w-full">
                        <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
                        <div className="relative flex justify-between">
                            {['Q4 2025', 'Q1 2026', 'Q2 2026'].map((q, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white mb-4" />
                                    <span className="text-sm font-medium">{q}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // Default Placeholder
        return (
            <div className={`w-full h-full rounded-2xl border-2 border-dashed ${isDarkSlide ? 'border-blue-500/30 bg-blue-900/10' : 'border-slate-300 bg-slate-50'} flex items-center justify-center flex-col gap-4 p-8`}>
                {type === 'image' ? <Layout className="w-16 h-16 opacity-50" /> : <BarChart className="w-16 h-16 opacity-50" />}
                <span className="text-lg font-medium opacity-70">{content}</span>
            </div>
        );
    };

    return (
        <>
            {/* Print-only view - All slides */}
            {isPrinting && (
                <style>{`
                    @media print {
                        @page {
                            size: landscape;
                            margin: 0;
                        }
                        body {
                            margin: 0;
                            padding: 0;
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                        * {
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                            animation: none !important;
                            transition: none !important;
                        }
                        .print-slide {
                            page-break-after: always;
                            width: 100vw;
                            height: 100vh;
                            position: relative;
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                        .print-slide:last-child {
                            page-break-after: auto;
                        }
                        .no-print {
                            display: none !important;
                        }
                    }
                `}</style>
            )}

            {isPrinting ? (
                // Render all slides for PDF
                <div>
                    {pitchDeckSlides.map((slideData) => {
                        const isDarkSlide = [1, 5, 7, 8, 13, 18].includes(slideData.id);
                        const bgClass = isDarkSlide ? 'bg-[#0D1E44] text-white' : 'bg-white text-slate-900';
                        const textPrimary = isDarkSlide ? 'text-white' : 'text-slate-900';
                        const textSecondary = isDarkSlide ? 'text-blue-200' : 'text-slate-600';

                        return (
                            <div key={slideData.id} className={`print-slide ${bgClass} flex flex-col`}>
                                {slideData.id === 1 ? (
                                    // COVER SLIDE
                                    <div className="flex-1 flex flex-col items-center justify-center p-16 text-center relative overflow-hidden">
                                        {/* Gradient Orbs */}
                                        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
                                        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

                                        <div className="relative z-10 flex flex-col items-center gap-12">
                                            <div className="flex items-center gap-6 scale-150">
                                                <Logo variant="light" className="text-7xl" />
                                                <AIBadge className="w-20 h-20" />
                                            </div>
                                            <h2 className="text-4xl text-blue-200 font-light tracking-wide max-w-4xl leading-relaxed">
                                                {slideData.sectionA.subtitle}
                                            </h2>
                                        </div>
                                    </div>
                                ) : slideData.id === 13 ? (
                                    // COMPETITIVE LANDSCAPE SLIDE (Custom Full Layout)
                                    <div className="flex-1 flex flex-col items-center justify-start p-16 w-full max-w-[1800px] mx-auto">
                                        <div className="text-center mb-12">
                                            <h1 className="text-5xl font-bold text-white mb-4">Competitive Landscape</h1>
                                            <p className="text-2xl text-blue-200 font-light">Why DealoAgent wins against fragmented stacks</p>
                                        </div>

                                        <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                                            {/* Table Header */}
                                            <div className="grid grid-cols-4 bg-[#0D1E44]/80 border-b border-white/10">
                                                <div className="p-6 text-lg font-semibold text-slate-400 flex items-center">Feature</div>
                                                <div className="relative p-6 border-x border-white/10 bg-gradient-to-b from-blue-600/20 to-transparent">
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                                    <div className="flex flex-col items-center gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <Logo variant="light" className="text-2xl" />
                                                            <AIBadge className="w-6 h-6" />
                                                        </div>
                                                        <span className="text-xs text-blue-300 font-mono tracking-wider">ALL-IN-ONE AGENT</span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col items-center justify-center border-r border-white/5 bg-white/[0.02]">
                                                    <span className="text-lg font-bold text-white">Legacy & Modern CRM</span>
                                                    <div className="text-xs text-slate-500 mt-2 text-center leading-relaxed">
                                                        HubSpot • Salesforce<br />Attio • Folk • Close
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col items-center justify-center bg-white/[0.02]">
                                                    <span className="text-lg font-bold text-white">Outreach & Data</span>
                                                    <div className="text-xs text-slate-500 mt-2 text-center leading-relaxed">
                                                        Apollo • Clay<br />Amplemarket
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Table Body */}
                                            <div className="divide-y divide-white/5">
                                                {[
                                                    {
                                                        feature: "Core Function",
                                                        dealo: "Active AI Agent",
                                                        crm: "Passive Database",
                                                        outreach: "Templates & Lists",
                                                        icon: Zap
                                                    },
                                                    {
                                                        feature: "Data Entry",
                                                        dealo: "100% Automated",
                                                        crm: "Manual / Manual Link",
                                                        outreach: "Syncs to CRM (limited)",
                                                        icon: Database
                                                    },
                                                    {
                                                        feature: "Competitor Intel",
                                                        dealo: "Extracts from Convo & Docs",
                                                        crm: "None (Text Field)",
                                                        outreach: "None / Basic Intent",
                                                        icon: Shield
                                                    },
                                                    {
                                                        feature: "Context Source",
                                                        dealo: "Email, Calls, Msgs, PDFs",
                                                        crm: "Email Only (usually)",
                                                        outreach: "Cold Email Only",
                                                        icon: MessageSquare
                                                    },
                                                    {
                                                        feature: "Workflow",
                                                        dealo: "Chat-first (Natural Language)",
                                                        crm: "Forms & Tabs UI",
                                                        outreach: "Sequences & Tables",
                                                        icon: Layout
                                                    }
                                                ].map((row, idx) => (
                                                    <div key={idx} className="grid grid-cols-4 hover:bg-white/5 transition-colors group">
                                                        <div className="p-6 flex items-center gap-4 border-r border-white/5">
                                                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                                                <row.icon className="w-6 h-6" />
                                                            </div>
                                                            <span className="text-lg text-white font-medium">{row.feature}</span>
                                                        </div>

                                                        {/* DealoAgent Column */}
                                                        <div className="p-6 flex items-center justify-center border-x border-blue-500/30 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors relative">
                                                            <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                                                            <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                                                            <span className="text-lg font-bold text-blue-100 text-center">{row.dealo}</span>
                                                            <CheckCircle className="w-5 h-5 text-green-400 ml-3 absolute right-4 opacity-50" />
                                                        </div>

                                                        {/* CRM Column */}
                                                        <div className="p-6 flex items-center justify-center border-r border-white/5 text-center">
                                                            <span className="text-lg text-slate-400">{row.crm}</span>
                                                        </div>

                                                        {/* Outreach Column */}
                                                        <div className="p-6 flex items-center justify-center text-center">
                                                            <span className="text-lg text-slate-400">{row.outreach}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-6 bg-white/5 border-t border-white/10 text-center">
                                                <p className="text-slate-400 text-sm">
                                                    <span className="text-blue-400 font-semibold">The Gap:</span> While others focus on <i>storing</i> data or <i>sending</i> emails, DealoAgent focuses on <b>understanding the deal</b> to drive it forward.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // REGULAR SLIDES
                                    <>
                                        <div className="flex-1 relative px-16 pt-16 pb-28 grid grid-cols-2 grid-rows-[auto_1fr] gap-x-16 gap-y-8 max-w-[1600px] mx-auto w-full h-full">
                                            {/* Zone A */}
                                            <div className="flex flex-col justify-start">
                                                <h1 className="text-6xl font-bold leading-tight mb-4">{slideData.sectionA.title}</h1>
                                                {slideData.sectionA.subtitle && (
                                                    <p className={`text-3xl ${textSecondary} font-light`}>{slideData.sectionA.subtitle}</p>
                                                )}
                                            </div>

                                            {/* Zone B */}
                                            <div className="flex flex-col items-end justify-start text-right">
                                                {slideData.sectionB.type === 'logo' ? (
                                                    <div className="flex items-center gap-3 scale-110 origin-right">
                                                        <Logo variant={isDarkSlide ? 'light' : 'dark'} className="text-4xl" />
                                                        <AIBadge className="w-12 h-12" />
                                                    </div>
                                                ) : (
                                                    <h2 className={`text-3xl font-semibold ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'} max-w-xl leading-snug`}>
                                                        {slideData.sectionB.content}
                                                    </h2>
                                                )}
                                            </div>

                                            {/* Zone C */}
                                            <div className="flex flex-col justify-center">
                                                {slideData.sectionC.type === 'bullets' && slideData.sectionC.items && (
                                                    <div className="space-y-6">
                                                        {slideData.sectionC.items.map((item, idx) => {
                                                            const Icon = item.icon ? iconMap[item.icon] : ArrowRight;
                                                            return (
                                                                <div key={idx} className="flex items-center gap-4">
                                                                    <div className={`p-3 rounded-xl ${isDarkSlide ? 'bg-white/10' : 'bg-blue-50'}`}>
                                                                        <Icon className={`w-6 h-6 ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'}`} />
                                                                    </div>
                                                                    <span className={`text-2xl ${textPrimary} font-medium`}>{item.text}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                                {slideData.sectionC.type === 'contact' && slideData.sectionC.content && (
                                                    <div className="space-y-4">
                                                        {slideData.sectionC.content.map((line, idx) => {
                                                            const parts = line.split('|');
                                                            if (parts.length === 3) {
                                                                const Icon = iconMap[parts[0]] || Globe;
                                                                return (
                                                                    <div key={idx} className="flex items-center gap-3">
                                                                        <div className={`p-3 rounded-xl ${isDarkSlide ? 'bg-white/10' : 'bg-blue-50'}`}>
                                                                            <Icon className={`w-6 h-6 ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'}`} />
                                                                        </div>
                                                                        <span className={`text-2xl ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'}`}>{parts[2]}</span>
                                                                    </div>
                                                                );
                                                            }
                                                            return <p key={idx} className={`text-2xl ${textSecondary}`}>{line}</p>;
                                                        })}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Zone D - Render visual */}
                                            <div className="flex items-center justify-center pb-16">
                                                {renderVisual(slideData)}
                                            </div>
                                        </div>

                                        {/* Logo */}
                                        <div className="absolute bottom-8 right-8 z-50 opacity-70">
                                            <div className="flex items-center gap-2 scale-75 origin-bottom-right">
                                                <Logo variant={isDarkSlide ? 'light' : 'dark'} className="text-2xl" />
                                                <AIBadge className="w-8 h-8" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                // Normal presentation view
                <div className={`min-h-screen w-full overflow-hidden transition-colors duration-500 ${bgClass} flex flex-col`}>

                    {/* Slide Content */}
                    {slide.id === 1 ? (
                        // COVER SLIDE - Centered Layout
                        <div className="flex-1 flex flex-col items-center justify-center p-16 text-center animate-fade-in-scale">
                            {/* Gradient Orbs */}
                            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                            <div className="relative z-10 flex flex-col items-center gap-12">
                                {/* Centered Logo */}
                                <div className="flex items-center gap-6 scale-150">
                                    <Logo variant="light" className="text-7xl" />
                                    <AIBadge className="w-20 h-20" />
                                </div>

                                {/* Subtitle */}
                                <h2 className="text-4xl text-blue-200 font-light tracking-wide max-w-4xl leading-relaxed">
                                    {slide.sectionA.subtitle}
                                </h2>
                            </div>
                        </div>
                    ) : slide.id === 13 ? (
                        // COMPETITIVE LANDSCAPE SLIDE (Custom Full Layout)
                        <div className="flex-1 flex flex-col items-center justify-start p-16 animate-fade-in-up w-full max-w-[1800px] mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-5xl font-bold text-white mb-4">Competitive Landscape</h1>
                                <p className="text-2xl text-blue-200 font-light">Why DealoAgent wins against fragmented stacks</p>
                            </div>

                            <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                                {/* Table Header */}
                                <div className="grid grid-cols-4 bg-[#0D1E44]/80 border-b border-white/10">
                                    <div className="p-6 text-lg font-semibold text-slate-400 flex items-center">Feature</div>
                                    <div className="relative p-6 border-x border-white/10 bg-gradient-to-b from-blue-600/20 to-transparent">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="flex items-center gap-2">
                                                <Logo variant="light" className="text-2xl" />
                                                <AIBadge className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs text-blue-300 font-mono tracking-wider">ALL-IN-ONE AGENT</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col items-center justify-center border-r border-white/5 bg-white/[0.02]">
                                        <span className="text-lg font-bold text-white">Legacy & Modern CRM</span>
                                        <div className="text-xs text-slate-500 mt-2 text-center leading-relaxed">
                                            HubSpot • Salesforce<br />Attio • Folk • Close
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col items-center justify-center bg-white/[0.02]">
                                        <span className="text-lg font-bold text-white">Outreach & Data</span>
                                        <div className="text-xs text-slate-500 mt-2 text-center leading-relaxed">
                                            Apollo • Clay<br />Amplemarket
                                        </div>
                                    </div>
                                </div>

                                {/* Table Body */}
                                <div className="divide-y divide-white/5">
                                    {[
                                        {
                                            feature: "Core Function",
                                            dealo: "Active AI Agent",
                                            crm: "Passive Database",
                                            outreach: "Templates & Lists",
                                            icon: Zap
                                        },
                                        {
                                            feature: "Data Entry",
                                            dealo: "100% Automated",
                                            crm: "Manual / Manual Link",
                                            outreach: "Syncs to CRM (limited)",
                                            icon: Database
                                        },
                                        {
                                            feature: "Competitor Intel",
                                            dealo: "Extracts from Convo & Docs",
                                            crm: "None (Text Field)",
                                            outreach: "None / Basic Intent",
                                            icon: Shield
                                        },
                                        {
                                            feature: "Context Source",
                                            dealo: "Email, Calls, Msgs, PDFs",
                                            crm: "Email Only (usually)",
                                            outreach: "Cold Email Only",
                                            icon: MessageSquare
                                        },
                                        {
                                            feature: "Workflow",
                                            dealo: "Chat-first (Natural Language)",
                                            crm: "Forms & Tabs UI",
                                            outreach: "Sequences & Tables",
                                            icon: Layout
                                        }
                                    ].map((row, idx) => (
                                        <div key={idx} className="grid grid-cols-4 hover:bg-white/5 transition-colors group">
                                            <div className="p-6 flex items-center gap-4 border-r border-white/5">
                                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                                    <row.icon className="w-6 h-6" />
                                                </div>
                                                <span className="text-lg text-white font-medium">{row.feature}</span>
                                            </div>

                                            {/* DealoAgent Column */}
                                            <div className="p-6 flex items-center justify-center border-x border-blue-500/30 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors relative">
                                                <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                                                <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                                                <span className="text-lg font-bold text-blue-100 text-center">{row.dealo}</span>
                                                <CheckCircle className="w-5 h-5 text-green-400 ml-3 absolute right-4 opacity-50" />
                                            </div>

                                            {/* CRM Column */}
                                            <div className="p-6 flex items-center justify-center border-r border-white/5 text-center">
                                                <span className="text-lg text-slate-400">{row.crm}</span>
                                            </div>

                                            {/* Outreach Column */}
                                            <div className="p-6 flex items-center justify-center text-center">
                                                <span className="text-lg text-slate-400">{row.outreach}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-white/5 border-t border-white/10 text-center">
                                    <p className="text-slate-400 text-sm">
                                        <span className="text-blue-400 font-semibold">The Gap:</span> While others focus on <i>storing</i> data or <i>sending</i> emails, DealoAgent focuses on <b>understanding the deal</b> to drive it forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // REGULAR SLIDES - Z-Pattern Grid
                        <>
                            <div className="flex-1 relative px-16 pt-16 pb-28 grid grid-cols-2 grid-rows-[auto_1fr] gap-x-16 gap-y-8 max-w-[1600px] mx-auto w-full h-full">

                                {/* ZONE A: Top-Left (Title) */}
                                <div className="flex flex-col justify-start animate-fade-in-up">
                                    <h1 className="text-6xl font-bold leading-tight mb-4">
                                        {slide.sectionA.title}
                                    </h1>
                                    {slide.sectionA.subtitle && (
                                        <p className={`text-3xl ${textSecondary} font-light`}>
                                            {slide.sectionA.subtitle}
                                        </p>
                                    )}
                                </div>

                                {/* ZONE B: Top-Right (Key Value / Logo) */}
                                <div className="flex flex-col items-end justify-start text-right animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                    {slide.sectionB.type === 'logo' ? (
                                        <div className="flex items-center gap-3 scale-110 origin-right">
                                            <Logo variant={isDarkSlide ? 'light' : 'dark'} className="text-4xl" />
                                            <AIBadge className="w-12 h-12" />
                                        </div>
                                    ) : (
                                        <h2 className={`text-3xl font-semibold ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'} max-w-xl leading-snug`}>
                                            {slide.sectionB.content}
                                        </h2>
                                    )}
                                </div>

                                {/* ZONE C: Bottom-Left (Supporting Content) */}
                                <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    {slide.sectionC.type === 'bullets' && slide.sectionC.items && (
                                        <div className={slide.sectionC.items.length > 5 ? "space-y-3" : "space-y-6"}>
                                            {slide.sectionC.items.map((item, idx) => {
                                                const Icon = item.icon ? iconMap[item.icon] : ArrowRight;
                                                const items = slide.sectionC.items || [];
                                                const isLongList = items.length > 5;
                                                return (
                                                    <div key={idx} className="flex items-center gap-4 group">
                                                        <div className={`${isLongList ? 'p-2' : 'p-3'} rounded-xl ${isDarkSlide ? 'bg-white/10' : 'bg-blue-50'} group-hover:scale-110 transition-transform`}>
                                                            <Icon className={`${isLongList ? 'w-5 h-5' : 'w-6 h-6'} ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'}`} />
                                                        </div>
                                                        <span className={`${isLongList ? 'text-lg' : 'text-2xl'} ${textPrimary} font-medium leading-tight`}>{item.text}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {slide.sectionC.type === 'contact' && slide.sectionC.content && (
                                        <div className="space-y-4">
                                            {slide.sectionC.content.map((line, idx) => {
                                                // Parse format: "Icon|URL|Label" or "URL|Label" or just "Label"
                                                const parts = line.split('|');

                                                if (parts.length === 3) {
                                                    // Icon|URL|Label format
                                                    const iconName = parts[0];
                                                    const url = parts[1];
                                                    const label = parts[2];
                                                    const Icon = iconMap[iconName] || Globe;

                                                    return (
                                                        <a
                                                            key={idx}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 group"
                                                        >
                                                            <div className={`p-3 rounded-xl ${isDarkSlide ? 'bg-white/10' : 'bg-blue-50'} group-hover:scale-110 transition-transform`}>
                                                                <Icon className={`w-6 h-6 ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'}`} />
                                                            </div>
                                                            <span className={`text-2xl ${isDarkSlide ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-600 group-hover:text-blue-700'} transition-colors`}>
                                                                {label}
                                                            </span>
                                                        </a>
                                                    );
                                                } else if (parts.length === 2) {
                                                    // URL|Label format (legacy)
                                                    const url = parts[0];
                                                    const label = parts[1];

                                                    return (
                                                        <a
                                                            key={idx}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`text-2xl ${isDarkSlide ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'} transition-colors underline decoration-2 underline-offset-4 block`}
                                                        >
                                                            {label}
                                                        </a>
                                                    );
                                                }

                                                // Plain text
                                                return (
                                                    <p key={idx} className={`text-2xl ${textSecondary}`}>{line}</p>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* ZONE D: Bottom-Right (Visuals) */}
                                <div className="flex items-center justify-center animate-fade-in-scale pb-16" style={{ animationDelay: '0.3s' }}>
                                    {renderVisual(slide)}
                                </div>

                            </div>

                            {/* Persistent Bottom-Right Logo - Absolute positioned relative to flex-1 container */}
                            <div className="absolute bottom-8 right-8 z-50 opacity-70 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-2 scale-75 origin-bottom-right">
                                    <Logo variant={isDarkSlide ? 'light' : 'dark'} className="text-2xl" />
                                    <AIBadge className="w-8 h-8" />
                                </div>
                            </div>
                        </>
                    )}


                    {/* Navigation Bar */}
                    <div className={`h-16 border-t ${isDarkSlide ? 'border-white/10 bg-[#0D1E44]' : 'border-slate-200 bg-white'} flex items-center justify-between px-8`}>
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" onClick={prevSlide} disabled={currentSlide === 0} className={textSecondary}>
                                <ChevronLeft className="w-5 h-5 mr-2" /> Prev
                            </Button>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className={`text-sm font-medium ${textSecondary}`}>
                                Slide {currentSlide + 1} of {pitchDeckSlides.length}
                            </span>
                            <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 transition-all duration-300"
                                    style={{ width: `${((currentSlide + 1) / pitchDeckSlides.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" onClick={handleDownloadPDF} className={textSecondary}>
                                <Download className="w-5 h-5 mr-2" />
                                Download PDF
                            </Button>
                            <Button variant="ghost" size="sm" onClick={nextSlide} disabled={currentSlide === pitchDeckSlides.length - 1} className={textSecondary}>
                                Next <ChevronRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={toggleFullscreen} className={textSecondary}>
                                {isFullscreen ? 'Exit' : 'Fullscreen'}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
