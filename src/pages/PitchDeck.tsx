import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, MessageSquare, Users, BarChart, Zap, Globe, Shield, Clock, Target, ArrowRight, CheckCircle, TrendingUp, DollarSign, Layout, Cpu, Calendar, User, Mic, Server, CreditCard, PlusCircle, Briefcase, Link, Video, Linkedin, Search, FileText, Heart, Layers, Database, Minus, Send, Phone } from 'lucide-react';
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
            13: '/pitch-deck-visuals/slide-13-competition.png',
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
                            src="/src/assets/91f0865d322b601ece4b8e907c5b04462763af93.png"
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
                                <div className="space-y-6">
                                    {slide.sectionC.items.map((item, idx) => {
                                        const Icon = item.icon ? iconMap[item.icon] : ArrowRight;
                                        return (
                                            <div key={idx} className="flex items-center gap-4 group">
                                                <div className={`p-3 rounded-xl ${isDarkSlide ? 'bg-white/10' : 'bg-blue-50'} group-hover:scale-110 transition-transform`}>
                                                    <Icon className={`w-6 h-6 ${isDarkSlide ? 'text-blue-300' : 'text-blue-600'}`} />
                                                </div>
                                                <span className={`text-2xl ${textPrimary} font-medium`}>{item.text}</span>
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
                    <Button variant="ghost" size="sm" onClick={nextSlide} disabled={currentSlide === pitchDeckSlides.length - 1} className={textSecondary}>
                        Next <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={toggleFullscreen} className={textSecondary}>
                        {isFullscreen ? 'Exit' : 'Fullscreen'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
